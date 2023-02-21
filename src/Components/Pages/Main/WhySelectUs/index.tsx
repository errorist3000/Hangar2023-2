import React from 'react'
import { useTranslation } from 'react-i18next'

import { Column, Image, Text, View } from 'Components/UI'

import { LANDING_SECTION_ID } from 'Constants/ids'

import { Container, Content, ImageHolder } from './styles'

type Props = {
  data?: DatoSchema.FileField
}
function WhySelectUs({ data }: Props) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'pages.main.whySelectUs',
  })

  return (
    <Container>
      <Content id={LANDING_SECTION_ID.aboutUs}>
        <View.Desktop>
          <ImageHolder>
            <Image data={data} />
          </ImageHolder>
        </View.Desktop>
        <Column maxWidth={626}>
          <Text h3 heading>
            {t('title')}
          </Text>
          <Text caption1 mb={6} primary>
            {t(`subtitle`)}
          </Text>
          <Text body body3 mb={4}>
            {t(`text`)}
          </Text>
          <Text body body3>
            {t(`subtext`)}
          </Text>
        </Column>
      </Content>
    </Container>
  )
}

export default WhySelectUs
