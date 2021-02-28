import chalk from "chalk";
import { FlowTypes } from "../../../../types";
import { DefaultParser } from "../default/default.parser";

type IConditionList = FlowTypes.Reminder_conditionList;

export class ReminderListParser extends DefaultParser {
  constructor() {
    super();
  }
  postProcess(row: FlowTypes.Reminder_listRow) {
    // extract piped conditions
    const activationConditions = row.activation_condition_list as any[];
    row.activation_condition_list = activationConditions.map((c) => extractConditionList(c));
    const deactivationConditions = row.deactivation_condition_list as any[];
    row.deactivation_condition_list = deactivationConditions.map((c) => extractConditionList(c));
    return row;
  }
}

/**
 * TODO
 * 2021-02-27 CC
 * Failed attempt to make more systematic conversion/typing
 *
 *
 * Take an activation or deactivation criteria and format for use
 * @param c condition string formatted with pipe characters to separate action | value | timings
 * @example
 * ```
 * event_completed | first_app_launch | delay_1_day
 * ```
 */
function extractConditionList(conditionText: string) {
  const rawTxt = conditionText;
  const cleanedTxt = _replaceShorthandText(conditionText);
  const data: string[][] = _parseXlsxData(cleanedTxt);

  const conditionExtractors: {
    [key in IConditionList["condition_type"]]: (data: any[][]) => IConditionList;
  } = {
    field_evaluation: parseFieldEvaluationCondition,
    db_lookup: parseDBLookupCondition,
  };

  console.log("[data]", data);
  const condition_type = data[0][0];
  if (!conditionExtractors.hasOwnProperty(condition_type)) {
    console.error(chalk.red(`cannot extract condition args:`, data));
    process.exit(1);
  }
  const condition: IConditionList = conditionExtractors[condition_type](data);
  condition._raw = rawTxt;
  condition._cleaned = cleanedTxt;
  console.log(condition);
  return condition;

  let [typeStr, argsStr, evaluationStr] = conditionText.split("|").map((s: string) => s.trim());
  if (typeStr.includes("_completed")) {
    argsStr += ":completed";
  }
  console.log([typeStr, argsStr, evaluationStr]);

  // let timing: IConditionList["timing"] = null;
  if (evaluationStr) {
    const [comparatorText, quantity, unit] = evaluationStr.split(":").map((s: string) => s.trim());
    const comparator = _extractComparator(comparatorText);
    // timing = { comparator, quantity: quantity ? Number(quantity) : null, unit } as any;
  }
  return condition;
}

function parseFieldEvaluationCondition(data: any[][]): IConditionList {
  const [[condition_type], [evaluate]] = data;
  return {
    condition_type,
    condition_args: {
      field_evaluation: { evaluate },
    },
  };
}
function parseDBLookupCondition(data: any[][]): IConditionList {
  const [typeData, tableData, valueData, evaulateData] = data;
  const [condition_type, orderStr, sort_by] = typeData;
  const [[table_id], [filter_field]] = tableData;
  const [value] = valueData;
  return {
    condition_type,
    condition_args: {
      db_lookup: {
        table_id,
        // aggregate: () => "",
        filter_field: filter_field || "id",
        filter_value: value,
        order: orderStr === "first" ? "asc" : "desc",
        sort_by: sort_by || "_created",
        evaluate: [(result) => true],
      },
    },
  };
}

/**
 * some common authoring scenarios have been reduced to single keywords for ease-of-authoring
 * replace these with full specifications
 */
function _replaceShorthandText(text: string) {
  // a maximum of 1 replacement will be made, so order in terms of specifivity
  const shorthandReplacements = {
    sent: "db_lookup | reminders:reminder_id | sent",
    first_launch: "db_lookup:first |app_events:event_id | app_launch",
    app_launch: "db_lookup | app_events:event_id | app_launch",
    task_completed: "db_lookup | task_actions:task_id",
  };
  Object.entries(shorthandReplacements).some(([original, replacement]) => {
    // use a regular expression to prevent matching words that have additional content before
    // e.g. app_launch should not match on first_app_launch (start of string regex)
    const regex = new RegExp(`^${original}`);
    text = text.replace(regex, replacement);
    // if a match has been found return a true value so that future matches are not made
    // (e.g. prevent app_launch match running after first_launch match)
    return regex.test(text);
  });
  return text;
}

/**
 * When timing conditions are specified related to a reminder, the condition should be specified
 * with leading text such as before_3_day or after_2_day.
 * Convert the text into a logical comparator that will be used during evaluation
 */
function _extractComparator(text: string) {
  // : IConditionList["timing"]["comparator"]
  // when comparing, the target evaluation value will be compared relative to todays date / app day
  // first the difference between the target event and today is calculated, called diffInDays (app or calendar)
  // for an event to happen n days before (or more), diffInDays > n
  // for an event to happen within n days, diffInDays <= n
  switch (text) {
    case "before":
      return ">";
    case "within":
      return "<=";
    default:
      console.error(chalk.red(`Reminder timing comparison not defined: ${text}`));
      process.exit(1);
  }
}

/**
 * Xls data represents nested objects in the following ways
 * ';' - pre-processing with '_list' columns to format as array
 * '|' - post-processing specific item into set of arguments / parameters
 * ':' - modifiers or properties of an argument
 *
 * As the pipe and colon characters may or may not exist for a particular string
 * it is impossible to know any given data needs to be formatted as string or array
 * to remain consistent with the rest of the column. As such all strings will be
 * treated as arrays, and deeply nested objects extracted in future processing stages
 */
function _parseXlsxData(data: any): any[] | string[][] {
  if (typeof data === "string") {
    if (data.includes(";")) {
      console.error(chalk.red('lists should be pre-processed, but ";" found'));
      process.exit(1);
    }
    // first parse, convert pipes
    if (data.includes("|")) {
      data = data.split("|").map((d) => d.trim());
      return _parseXlsxData(data);
    }
    if (data.includes(":")) {
      data = data.split(":").map((d) => d.trim());
      return _parseXlsxData(data);
    }
    return [data];
  }
  if (Array.isArray(data)) {
    data = data.map((d) => _parseXlsxData(d));
  }
  return data as string[][];
}
