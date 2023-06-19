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
  None = 'none',
  Pivot = 'pivot',
  Sliding = 'sliding',
  LiftingManual = 'liftingManual',
  LiftingElectric = 'liftingElectric',
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
  gateCount: number
  gateHeight?: number
  gateType: SelectOption
  gateWidth?: number
  height: number
  length: number
  type: CalcBuildingTypes.Tent | CalcBuildingTypes.Sandwich
  width: number
  region: string
  doorCount: number
  windowType: CalcWindowTypes
}

export const CalcBuildingTypeNames = {
  [CalcBuildingTypes.Tent]: 'Тент',
  [CalcBuildingTypes.Sandwich]: 'Сэндвич-панель',
}

export const CalcGateTypeNames = {
  [CalcGateTypes.None]: 'Нет',
  [CalcGateTypes.Pivot]: 'Распашные',
  [CalcGateTypes.Sliding]: 'Откатные',
  [CalcGateTypes.LiftingManual]: 'Подъемные с ручным приводом',
  [CalcGateTypes.LiftingElectric]: 'Подъемные с электроприводом',
}

export const CalcGateOptions: SelectOption[] = [
  { label: CalcGateTypeNames[CalcGateTypes.None], value: CalcGateTypes.None },
  {
    label: CalcGateTypeNames[CalcGateTypes.Pivot],
    value: CalcGateTypes.Pivot,
  },
  {
    label: CalcGateTypeNames[CalcGateTypes.Sliding],
    value: CalcGateTypes.Sliding,
  },
  {
    label: CalcGateTypeNames[CalcGateTypes.LiftingManual],
    value: CalcGateTypes.LiftingManual,
  },
  {
    label: CalcGateTypeNames[CalcGateTypes.LiftingElectric],
    value: CalcGateTypes.LiftingElectric,
  },
]

export const CalcBuildingDefaultParameters: CalcBuildingParams = {
  type: CalcBuildingTypes.Tent,
  width:
    (CalcBuildingSizeRanges.MinWidth + CalcBuildingSizeRanges.MaxWidth) / 2,
  length:
    (CalcBuildingSizeRanges.MinLength + CalcBuildingSizeRanges.MaxLength) / 2,
  height:
    (CalcBuildingSizeRanges.MinHeight + CalcBuildingSizeRanges.MaxHeight) / 2,
  gateCount: 0,
  gateType: CalcGateOptions[0],
  region: 'Москва',
  doorCount: 0,
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
