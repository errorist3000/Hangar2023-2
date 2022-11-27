import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { Text } from 'Components/UI'
import { DesktopTower, Factory, Handshake, HouseLine } from 'phosphor-react'

import { orderBy } from 'lodash/collection'

import { Card, Container, Content, IconHolder } from './styles'

const ICON_WEIGHT = 'regular'

function Steps({ data }) {
  const sortedDataByOrder = useMemo(() => orderBy(data, 'order', 'asc'), [data])

  const icons = [
    {
      icon: <DesktopTower weight={ICON_WEIGHT} />,
    },
    {
      icon: <Factory weight={ICON_WEIGHT} />,
    },
    {
      icon: <HouseLine weight={ICON_WEIGHT} />,
    },
    {
      icon: <Handshake weight={ICON_WEIGHT} />,
    },
  ]

  return (
    <Container>
      <Content>
        {sortedDataByOrder.map(card => (
          <Card key={card.id}>
            <IconHolder mb={5}>{icons[card.order].icon}</IconHolder>
            <Text heading mb={2} subHeader2>
              {card.title}
            </Text>
            <Text body body4>
              {card.text}
            </Text>
          </Card>
        ))}
      </Content>
    </Container>
  )
}

Steps.defaultProps = {
  data: [],
}

Steps.propTypes = {
  data: PropTypes.array,
}

export default Steps
