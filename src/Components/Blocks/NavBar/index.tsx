import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from 'Components/UI'

import { LANDING_SECTION_ID } from 'Constants/ids'

import { pageScroll } from 'Services/Utils'

import { Container, ItemButton } from './styles'

export enum Kind {
  Mobile = 'mobile',
  Desktop = 'desktop',
}

type Props = {
  kind?: Kind
}

function NavBar({ kind = Kind.Desktop }: Props) {
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
    <Container mobile={kind === Kind.Mobile}>
      {navBarItems.map(item => (
        <ItemButton key={item.text} onClick={() => pageScroll(item.link)}>
          <Text
            action1
            heading={kind === Kind.Mobile}
            inverse={kind === Kind.Desktop}
          >
            {item.text}
          </Text>
        </ItemButton>
      ))}
    </Container>
  )
}

export default NavBar
