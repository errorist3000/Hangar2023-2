import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import { Column, Image, Row, Text } from 'Components/UI'
import { DATO_DATE_FORMAT } from 'Constants/datoCms'
import { LANDING_SECTION_ID } from 'Constants/ids'
import { DateTime } from 'luxon'
import { Calendar } from 'phosphor-react'

import { Card, Container, Content } from './styles'

function getPrettyDate(date) {
  return DateTime.fromFormat(date, DATO_DATE_FORMAT).toFormat('dd.MM.yyyy')
}

function OurNews({ data }) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'pages.main.ourNews',
  })

  return (
    <Container>
      <Content id={LANDING_SECTION_ID.news}>
        <Text h3 heading mb={3}>
          {t('header')}
        </Text>
        <Text body caption1 mb={10}>
          {t('subHeader')}
        </Text>
        <Row gap={20}>
          {data.map(card => (
            <Card key={card.id}>
              <Image data={card.image} />
              <Column fullHeight px={3} py={2}>
                <Text heading mb={2} subHeader3>
                  {card.title}
                </Text>
                <Row mb={4}>
                  <Calendar />
                  <Text caption2 ml={1} muted>
                    {getPrettyDate(card.date)}
                  </Text>
                </Row>
                <Column fullHeight spaceBetween>
                  <Text body body3 mb={3}>
                    {card.description}
                  </Text>
                  <Text body caption1>
                    {card.size}
                  </Text>
                </Column>
              </Column>
            </Card>
          ))}
        </Row>
      </Content>
    </Container>
  )
}

OurNews.defaultProps = {
  data: [],
}

OurNews.propTypes = {
  data: PropTypes.array,
}
export default OurNews
