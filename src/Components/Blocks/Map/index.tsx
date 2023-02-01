import React, { useMemo } from 'react'

import { LatLngExpression } from 'leaflet'

import { PreviewHolder, PreviewImage } from 'Components/Blocks/Map/styles'
import { Text } from 'Components/UI'

import { Container, Layer, Marker, Popup } from 'Services/Leaflet/ssr'

type Props = {
  zoom?: number
  projects?: DatoSchema.ProjectRecord[]
}

function Map({ zoom = 11, projects }: Props) {
  const center: LatLngExpression = useMemo(() => {
    if (projects?.length === 1)
      return [
        projects?.[0].location?.latitude,
        projects?.[0].location?.longitude,
      ]

    return [55.75352, 37.62407]
  }, [projects])

  if (!projects?.length || !center?.length) return null

  return (
    <Container
      center={center}
      style={{ width: '100%', height: '100%' }}
      zoom={zoom}
      zoomControl={false}
    >
      <Layer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {projects?.map(project => (
        <Marker
          key={project.id}
          position={[project.location?.latitude, project.location?.longitude]}
        >
          <Popup>
            <Text caption3 heading>
              {project.title}
            </Text>
            <PreviewHolder className={'popupWrapper'}>
              <PreviewImage
                alt="Превью объекта"
                className={'popupImage'}
                src={project.titleImage?.url}
              />
            </PreviewHolder>
          </Popup>
        </Marker>
      ))}
    </Container>
  )
}

export default Map
