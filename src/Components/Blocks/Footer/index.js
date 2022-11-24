import React from 'react'
import { useTranslation } from 'react-i18next'

import { Container, Content } from 'Components/Blocks/Footer/styles'
import { Column, Row, Text } from 'Components/UI'

function Footer() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'block.footer',
  })
  return (
    <Container>
      <Content>
        <Row fullWidth mb={9} spaceBetween>
          <Column maxWidth={518}>
            <Text inMuted mb={3} subHeader1>
              {t('s1title')}
            </Text>
            <Text body2 inMuted mb={2}>
              {t('s1text')}
            </Text>
            <Text body2 inMuted>
              {t('s2text')}
            </Text>
          </Column>
          <Column maxWidth={518}>
            <Text inMuted mb={3} subHeader1>
              {t('s2title')}
            </Text>
            <Text body2 inMuted mb={2}>
              {t('s3text')}
            </Text>
          </Column>
        </Row>
        <Row fullWidth spaceBetween>
          <Text body4 mb={3} muted>
            {t('s4text')}
          </Text>
          <Text body4 mb={3} muted>
            {t('s5text')}
          </Text>
        </Row>
      </Content>
    </Container>
  )
}

export default Footer
