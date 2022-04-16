/* eslint-disable */
import { FlowTypes } from "data-models";
const tour: FlowTypes.Tour[] = [
  {
    flow_type: "tour",
    flow_name: "debug_tour_var_hyphen",
    status: "released",
    flow_subtype: "debug",
    rows: [
      {
        type: "step",
        title: "@global.parent_app-based learning",
        _translations: {
          title: {},
          message_text: {},
        },
        message_text: "<p>Does not work in gb_en</p>",
        route: "template/debug_var_hyphen",
      },
      {
        type: "step",
        title: "Your @global.parent_app Code",
        _translations: {
          title: {
            tz_sw: true,
            za_af: true,
            za_st: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
          message_text: {},
        },
        message_text: "<p>Works in gb_en, not in za_af</p>",
        route: "template/debug_var_hyphen",
      },
    ],
    _xlsxPath: "quality_assurance/debug_templates/debug_global.xlsx",
  },
  {
    flow_type: "tour",
    flow_name: "debug_tour",
    status: "released",
    flow_subtype: "debug",
    rows: [
      {
        type: "step",
        title: "Start of tour",
        _translations: {
          title: {},
          message_text: {},
        },
        message_text:
          "This will navigate to the example_tour_template_1 and highlight the title_1 template component",
        template_component_name: "title_1",
        route: "template/example_tour_template_1",
        exclude_from_translation: true,
      },
      {
        type: "step",
        title: "Element example",
        _translations: {
          title: {},
          message_text: {},
        },
        message_text:
          "The element column allows for my advanced/specific highlight selection (in rare cases where not created by a template row)",
        element: "plh-main-header",
        route: "template/example_tour_template_1",
        exclude_from_translation: true,
      },
      {
        type: "step",
        title: "Template example",
        _translations: {
          title: {},
          message_text: {},
        },
        message_text: "The next step will render a template instead of a message",
        route: "template/example_tour_template_1",
      },
      {
        type: "step",
        title: "Template example",
        _translations: {
          title: {},
          message_text: {},
        },
        message_text: "This message will not be shown as a message_template is included",
        message_template: "example_tour_template_1",
        route: "template/example_tour_template_1",
        exclude_from_translation: true,
      },
      {
        type: "step",
        title: "Navigation example",
        _translations: {
          title: {},
          message_text: {},
        },
        message_text: "The next step will navigate to the home_screen to continue the tour",
        route: "template/example_tour_template_1",
        exclude_from_translation: true,
      },
      {
        type: "step",
        title: "Title 1",
        _translations: {
          title: {},
          message_text: {},
        },
        message_text: "<p> Text </p>",
        route: "template/home_screen",
        exclude_from_translation: true,
      },
      {
        type: "step",
        title: "Title 2",
        _translations: {
          title: {},
          message_text: {},
        },
        message_text:
          "<p> global: @global.parent_app </p>\n<p> data: @data.example.example1.text</p>",
        template_component_name: "tile_weekly_workshops",
        route: "template/home_screen",
        exclude_from_translation: true,
      },
      {
        type: "step",
        title: "Title 3",
        _translations: {
          title: {},
          message_text: {},
        },
        message_text: "<p> Text </p>",
        template_component_name: "quick_start_weekly_workshops",
        route: "template/home_screen",
        exclude_from_translation: true,
      },
      {
        type: "step",
        title: "Navigation example 2",
        _translations: {
          title: {},
          message_text: {},
        },
        message_text:
          "This will navigate to same page as start\n(TODO - provide 'back' nav function)",
        route: "template/example_tour_template_1",
        exclude_from_translation: true,
      },
    ],
    _xlsxPath: "quality_assurance/debug_templates/debug_tour.xlsx",
  },
  {
    flow_type: "tour",
    flow_name: "example_tour_templates",
    status: "released",
    flow_subtype: "debug",
    rows: [
      {
        type: "step",
        title: "Title 1",
        _translations: {
          title: {},
        },
        message_template: "example_tour_template_1",
      },
      {
        type: "step",
        title: "Title 2",
        _translations: {
          title: {},
          message_text: {},
        },
        message_text: "This is regular text",
      },
    ],
    _xlsxPath: "quality_assurance/debug_templates/debug_tour.xlsx",
  },
  {
    flow_type: "tour",
    flow_name: "example_lang_tour",
    status: "released",
    flow_subtype: "debug",
    rows: [
      {
        type: "step",
        title: "<p>Standard Template</p>",
        _translations: {
          title: {
            es_sp: true,
          },
          message_text: {
            es_sp: true,
          },
        },
        message_text:
          "<p>This is a standard template that demonstrates a variety of things that would need to be translated and a few things that are excluded from translation.</p>",
        route: "template/example_lang_template_1",
      },
      {
        type: "step",
        title: "<p>Nested Template</p>",
        _translations: {
          title: {
            es_sp: true,
          },
          message_text: {
            es_sp: true,
          },
        },
        message_text:
          "<p>This is a nested template that demonstrates a variety of things that would need to be translated and a few things that are excluded from translation. This will allow us to check that the multi-lingual system works with nesting.</p>",
        route: "template/example_lang_template_2",
      },
      {
        type: "step",
        title: "<p>Component to translate</p>",
        _translations: {
          title: {
            es_sp: true,
          },
          message_text: {
            es_sp: true,
          },
        },
        message_text:
          "<p>This is an example of a component that requires translation: the placeholder text and the selected option should be translated</p>",
        template_component_name: "combo_box",
        route: "template/example_lang_template_1",
      },
      {
        type: "step",
        title: "<p>Component that should not be translated translate</p>",
        _translations: {
          title: {
            es_sp: true,
          },
          message_text: {
            es_sp: true,
          },
        },
        message_text:
          "<p>This is an example of a component that is excluded from translation. The button text should still be Pop-up 1.</p>",
        template_component_name: "button_1",
        route: "template/example_lang_template_1",
      },
      {
        type: "step",
        title: "<p>Step without translation</p>",
        _translations: {
          title: {},
          message_text: {},
        },
        message_text:
          "<p>This step in the tour should not be translated as the exclude_from_translation column is TRUE.</p>",
        route: "template/example_lang_template_1",
        exclude_from_translation: true,
      },
    ],
    _xlsxPath: "quality_assurance/example_templates/example_languages.xlsx",
  },
];
export default tour;
