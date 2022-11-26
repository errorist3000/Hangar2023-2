import React from 'react'

import { Button, Column, Row, Text } from 'Components/UI'
import { LANDING_SECTION_ID } from 'Constants/ids'

import { Container, Content } from './styles'

function Hero() {
  return (
    <Container id={LANDING_SECTION_ID.hero}>
      <Content>
        <Column>
          <Text h2 inverse mb={10}>
            Тентовые каркасные здания
          </Text>
          <Text action1 inverse mb={6}>
            Проектирование, производство и монтаж каркасных тентовых ангаров,
            павильонов, тепляков и укрытий
          </Text>
          <Text action1 inverse mb={14}>
            Вы можете заполнить и отправить форму запроса. Мы вышлем
            коммерческое предложение
          </Text>
          <Row gap={32} justifyCenter>
            <Button big outline width={192}>
              Запрос
            </Button>
            <Button big width={192}>
              Калькулятор
            </Button>
          </Row>
        </Column>
      </Content>
    </Container>
  )
}

export default Hero
