import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { MapPin } from 'phosphor-react'

import keyBy from 'lodash/keyBy'

import { ObjectsOnMapModal, ProjectGalleryModal } from 'Components/Blocks'
import { Button, Column, Image, Text, View } from 'Components/UI'

import { LANDING_PADDING_X, LandingPageSectionIds } from 'Constants/ids'

import Utils from 'Services/Utils'

import {
  BottomHolder,
  CaptionHolder,
  CaptionOverlay,
  Card,
  CardHolder,
  Container,
  Content,
  TopHolder,
} from './styles'

const ICON_WEIGHT = 'bold'

const COLLAPSED_ROW_AMOUNT = 2

function getColumnAmount(windowWidth: number) {
  if (windowWidth < 650) return 2
  if (windowWidth < 769) return 3
  if (windowWidth < 1200) return 4
  if (windowWidth < 1920) return 5
  return 6
}

type Props = {
  data?: DatoSchema.ProjectRecord[]
  projects?: DatoSchema.ProjectRecord[]
}

function Gallery({ data, projects }: Props) {
  const [windowWidth, setWindowWidth] = useState(0)
  const [columnAmount, setColumnAmount] = useState(2)
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isBottomHidden, setIsBottomHidden] = useState(isCollapsed)
  const [canGetHover, setCanGetHover] = useState(true)
  const [isMapModalOpen, setIsMapModalOpen] = useState(false)
  const [openProjectId, setOpenProjectId] = useState(null)

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

  const projectsById = useMemo(() => keyBy(projects, 'id'), [projects])

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
          <View.Tablet>
            <CaptionOverlay onClick={() => setOpenProjectId(card.id)}>
              <Text inverse subHeader4>
                {card.title}
              </Text>
            </CaptionOverlay>
          </View.Tablet>
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
    Utils.Scroll.pageScroll(LandingPageSectionIds.Gallery)
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
      <Content id={LandingPageSectionIds.Gallery}>
        <Column center px={LANDING_PADDING_X}>
          <Text h3 heading mb={3}>
            {t('title')}
          </Text>
          <Text body caption1 mb={[7, 7, 7, 10]} preLine>
            {t('subtitle')}
          </Text>
        </Column>

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

      {isMapModalOpen && (
        <ObjectsOnMapModal
          isOpen
          projects={projects}
          title={t('mapButton')}
          onClose={() => setIsMapModalOpen(false)}
        />
      )}

      {!!openProjectId && (
        <ProjectGalleryModal
          isOpen
          project={projectsById[openProjectId]}
          onClose={() => setOpenProjectId(null)}
        />
      )}
    </Container>
  )
}

export default Gallery
