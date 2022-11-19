import React from 'react'

import { partnershipImage } from 'Assets/Images'
import { Column, Text } from 'Components/UI'

import { Container, Content, ImageHolder } from './styles'

function WhySelectUs() {
  return (
    <Container>
      <Content>
        <ImageHolder>
          <img alt="dvsdvdsv" src={partnershipImage.src} />
        </ImageHolder>
        <Column maxWidth={626}>
          <Text h3 heading>
            ПОЧЕМУ ВЫБИРАЮТ НАС
          </Text>
          <Text caption1 mb={6} primary>
            внимательность, качество, искренность
          </Text>
          <Text body body3 mb={4}>
            При строительстве важно иметь надежного подрядчика, ведь Заказчик
            тратит средства и получает отложенный по времени результат.
          </Text>
          <Text body body3>
            Наш подход к работе характерен тем, что мы видим свою главную задачу
            в удовлетворении требований заказчика и эффективном решении задачи.
            Попробуйте поработать с нами и Вы. Мы обещаем открытость, честность
            и профессиональное отношение в работе.
          </Text>
        </Column>
      </Content>
    </Container>
  )
}

export default WhySelectUs
