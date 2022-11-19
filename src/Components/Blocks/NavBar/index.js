import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { Row, Text } from 'Components/UI'

import { ItemButton } from './styles'

function NavBar() {
  const { t } = useTranslation('translation', { keyPrefix: 'block.navBar' })

  const navBarItems = useMemo(
    () => [
      { text: t('projects'), link: '#' },
      { text: t('aboutUs'), link: '#' },
      { text: t('news'), link: '#' },
      { text: t('contacts'), link: '#' },
    ],
    [t],
  )

  return (
    <Row>
      {navBarItems.map(item => (
        <ItemButton>
          <Text action3 inverse mr={3}>
            {item.text}
          </Text>
        </ItemButton>
      ))}
    </Row>
  )
}

export default NavBar
