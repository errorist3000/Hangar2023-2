import React, { useMemo } from 'react'

import keyBy from 'lodash/keyBy'
import map from 'lodash/map'

import { Column, Row, Text } from 'Components/UI'

import { CALC_OFFER_TOTAL_ID, CalcOffer } from 'Constants/calculator'

type Props = {
  offer: CalcOffer
}

function Price({ offer }: Props) {
  const data = useMemo(() => keyBy(offer, 'id'), [offer])

  return (
    <Column gap={3}>
      <Text heading mx={6} subHeader3>
        Стоимость конструкции
      </Text>

      {map(data, item => {
        if (item.price === '0₽') {
          return null
        }
        const isTotal = item.id === CALC_OFFER_TOTAL_ID
        return (
          <Row fullWidth key={item.id} px={6} spaceBetween>
            <Text
              action2={isTotal}
              body={!isTotal}
              body3={!isTotal}
              heading={isTotal}
            >
              {item.title}:
            </Text>

            <Text
              action2={isTotal}
              action3={!isTotal}
              body={!isTotal}
              heading={isTotal}
            >
              {item.price}
            </Text>
          </Row>
        )
      })}
    </Column>
  )
}

export default Price
