import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { MapPin } from 'phosphor-react'

import { ObjectsOnMapModal, ProjectGalleryModal } from 'Components/Blocks'
import { Button, Column, Image, Text } from 'Components/UI'

import { LANDING_SECTION_ID } from 'Constants/ids'

import { pageScroll } from 'Services/Utils'

import {
  BottomHolder,
  CaptionHolder,
  Card,
  CardHolder,
  Container,
  Content,
  TopHolder,
} from './styles'

const ICON_WEIGHT = 'bold'

const COLLAPSED_ROW_AMOUNT = 2

function getColumnAmount(windowWidth: number) {
  if (windowWidth < 475) return 1
  if (windowWidth < 650) return 2
  if (windowWidth < 769) return 3
  if (windowWidth < 1200) return 4
  if (windowWidth < 1920) return 5
  return 6
}

type Props = {
  data?: DatoSchema.ProjectRecord[]
}

function Gallery({ data }: Props) {
  const [windowWidth, setWindowWidth] = useState(0)
  const [columnAmount, setColumnAmount] = useState(1)
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isBottomHidden, setIsBottomHidden] = useState(isCollapsed)
  const [canGetHover, setCanGetHover] = useState(true)
  const [isMapModalOpen, setIsMapModalOpen] = useState(false)
  const [openProjectId, setOpenProjectId] = useState(undefined)

  const { t } = useTranslation('translation', {
    keyPrefix: 'pages.main.gallery',
  })

  const cardSize = windowWidth / columnAmount - 0.5

  const topData = useMemo(
    () => data?.slice(0, columnAmount * COLLAPSED_ROW_AMOUNT),
    [data, columnAmount],
  )
  const bottomData = useMemo(
    () => data?.slice(topData?.length) ?? [],
    [data, topData],
  )

  const renderCard = useCallback(
    (card: DatoSchema.ProjectRecord) => {
      if (!card || !card.titleImage) return null

      return (
        <CardHolder key={card.id} size={cardSize}>
          <Card
            canHover={canGetHover}
            onClick={() => setOpenProjectId(card.id)}
          >
            <Image data={card.titleImage} />
            <CaptionHolder>
              <Text heading mb={2} subHeader3>
                {card.title}
              </Text>
              <Text caption3 mute>
                {card.description}
              </Text>
            </CaptionHolder>
          </Card>
        </CardHolder>
      )
    },
    [cardSize, canGetHover],
  )

  const handleAnimationStart = useCallback(() => {
    setCanGetHover(false)
    if (!isBottomHidden) setIsBottomHidden(true)
  }, [isBottomHidden])

  const handleAnimationComplete = useCallback(() => {
    setCanGetHover(true)
    setIsBottomHidden(isCollapsed)
  }, [isCollapsed])

  const handleShowAllClick = useCallback(() => {
    setIsCollapsed(!isCollapsed)
    pageScroll(LANDING_SECTION_ID.gallery)
  }, [isCollapsed])

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    setColumnAmount(getColumnAmount(window.innerWidth))

    function handlerResize() {
      setWindowWidth(window.innerWidth)
      setColumnAmount(getColumnAmount(window.innerWidth))
    }

    window.addEventListener('resize', handlerResize)

    return () => window.removeEventListener('resize', handlerResize)
  }, [])

  return (
    <Container>
      <Content id={LANDING_SECTION_ID.gallery}>
        <Text h3 heading mb={3}>
          {t('title')}
        </Text>
        <Text body caption1 mb={10} preLine>
          {t('subtitle')}
        </Text>

        <Button
          big
          secondary
          onClick={() => setIsMapModalOpen(!isMapModalOpen)}
        >
          <MapPin weight={ICON_WEIGHT} />
          {t('mapButton')}
        </Button>

        <Column>
          <TopHolder>{topData?.map(card => renderCard(card))}</TopHolder>

          <BottomHolder
            animate={{
              height:
                isCollapsed || !bottomData.length
                  ? 0
                  : Math.ceil(bottomData.length / columnAmount) * cardSize,
            }}
            style={{ overflow: isBottomHidden ? 'hidden' : 'visible' }}
            transition={{ duration: 0.6 }}
            onAnimationComplete={handleAnimationComplete}
            onAnimationStart={handleAnimationStart}
          >
            {bottomData?.map(card => renderCard(card))}
          </BottomHolder>
        </Column>
        <Button big onClick={handleShowAllClick}>
          {isCollapsed ? t('openButton') : t('closeButton')}
        </Button>
      </Content>
      <ObjectsOnMapModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
      />

      <ProjectGalleryModal
        isOpen={!!openProjectId}
        projectId={openProjectId}
        onClose={() => setOpenProjectId(undefined)}
      />
    </Container>
  )
}

export default Gallery
