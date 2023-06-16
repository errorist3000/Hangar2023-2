import React, { SyntheticEvent, useCallback, useState } from 'react'

import { ContentCard } from 'Components/Blocks'
import Description from 'Components/Pages/Calculator/Calculations/Description'
import { Column, Delimiter, Radio, Range, Row, Select } from 'Components/UI'

import {
  CalcBuildingDefaultParameters,
  CalcBuildingParameters,
  CalcBuildingSizeRanges,
  CalcBuildingSizeSteps,
  CalcBuildingTypes,
  CalcGateOptions,
  CalcGateRanges,
  CalcGateSteps,
  CalcGateTypes,
  SelectOption,
} from 'Constants/calculator'
import {
  CalculatorPageSectionIds,
  LANDING_CONTENT_WIDTH,
  LANDING_HEADER_HEIGHT,
  LANDING_PADDING_X,
} from 'Constants/ids'

import CalculationsSection from './Section'
import { Container, StickyContainer } from './styles'

function Calculations() {
  const [parameter, setParameter] = useState<CalcBuildingParameters>(
    CalcBuildingDefaultParameters,
  )

  const [selectedGateSize, setSelectedGateSize] = useState<{
    width: number
    height: number
  }>({
    width: CalcBuildingDefaultParameters.gateWidth ?? CalcGateRanges.MinWidth,
    height:
      CalcBuildingDefaultParameters.gateHeight ?? CalcGateRanges.MinHeight,
  })

  const handleWidthChange = useCallback((width: number) => {
    setParameter(prev => ({ ...prev, width }))
  }, [])

  const handleLengthChange = useCallback((length: number) => {
    setParameter(prev => ({ ...prev, length }))
  }, [])

  const handleHeightChange = useCallback((height: number) => {
    setParameter(prev => ({ ...prev, height }))
  }, [])

  const handleTypeChange = useCallback((event: SyntheticEvent) => {
    const { value: type } = event.target as HTMLInputElement

    setParameter(prev => ({ ...prev, type: type as CalcBuildingTypes }))
  }, [])

  const handleGateTypeChange = useCallback(
    (value: SelectOption) => {
      setParameter(prev => ({
        ...prev,
        gateType: value,
        gateWidth: selectedGateSize.width,
        gateHeight: selectedGateSize.height,
      }))
    },
    [selectedGateSize],
  )

  const handleGateWidthChange = useCallback((gateWidth: number) => {
    setSelectedGateSize(prev => ({ ...prev, width: gateWidth }))
    setParameter(prev => ({ ...prev, gateWidth }))
  }, [])

  const handleGateHeightChange = useCallback((gateHeight: number) => {
    setSelectedGateSize(prev => ({ ...prev, height: gateHeight }))
    setParameter(prev => ({ ...prev, gateHeight }))
  }, [])

  return (
    <Container id={CalculatorPageSectionIds.Calculator}>
      <Column
        center
        fullWidth
        gap={7}
        mt={LANDING_HEADER_HEIGHT.DEFAULT}
        px={LANDING_PADDING_X}
        py={7}
      >
        <Row
          alignItems="flex-start"
          fullWidth
          gap={6}
          maxWidth={LANDING_CONTENT_WIDTH}
        >
          <ContentCard headerText="Укажите параметры для расчета">
            <CalculationsSection headerText="Тип покрытия ангара">
              <Row gap={6}>
                <Radio
                  checked={parameter.type === CalcBuildingTypes.Tent}
                  label="Тент"
                  name="type"
                  value={CalcBuildingTypes.Tent}
                  onChange={handleTypeChange}
                />
                <Radio
                  checked={parameter.type === CalcBuildingTypes.Sandwich}
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
                value={parameter.width}
                onChangeValue={handleWidthChange}
              />
            </CalculationsSection>

            <Delimiter />

            <CalculationsSection headerText="Длина здания в метрах">
              <Range
                maxValue={CalcBuildingSizeRanges.MaxLength}
                minValue={CalcBuildingSizeRanges.MinLength}
                step={CalcBuildingSizeSteps.Length}
                value={parameter.length}
                onChangeValue={handleLengthChange}
              />
            </CalculationsSection>

            <Delimiter />

            <CalculationsSection headerText="Полезная высота в метрах">
              <Range
                maxValue={CalcBuildingSizeRanges.MaxHeight}
                minValue={CalcBuildingSizeRanges.MinHeight}
                step={CalcBuildingSizeSteps.Height}
                value={parameter.height}
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
                value={parameter.gateType}
                onChange={handleGateTypeChange}
              />

              <Row fullWidth gap={6}>
                <Range
                  disabled={parameter.gateType.value === CalcGateTypes.None}
                  label="Ширина ворот в метрах"
                  maxValue={CalcGateRanges.MaxWidth}
                  minValue={CalcGateRanges.MinWidth}
                  step={CalcGateSteps.Width}
                  value={selectedGateSize.width}
                  onChangeValue={handleGateWidthChange}
                />

                <Range
                  disabled={parameter.gateType.value === CalcGateTypes.None}
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

          <StickyContainer>
            <ContentCard headerText="Результа расчета">
              <Description parameter={parameter} />

              <Delimiter />
            </ContentCard>
          </StickyContainer>
        </Row>
      </Column>
    </Container>
  )
}

export default Calculations
