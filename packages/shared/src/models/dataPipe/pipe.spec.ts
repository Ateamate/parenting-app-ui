import { DataPipe, IDataPipeOperation } from "./pipe";

const testData = {
  names: [
    {
      id: "id_1",
      first_name: "Ada",
      last_name: "Lovelace",
    },
    {
      id: "id_2",
      first_name: "Blaise",
      last_name: "Pascal",
    },
  ],
};

describe("Data Pipe", () => {
  it("Process multiple operations", () => {
    const operations: IDataPipeOperation[] = [
      {
        input_source: "names",
        operation: "filter",
        args: ["first_name.startsWith('A')"],
      },
      {
        operation: "append_columns",
        args: ["full_name: @row.first_name @row.last_name"],
      },
    ];
    const pipe = new DataPipe(operations, testData);
    pipe.run();
  });
  it("Store named outputs", () => {
    const operations: IDataPipeOperation[] = [
      {
        input_source: "names",
        operation: "filter",
        args: [],
        output_target: "output_a",
      },
      {
        input_source: "names",
        operation: "filter",
        args: [],
        output_target: "temp_b : local_only",
      },
      {
        input_source: "temp_b",
        operation: "filter",
        args: [],
        output_target: "output_b",
      },
      {
        input_source: "temp_b",
        operation: "filter",
        args: [],
        output_target: "output_c",
      },
    ];
    const pipe = new DataPipe(operations, testData);
    pipe.run();
    expect(Object.keys(pipe.outputTargets)).toEqual(["output_a", "output_b", "output_c"]);
  });
  it("Remove local-only outputs", () => {
    expect(true).toEqual(false);
  });
  // Error Handling and QC
  it("Throw on invalid operation", () => {
    expect(true).toEqual(false);
  });

  it("Throw on invalid args", () => {
    expect(true).toEqual(false);
  });
});
