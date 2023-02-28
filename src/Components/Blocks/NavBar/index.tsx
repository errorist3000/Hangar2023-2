import React, { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { useRouter } from 'next/router'

import { Text } from 'Components/UI'

import { LandingPageSectionIds } from 'Constants/ids'
import { CALCULATOR, ROOT } from 'Constants/routes'

import Utils from 'Services/Utils'

import { Container, ItemButton } from './styles'

export enum Kind {
  Mobile = 'mobile',
  Desktop = 'desktop',
}

type Props = {
  kind?: Kind
}

type NavBarItem = {
  text: string
  visible: boolean
  isLink?: boolean
  link: string
}

function NavBar({ kind = Kind.Desktop }: Props) {
  const router = useRouter()
  const { t } = useTranslation('translation', { keyPrefix: 'block.navBar' })

  const isRoot = router?.route === ROOT

  const navBarItems: NavBarItem[] = useMemo(
    () => [
      {
        text: t('projects'),
        visible: isRoot,
        link: `${LandingPageSectionIds.Gallery}`,
      },
      {
        text: t('aboutUs'),
        visible: isRoot,
        link: `${LandingPageSectionIds.AboutUs}`,
      },
      {
        text: t('ourNews'),
        visible: isRoot,
        link: `${LandingPageSectionIds.News}`,
      },
      {
        text: t('contacts'),
        visible: isRoot,
        link: `${LandingPageSectionIds.Contacts}`,
      },
      { text: t('home'), link: ROOT, isLink: true, visible: !isRoot },
      { text: t('calculator'), link: CALCULATOR, isLink: true, visible: true },
    ],
    [isRoot, t],
  )

  const handleClick = useCallback(
    (item: NavBarItem) => {
      if (!item.isLink) {
        Utils.Scroll.pageScroll(item.link)
        return
      }

      router.push(item.link).then()
    },
    [router],
  )

  return (
    <Container mobile={kind === Kind.Mobile}>
      {navBarItems.map(
        item =>
          item.visible && (
            <ItemButton key={item.text} onClick={() => handleClick(item)}>
              <Text
                action1
                heading={kind === Kind.Mobile}
                inverse={kind === Kind.Desktop}
              >
                {item.text}
              </Text>
            </ItemButton>
          ),
      )}
    </Container>
  )
}

export default NavBar
