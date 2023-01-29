import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { Row, Text } from 'Components/UI'

import { LANDING_SECTION_ID } from 'Constants/ids'

import { pageScroll } from 'Services/Utils'

import { ItemButton } from './styles'

function NavBar() {
  const { t } = useTranslation('translation', { keyPrefix: 'block.navBar' })

  const navBarItems = useMemo(
    () => [
      { text: t('projects'), link: `${LANDING_SECTION_ID.gallery}` },
      { text: t('aboutUs'), link: `${LANDING_SECTION_ID.aboutUs}` },
      { text: t('ourNews'), link: `${LANDING_SECTION_ID.news}` },
      { text: t('contacts'), link: `${LANDING_SECTION_ID.contacts}` },
    ],
    [t],
  )

  return (
    <Row gap={40}>
      {navBarItems.map(item => (
        <ItemButton key={item.text} onClick={() => pageScroll(item.link)}>
          <Text action1>{item.text}</Text>
        </ItemButton>
      ))}
    </Row>
  )
}

export default NavBar
