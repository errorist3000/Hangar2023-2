import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import { Button, Image, Text } from 'Components/UI'
import { LANDING_SECTION_ID } from 'Constants/ids'
import { MapPin } from 'phosphor-react'

import {
  CaptionHolder,
  Card,
  CardHolder,
  CardsHolder,
  Container,
  Content,
} from './styles'

const ICON_WEIGHT = 'bold'

function Gallery({ data }) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'pages.main.gallery',
  })

  console.log(data)

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
        <CardsHolder>
          {data.map(card => (
            <CardHolder key={card.id}>
              <Card>
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
          ))}
        </CardsHolder>
        <Button big>Показать все</Button>
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
