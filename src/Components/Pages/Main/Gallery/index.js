import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import { Button, Column, Image, Text } from 'Components/UI'
import { LANDING_SECTION_ID } from 'Constants/ids'
import { MapPin } from 'phosphor-react'

import {
  BottomHolder,
  CaptionHolder,
  Card,
  CardHolder,
  Container,
  Content,
  TopHolder,
} from './styles'

const ICON_WEIGHT = 'bold'

const COLLAPSED_ROW_AMOUNT = 2

function getColumnAmount(windowWidth) {
  if (windowWidth < 475) return 1
  if (windowWidth < 650) return 2
  if (windowWidth < 769) return 3
  if (windowWidth < 1200) return 4
  if (windowWidth < 1920) return 5
  return 6
}

function Gallery({ data }) {
  const [windowWidth, setWindowWidth] = useState(0)
  const [columnAmount, setColumnAmount] = useState(1)
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isBottomHidden, setIsBottomHidden] = useState(isCollapsed)
  const [canGetHover, setCanGetHover] = useState(true)

  const { t } = useTranslation('translation', {
    keyPrefix: 'pages.main.gallery',
  })

  const cardSize = windowWidth / columnAmount - 0.5

  const topData = useMemo(
    () => data.slice(0, columnAmount * COLLAPSED_ROW_AMOUNT),
    [data, columnAmount],
  )
  const bottomData = useMemo(
    () => data.slice(topData.length),
    [data, columnAmount],
  )

  const renderCard = useCallback(
    card => (
      <CardHolder key={card.id} size={cardSize}>
        <Card canHover={canGetHover}>
          <Image data={card.titleImage} />
          <CaptionHolder>
            <Text heading mb={2} subHeader3>
              {card.title}
            </Text>
            <Text caption3 muted>
              {card.description}
            </Text>
          </CaptionHolder>
        </Card>
      </CardHolder>
    ),
    [windowWidth, columnAmount, canGetHover],
  )

  const handleAnimationStart = useCallback(() => {
    setCanGetHover(false)
    if (!isBottomHidden) setIsBottomHidden(true)
  }, [isBottomHidden])

  const handleAnimationComplete = useCallback(() => {
    setCanGetHover(true)
    setIsBottomHidden(isCollapsed)
  }, [isCollapsed])

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    setColumnAmount(getColumnAmount(window.innerWidth))

    function handlerResize() {
      setWindowWidth(window.innerWidth)
      setColumnAmount(getColumnAmount(window.innerWidth))
    }

    window.addEventListener('resize', handlerResize)

    return () => window.removeEventListener('resize', handlerResize)
  }, [])

  return (
    <Container>
      <Content id={LANDING_SECTION_ID.gallery}>
        <Text h3 heading mb={3}>
          {t('title')}
        </Text>
        <Text body caption1 mb={10} preLine>
          {t('subtitle')}
        </Text>
        <Button big tertiary>
          <MapPin weight={ICON_WEIGHT} />
          Объекты на карте
        </Button>
        <Column>
          <TopHolder>{topData.map(card => renderCard(card))}</TopHolder>

          <BottomHolder
            animate={{
              height: isCollapsed
                ? 0
                : Math.ceil(bottomData.length / columnAmount) * cardSize,
            }}
            style={{ overflow: isBottomHidden ? 'hidden' : 'visible' }}
            transition={{ duration: 0.6 }}
            onAnimationComplete={handleAnimationComplete}
            onAnimationStart={handleAnimationStart}
          >
            {bottomData.map(card => renderCard(card))}
          </BottomHolder>
        </Column>
        <Button big onClick={() => setIsCollapsed(!isCollapsed)}>
          Показать все
        </Button>
      </Content>
    </Container>
  )
}

Gallery.defaultProps = {
  data: [],
}

Gallery.propTypes = {
  data: PropTypes.array,
}
export default Gallery
