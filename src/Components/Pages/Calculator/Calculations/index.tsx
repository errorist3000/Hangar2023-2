import React, { useCallback, useMemo, useState } from 'react'

import { getOffer } from 'Utils/offer'

import { ContentCard } from 'Components/Blocks'
import ControlPanel from 'Components/Pages/Calculator/Calculations/ControlPanel'
import Description from 'Components/Pages/Calculator/Calculations/Description'
import Price from 'Components/Pages/Calculator/Calculations/Price'
import { Button, Column, Delimiter, Row } from 'Components/UI'

import {
  CALC_BUILDING_DEFAULT_PARAMETERS,
  CalcBuildingParams,
} from 'Constants/calculator'
import {
  CalculatorPageSectionIds,
  LANDING_CONTENT_WIDTH,
  LANDING_HEADER_HEIGHT,
  LANDING_PADDING_X,
} from 'Constants/ids'

import exportPdfOffer from 'Services/PdfOffer/exportPdfOffer'

import { Container, StickyContainer } from './styles'

function Calculations() {
  const [params, setParams] = useState<CalcBuildingParams>(
    CALC_BUILDING_DEFAULT_PARAMETERS,
  )

  const offer = useMemo(() => getOffer(params), [params])

  const handleDownloadDPFClick = useCallback(() => {
    exportPdfOffer({ contact: '', params, offer })
  }, [offer, params])

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
          <ControlPanel params={params} onParamsChange={setParams} />

          <StickyContainer>
            <ContentCard headerText="Результа расчета">
              <Description params={params} />

              <Delimiter />

              <Price offer={offer} />

              <Delimiter />

              <Row fullWidth justifyCenter>
                <Button onClick={handleDownloadDPFClick}>Скачать PDF</Button>
              </Row>
            </ContentCard>
          </StickyContainer>
        </Row>
      </Column>
    </Container>
  )
}

export default Calculations
