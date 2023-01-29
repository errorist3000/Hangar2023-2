import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import { Container, Content } from 'Components/Blocks/Footer/styles'
import { Column, Row, Text } from 'Components/UI'

function Footer({ data }) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'block.footer',
  })

  return (
    <Container>
      <Content>
        <Row fullWidth mb={9} spaceBetween>
          <Column maxWidth={518}>
            <Text inMuted mb={3} subHeader1>
              {t('titleLegalAddress')}
            </Text>
            <Text body2 inMuted mb={2}>
              {data?.legalName}
            </Text>
            <Text body2 inMuted>
              {data?.legalAddress}
            </Text>
          </Column>
          <Column maxWidth={518}>
            <Text inMuted mb={3} subHeader1>
              {t('titleAddress')}
            </Text>
            <Text body2 inMuted mb={2}>
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

Footer.defaultProps = {
  data: {},
}

Footer.propTypes = {
  data: PropTypes.object,
}

export default Footer
