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
    <Row gap={40}>
      {navBarItems.map(item => (
        <ItemButton key={item.text}>
          <Text action1 inverse>
            {item.text}
          </Text>
        </ItemButton>
      ))}
    </Row>
  )
}

export default NavBar
