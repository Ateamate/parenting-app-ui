import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import katex from "katex";
import { extractMath, Segment } from "extract-math";

@Pipe({
  name: "latex",
})
export class LatexPipe implements PipeTransform {
  segments: Segment[] = [];

  constructor(private domSanitizer: DomSanitizer) {}

  transform(latexInput: string): SafeHtml {
    if (latexInput && typeof latexInput === "string" && latexInput.length >= 0) {
      const bracketDelimitedSegments = extractMath(latexInput, {
        delimiters: {
          inline: ["\\(", "\\)"],
          display: ["\\[", "\\]"],
        },
      });

      this.segments =
        bracketDelimitedSegments.length > 1
          ? bracketDelimitedSegments
          : extractMath(latexInput, {
              delimiters: {
                inline: ["$", "$"],
                display: ["$$", "$$"],
              },
            });

      let htmlString = `<p>`;
      if (this.segments.some((segment) => segment.math)) {
        // detect whether input string contains a LaTeX 'math' segment, and is therefore in LaTeX's 'paragraph mode', else is itself in 'math mode'
        for (const segment of this.segments) {
          if (segment.math) {
            htmlString += katex.renderToString(segment.raw, {
              displayMode: segment.type === "display",
              throwOnError: true,
            });
          } else {
            htmlString += segment.value;
          }
        }
      } else {
        htmlString += katex.renderToString(latexInput, {
          throwOnError: true,
        });
      }
      htmlString += `</p>`;

      return this.domSanitizer.bypassSecurityTrustHtml(htmlString);
    }
    return latexInput;
  }
}
