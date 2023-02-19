import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Waypoint } from 'react-waypoint'

import { Factory, HourglassHigh, HouseLine, UsersThree } from 'phosphor-react'

import orderBy from 'lodash/orderBy'

import { statisticsBgImage } from 'Assets/Images'

import Odometer from 'Components/Blocks/Odometer'
import { Text } from 'Components/UI'

import { Card, Container, Content, IconHolder, StyledImage } from './styles'

const SPEED = 300

type Props = {
  data?: DatoSchema.StatisticRecord[]
}
function Statistics({ data }: Props) {
  const sortedDataByOrder = useMemo(() => orderBy(data, 'order', 'asc'), [data])
  const { t } = useTranslation('translation', {
    keyPrefix: 'pages.main.statistics',
  })
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [visible, setVisible] = useState(false)

  const localeData = useMemo(
    () => [
      {
        icon: <HourglassHigh />,
        text: t('yearsAgo'),
      },
      {
        icon: <Factory />,
        text: t('factories'),
      },
      {
        icon: <HouseLine />,
        text: t('objectsWasDone'),
      },
      {
        icon: <UsersThree />,
        text: t('employees'),
      },
    ],
    [t],
  )

  const listener = useCallback(() => {
    if (!containerRef.current || !imageRef.current) return

    const containerTop = containerRef.current.getBoundingClientRect().top
    const position = 0 - (containerTop / window.innerHeight) * SPEED
    imageRef.current.style.top = `${position}px`
  }, [containerRef, imageRef])

  const handleEnter = useCallback(() => {
    setVisible(true)

    window.addEventListener('scroll', listener)
  }, [listener])

  const handleLeave = useCallback(() => {
    setVisible(false)

    window.removeEventListener('scroll', listener)
  }, [listener])

  useEffect(() => window.removeEventListener('scroll', listener), [listener])

  return (
    <Container ref={containerRef}>
      <Waypoint
        bottomOffset="-200px"
        topOffset="-200px"
        onEnter={handleEnter}
        onLeave={handleLeave}
      />
      <StyledImage ref={imageRef} src={statisticsBgImage.src} />
      <Content>
        {sortedDataByOrder.map(card => (
          <Card key={card.id}>
            <IconHolder>{localeData[card.order].icon}</IconHolder>
            <Text as="div" display1 heading mb={1}>
              <Odometer value={card.number} visible={visible} />
            </Text>
            <Text body subHeader3>
              {localeData[card.order].text}
            </Text>
          </Card>
        ))}
      </Content>
    </Container>
  )
}

export default Statistics
