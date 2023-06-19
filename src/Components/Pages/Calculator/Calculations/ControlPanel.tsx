import React, { SyntheticEvent, useCallback, useState } from 'react'

import { ContentCard } from 'Components/Blocks'
import { Delimiter, Radio, Range, Row, Select } from 'Components/UI'

import {
  CALC_BUILDING_DEFAULT_PARAMETERS,
  CALC_GATE_COUNT_OPTIONS,
  CALC_GATE_TYPE_OPTIONS,
  CalcBuildingParams,
  CalcBuildingSizeRanges,
  CalcBuildingSizeSteps,
  CalcBuildingTypes,
  CalcGateRanges,
  CalcGateSteps,
  SelectOption,
} from 'Constants/calculator'

import CalculationsSection from './Section'

type Props = {
  params: CalcBuildingParams
  onParamsChange: (params: CalcBuildingParams) => void
}

function ControlPanel({ params, onParamsChange }: Props) {
  const [selectedGateSize, setSelectedGateSize] = useState<{
    width: number
    height: number
  }>({
    width:
      CALC_BUILDING_DEFAULT_PARAMETERS.gateWidth ?? CalcGateRanges.MinWidth,
    height:
      CALC_BUILDING_DEFAULT_PARAMETERS.gateHeight ?? CalcGateRanges.MinHeight,
  })

  const handleWidthChange = useCallback(
    (width: number) => {
      onParamsChange({ ...params, width })
    },
    [onParamsChange, params],
  )

  const handleLengthChange = useCallback(
    (length: number) => {
      onParamsChange({ ...params, length })
    },
    [onParamsChange, params],
  )

  const handleHeightChange = useCallback(
    (height: number) => {
      onParamsChange({ ...params, height })
    },
    [onParamsChange, params],
  )

  const handleTypeChange = useCallback(
    (event: SyntheticEvent) => {
      const { value: type } = event.target as HTMLInputElement

      onParamsChange({ ...params, type: type as CalcBuildingTypes })
    },
    [onParamsChange, params],
  )

  const handleGateCountChange = useCallback(
    (value: SelectOption) => {
      onParamsChange({
        ...params,
        gateCount: value,
        gateWidth: selectedGateSize.width,
        gateHeight: selectedGateSize.height,
      })
    },
    [onParamsChange, params, selectedGateSize],
  )

  const handleGateTypeChange = useCallback(
    (value: SelectOption) => {
      onParamsChange({
        ...params,
        gateType: value,
      })
    },
    [onParamsChange, params],
  )

  const handleGateWidthChange = useCallback(
    (gateWidth: number) => {
      setSelectedGateSize(prev => ({ ...prev, width: gateWidth }))
      onParamsChange({ ...params, gateWidth })
    },
    [onParamsChange, params],
  )

  const handleGateHeightChange = useCallback(
    (gateHeight: number) => {
      setSelectedGateSize(prev => ({ ...prev, height: gateHeight }))
      onParamsChange({ ...params, gateHeight })
    },
    [onParamsChange, params],
  )

  return (
    <ContentCard headerText="Укажите параметры для расчета">
      <CalculationsSection headerText="Тип покрытия ангара">
        <Row gap={6}>
          <Radio
            checked={params.type === CalcBuildingTypes.Tent}
            label="Тент"
            name="type"
            value={CalcBuildingTypes.Tent}
            onChange={handleTypeChange}
          />
          <Radio
            checked={params.type === CalcBuildingTypes.Sandwich}
            label="Сендвич-панель"
            name="type"
            value={CalcBuildingTypes.Sandwich}
            onChange={handleTypeChange}
          />
        </Row>
      </CalculationsSection>

      <Delimiter />

      <CalculationsSection headerText="Ширина пролета в метрах">
        <Range
          maxValue={CalcBuildingSizeRanges.MaxWidth}
          minValue={CalcBuildingSizeRanges.MinWidth}
          step={CalcBuildingSizeSteps.Width}
          value={params.width}
          onChangeValue={handleWidthChange}
        />
      </CalculationsSection>

      <Delimiter />

      <CalculationsSection headerText="Длина здания в метрах">
        <Range
          maxValue={CalcBuildingSizeRanges.MaxLength}
          minValue={CalcBuildingSizeRanges.MinLength}
          step={CalcBuildingSizeSteps.Length}
          value={params.length}
          onChangeValue={handleLengthChange}
        />
      </CalculationsSection>

      <Delimiter />

      <CalculationsSection headerText="Полезная высота в метрах">
        <Range
          maxValue={CalcBuildingSizeRanges.MaxHeight}
          minValue={CalcBuildingSizeRanges.MinHeight}
          step={CalcBuildingSizeSteps.Height}
          value={params.height}
          onChangeValue={handleHeightChange}
        />
      </CalculationsSection>

      <Delimiter />

      <CalculationsSection headerText="Ворота">
        <Row fullWidth gap={6}>
          <Select
            isSearchable={false}
            label="К-во ворот"
            options={CALC_GATE_COUNT_OPTIONS}
            placeholder="Выберите количество ворот"
            value={params.gateCount}
            onChange={handleGateCountChange}
          />
          <Select
            disabled={!params.gateCount.value}
            isSearchable={false}
            label="Тип ворот"
            options={CALC_GATE_TYPE_OPTIONS}
            placeholder="Выберите тип ворот"
            value={params.gateType}
            width={1}
            onChange={handleGateTypeChange}
          />
        </Row>

        <Row fullWidth gap={6}>
          <Range
            disabled={!params.gateCount.value}
            label="Ширина ворот в метрах"
            maxValue={CalcGateRanges.MaxWidth}
            minValue={CalcGateRanges.MinWidth}
            step={CalcGateSteps.Width}
            value={selectedGateSize.width}
            onChangeValue={handleGateWidthChange}
          />

          <Range
            disabled={!params.gateCount.value}
            label="Высота ворот в метрах"
            maxValue={CalcGateRanges.MaxHeight}
            minValue={CalcGateRanges.MinHeight}
            step={CalcGateSteps.Height}
            value={selectedGateSize.height}
            onChangeValue={handleGateHeightChange}
          />
        </Row>
      </CalculationsSection>
    </ContentCard>
  )
}

export default ControlPanel
