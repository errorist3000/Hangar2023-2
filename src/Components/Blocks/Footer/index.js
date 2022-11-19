import React from 'react'

import { Container, Content } from 'Components/Blocks/Footer/styles'
import { Column, Row, Text } from 'Components/UI'

function Footer() {
  return (
    <Container>
      <Content>
        <Row fullWidth mb={9} spaceBetween>
          <Column maxWidth={518}>
            <Text mb={3} muted subHeader1>
              Юридическая информация
            </Text>
            <Text body2 mb={2} muted>
              ООО “Ангарпро”
            </Text>
            <Text body2 muted>
              РФ, 141352, Московская область, Сергиево-Посадский городской
              округ, пос. Репихово, д. 127, 2 этаж, ком.35
            </Text>
          </Column>
          <Column maxWidth={518}>
            <Text mb={3} muted subHeader1>
              Основная производственная площадка
            </Text>
            <Text body2 mb={2} muted>
              Россия, Московская область, Сергиево-Посадский район, пос.
              Репихово, д. 127
            </Text>
          </Column>
        </Row>
        <Row fullWidth spaceBetween>
          <Text body4 mb={3} muted>
            ⓒ2021. angarPro.dev.by rom
          </Text>
          <Text body4 mb={3} muted>
            mailto: admin@angarpro.com
          </Text>
        </Row>
      </Content>
    </Container>
  )
}

export default Footer
