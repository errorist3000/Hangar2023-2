import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import { Column, Image, Text } from 'Components/UI'
import { LANDING_SECTION_ID } from 'Constants/ids'

import { Container, Content, ImageHolder } from './styles'

function WhySelectUs({ data }) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'pages.main.whySelectUs',
  })

  return (
    <Container>
      <Content id={LANDING_SECTION_ID.aboutUs}>
        <ImageHolder>
          <Image data={data} />
        </ImageHolder>
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

WhySelectUs.defaultProps = {
  data: {},
}

WhySelectUs.propTypes = {
  data: PropTypes.object,
}

export default WhySelectUs
