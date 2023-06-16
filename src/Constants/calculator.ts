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

export type CalcBuildingParameters = {
  gateHeight?: number
  gateType: SelectOption
  gateWidth?: number
  height: number
  length: number
  type: CalcBuildingTypes.Tent | CalcBuildingTypes.Sandwich
  width: number
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

export const CalcBuildingDefaultParameters: CalcBuildingParameters = {
  type: CalcBuildingTypes.Tent,
  width:
    (CalcBuildingSizeRanges.MinWidth + CalcBuildingSizeRanges.MaxWidth) / 2,
  length:
    (CalcBuildingSizeRanges.MinLength + CalcBuildingSizeRanges.MaxLength) / 2,
  height:
    (CalcBuildingSizeRanges.MinHeight + CalcBuildingSizeRanges.MaxHeight) / 2,
  gateType: CalcGateOptions[0],
}
