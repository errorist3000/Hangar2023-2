import React, { SyntheticEvent, useCallback, useState } from 'react'

import { ContentCard } from 'Components/Blocks'
import { Delimiter, Radio, Range, Row, Select } from 'Components/UI'

import {
  CalcBuildingDefaultParameters,
  CalcBuildingParams,
  CalcBuildingSizeRanges,
  CalcBuildingSizeSteps,
  CalcBuildingTypes,
  CalcGateOptions,
  CalcGateRanges,
  CalcGateSteps,
  CalcGateTypes,
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
    width: CalcBuildingDefaultParameters.gateWidth ?? CalcGateRanges.MinWidth,
    height:
      CalcBuildingDefaultParameters.gateHeight ?? CalcGateRanges.MinHeight,
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

  const handleGateTypeChange = useCallback(
    (value: SelectOption) => {
      onParamsChange({
        ...params,
        gateType: value,
        gateWidth: selectedGateSize.width,
        gateHeight: selectedGateSize.height,
      })
    },
    [onParamsChange, params, selectedGateSize],
  )

  const handleGateWidthChange = useCallback((gateWidth: number) => {
    setSelectedGateSize(prev => ({ ...prev, width: gateWidth }))
    onParamsChange({ ...params, gateWidth })
  }, [])

  const handleGateHeightChange = useCallback((gateHeight: number) => {
    setSelectedGateSize(prev => ({ ...prev, height: gateHeight }))
    onParamsChange({ ...params, gateHeight })
  }, [])

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
        <Select
          isSearchable={false}
          label="Тип ворот"
          options={CalcGateOptions}
          placeholder="Выберите тип ворот"
          value={params.gateType}
          onChange={handleGateTypeChange}
        />

        <Row fullWidth gap={6}>
          <Range
            disabled={params.gateType.value === CalcGateTypes.None}
            label="Ширина ворот в метрах"
            maxValue={CalcGateRanges.MaxWidth}
            minValue={CalcGateRanges.MinWidth}
            step={CalcGateSteps.Width}
            value={selectedGateSize.width}
            onChangeValue={handleGateWidthChange}
          />

          <Range
            disabled={params.gateType.value === CalcGateTypes.None}
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
