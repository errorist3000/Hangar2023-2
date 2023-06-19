export type SelectOption = {
  label: string
  value: string | null
}

export enum CalcBuildingSizeRanges {
  MinWidth = 10,
  MaxWidth = 40,
  MinLength = 12,
  MaxLength = 96,
  MinHeight = 3,
  MaxHeight = 12,
}

export enum CalcGateRanges {
  MinWidth = 3,
  MaxWidth = 18,
  MinHeight = 2,
  MaxHeight = 8,
}

export enum CalcGateSteps {
  Width = 0.5,
  Height = 0.5,
}

export enum CalcGateTypes {
  Pivot = 'pivot',
  Sliding = 'sliding',
  LiftingManual = 'liftingManual',
  LiftingElectric = 'liftingElectric',
}

export const CALC_GATE_COUNTS = {
  NONE: { label: 'нет', value: null },
  ONE: { label: '1', value: 1 },
  TWO: { label: '2', value: 2 },
  THREE: { label: '3', value: 3 },
  FOUR: { label: '4', value: 4 },
}

export enum CalcBuildingSizeSteps {
  Width = 1,
  Length = 3,
  Height = 0.5,
}

export enum CalcBuildingTypes {
  Tent = 'tent',
  Sandwich = 'sandwich',
}

export enum CalcWindowTypes {
  None = 'none',
  OneLine = 'oneLine',
  TwoLine = 'twoLine',
}

export type CalcBuildingParams = {
  gateCount: SelectOption
  gateHeight?: number
  gateType: SelectOption
  gateWidth?: number
  height: number
  length: number
  type: CalcBuildingTypes.Tent | CalcBuildingTypes.Sandwich
  width: number
  region: string
  doorCount: SelectOption
  windowType: CalcWindowTypes
}

export const CALC_BUILDING_TYPE_NAMES = {
  [CalcBuildingTypes.Tent]: 'Тент',
  [CalcBuildingTypes.Sandwich]: 'Сэндвич-панель',
}

export const CALC_GATE_TYPE_NAMES = {
  [CalcGateTypes.Pivot]: 'Распашные',
  [CalcGateTypes.Sliding]: 'Откатные',
  [CalcGateTypes.LiftingManual]: 'Подъемные с ручным приводом',
  [CalcGateTypes.LiftingElectric]: 'Подъемные с электроприводом',
}

export const CALC_GATE_TYPE_OPTIONS: SelectOption[] = [
  {
    label: CALC_GATE_TYPE_NAMES[CalcGateTypes.Pivot],
    value: CalcGateTypes.Pivot,
  },
  {
    label: CALC_GATE_TYPE_NAMES[CalcGateTypes.Sliding],
    value: CalcGateTypes.Sliding,
  },
  {
    label: CALC_GATE_TYPE_NAMES[CalcGateTypes.LiftingManual],
    value: CalcGateTypes.LiftingManual,
  },
  {
    label: CALC_GATE_TYPE_NAMES[CalcGateTypes.LiftingElectric],
    value: CalcGateTypes.LiftingElectric,
  },
]

export const CALC_GATE_COUNT_OPTIONS: SelectOption[] = [
  { label: CALC_GATE_COUNTS.NONE.label, value: CALC_GATE_COUNTS.NONE.value },
  { label: CALC_GATE_COUNTS.ONE.label, value: CALC_GATE_COUNTS.ONE.label },
  { label: CALC_GATE_COUNTS.TWO.label, value: CALC_GATE_COUNTS.TWO.label },
  { label: CALC_GATE_COUNTS.THREE.label, value: CALC_GATE_COUNTS.THREE.label },
  { label: CALC_GATE_COUNTS.FOUR.label, value: CALC_GATE_COUNTS.FOUR.label },
]

export const CALC_DOOR_COUNT_OPTIONS: SelectOption[] = [
  { label: CALC_GATE_COUNTS.NONE.label, value: CALC_GATE_COUNTS.NONE.value },
  { label: CALC_GATE_COUNTS.ONE.label, value: CALC_GATE_COUNTS.ONE.label },
  { label: CALC_GATE_COUNTS.TWO.label, value: CALC_GATE_COUNTS.TWO.label },
  { label: CALC_GATE_COUNTS.THREE.label, value: CALC_GATE_COUNTS.THREE.label },
  { label: CALC_GATE_COUNTS.FOUR.label, value: CALC_GATE_COUNTS.FOUR.label },
]

export const CALC_BUILDING_DEFAULT_PARAMETERS: CalcBuildingParams = {
  type: CalcBuildingTypes.Tent,
  width:
    (CalcBuildingSizeRanges.MinWidth + CalcBuildingSizeRanges.MaxWidth) / 2,
  length:
    (CalcBuildingSizeRanges.MinLength + CalcBuildingSizeRanges.MaxLength) / 2,
  height:
    (CalcBuildingSizeRanges.MinHeight + CalcBuildingSizeRanges.MaxHeight) / 2,
  gateCount: CALC_GATE_COUNT_OPTIONS[0],
  gateType: CALC_GATE_TYPE_OPTIONS[0],
  region: 'Москва',
  doorCount: CALC_DOOR_COUNT_OPTIONS[0],
  windowType: CalcWindowTypes.None,
}

export const DOOR_SIZE = {
  WIDTH: 0.9,
  HEIGHT: 2.1,
}

export const WINDOW_SIZE = {
  HEIGHT: 1.2,
}

export type CalcOffer = {
  skeletonMaterial: {
    id: number
    title: string
    description: string
    price: string
  }
  skeletonMounting: {
    id: number
    title: string
    description: string
    price: string
  }
  roofMaterial: {
    id: number
    title: string
    description: string
    price: string
  }
  roofMounting: {
    id: number
    title: string
    description: string
    price: string
  }
  wallsMaterial: {
    id: number
    title: string
    description: string
    price: string
  }
  wallsMounting: {
    id: number
    title: string
    description: string
    price: string
  }
  gate: {
    id: number
    title: string
    description: string
    price: string
  }
  door: {
    id: number
    title: string
    description: string
    price: string
  }
  window: {
    id: number
    title: string
    description: string
    price: string
  }
  total: {
    id: number
    title: string
    description: string
    price: string
  }
}

export const CALC_OFFER_TOTAL_ID = 9999
