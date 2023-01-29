import React from 'react'
import { useTranslation } from 'react-i18next'

import { Column, Row, Text } from 'Components/UI'

import { Container, Content } from './styles'

type Props = {
  data: DatoSchema.LandingFooterRecord
}

function Footer({ data }: Props) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'block.footer',
  })

  return (
    <Container>
      <Content>
        <Row fullWidth mb={9} spaceBetween>
          <Column maxWidth={518}>
            <Text mb={3} mutedInverse subHeader1>
              {t('titleLegalAddress')}
            </Text>
            <Text body2 mb={2} mutedInverse>
              {data?.legalName}
            </Text>
            <Text body2 mutedInverse>
              {data?.legalAddress}
            </Text>
          </Column>
          <Column maxWidth={518}>
            <Text mb={3} mutedInverse subHeader1>
              {t('titleAddress')}
            </Text>
            <Text body2 mb={2} mutedInverse>
              {data?.adress}
            </Text>
          </Column>
        </Row>
        <Row fullWidth spaceBetween>
          <Text body4 mb={3} muted>
            {data?.mailautor}
          </Text>
          <Text body4 mb={3} muted>
            {data?.mailangarpro}
          </Text>
        </Row>
      </Content>
    </Container>
  )
}

export default Footer
