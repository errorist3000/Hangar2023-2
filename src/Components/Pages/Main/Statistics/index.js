import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Waypoint } from 'react-waypoint'
import PropTypes from 'prop-types'

import { statisticsBgImage } from 'Assets/Images'
import { Text } from 'Components/UI'
import { Factory, HourglassHigh, HouseLine, UsersThree } from 'phosphor-react'

import { orderBy } from 'lodash/collection'

import { Card, Container, Content, IconHolder, StyledImage } from './styles'

const SPEED = 300

function Statistics({ data }) {
  const sortedDataByOrder = useMemo(() => orderBy(data, 'order', 'asc'), [data])
  const { t } = useTranslation('translation', {
    keyPrefix: 'pages.main.statistics',
  })
  const containerRef = useRef(null)
  const imageRef = useRef(null)

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
    const containerTop = containerRef.current.getBoundingClientRect().top
    const position = 0 - (containerTop / window.innerHeight) * SPEED
    imageRef.current.style.top = `${position}px`
  }, [containerRef, imageRef])

  const handleEnter = useCallback(() => {
    window.addEventListener('scroll', listener)
  }, [listener])

  const handleLeave = useCallback(() => {
    window.removeEventListener('scroll', listener)
  }, [listener])

  useEffect(() => window.removeEventListener('scroll', listener), [])

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
            <Text display1 heading mb={1}>
              {card.number}
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

Statistics.defaultProps = {
  data: [],
}

Statistics.propTypes = {
  data: PropTypes.array,
}

export default Statistics
