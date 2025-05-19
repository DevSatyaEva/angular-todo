import { number, string } from 'mathjs';

export enum ConditionType {
  IF = 1,
  ELSE_IF = 2,
  ELSE = 3,
  AND = 4,
  OR = 5,
}

export enum ComparableField {
  ProjectLaminate = 1,
  OpportunityState = 2,
  ProjectAreaSqFt = 3,
  ProjectAreaSqMt = 4,
  AreaSqftFg = 5,
  AreaSqmtFg = 6,
}

export enum ComparatorType {
  EqualTo = 1,
  GreaterThan = 2,
  GreaterThanOrEqualTo = 3,
  LessThan = 4,
  LessThanOrEqualTo = 5,
  Between = 6,
}
export interface AdvanceFormulaCondition {
  parentId: number | null;
  formulaOrder: number;
  condition: ConditionType;
  comparable: ComparableField;
  comparator: ComparatorType;
  valueField: string | { from: string; to: string }; // Can be a string or range for "Between"
  rate: number;
  child: AdvanceFormulaCondition[];
}
export interface AdvanceFormula {
  priceElementsId: number;
  advanceFormula: AdvanceFormulaCondition[];
}

export interface valueOption {
  id: string | number;
  name: string;
}

export const comparableOptions = [
  { id: ComparableField.ProjectLaminate, name: 'ProjectLaminate' },
  { id: ComparableField.OpportunityState, name: 'OpportunityState' },
  { id: ComparableField.ProjectAreaSqFt, name: 'ProjectAreaSqFt' },
  { id: ComparableField.ProjectAreaSqMt, name: 'ProjectAreaSqMt' },
  { id: ComparableField.AreaSqftFg, name: 'AreaSqftFg' },
  { id: ComparableField.AreaSqmtFg, name: 'AreaSqmtFg' },
];

export const comparatorOptions = [
  { id: ComparatorType.EqualTo, name: 'Equal to =' },
  { id: ComparatorType.GreaterThan, name: 'Greater than >' },
  { id: ComparatorType.GreaterThanOrEqualTo, name: 'Greater than or equal to ≥' },
  { id: ComparatorType.LessThan, name: 'Less than <' },
  { id: ComparatorType.LessThanOrEqualTo, name: 'Less than or equal to ≤' },
  { id: ComparatorType.Between, name: 'Between ≬' },
];

export const laminateOptions = [
  { id: 'NoLaminate', name: 'No Laminate' },
  { id: 'Laminate', name: 'Laminate' },
  { id: 'Both', name: 'Both' },
];

export const opportunityLocationStates = [
  { id: 'MH', name: 'Maharashtra' },
  { id: 'KA', name: 'Karnataka' },
  { id: 'DL', name: 'Delhi' },
  { id: 'TN', name: 'Tamil Nadu' },
];
