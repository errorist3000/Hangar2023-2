import React from 'react'
import { useTranslation } from 'react-i18next'

import { Column, Text } from 'Components/UI'

import { Container, Content, Wrapper } from './styles'

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
        <Wrapper mb={[6, 6, 6, 9]}>
          <Column maxWidth={518} mb={[5, 5, 5, 0]} width={1}>
            <Text mb={[2, 2, 2, 3]} muteInverse subHeader1>
              {t('titleLegalAddress')}
            </Text>
            <Text body2 mb={[1, 1, 1, 2]} muteInverse>
              {data?.legalName}
            </Text>
            <Text body2 muteInverse>
              {data?.legalAddress}
            </Text>
          </Column>
          <Column maxWidth={518} width={1}>
            <Text mb={[2, 2, 2, 3]} muteInverse subHeader1>
              {t('titleAddress')}
            </Text>
            <Text body2 mb={[1, 1, 1, 2]} muteInverse>
              {data?.adress}
            </Text>
          </Column>
        </Wrapper>
        <Wrapper mb={3}>
          <Text body4 mute>
            {data?.mailautor}
          </Text>
          <Text body4 mute>
            {data?.mailangarpro}
          </Text>
        </Wrapper>
      </Content>
    </Container>
  )
}

export default Footer
