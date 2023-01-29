import React from 'react'

import { ImageSet } from 'Types/imageSet'

import { BaseImage, BaseImageProps } from './styles'

type Props = BaseImageProps & {
  data: DatoSchema.ResponsiveImage & ImageSet & DatoSchema.FileField
}

function Image({ data, cover }: Props) {
  return (
    <BaseImage
      alt={data?.alt}
      cover={cover}
      src={data?.src}
      srcSet={`${data?.webp1x} 1x,${data?.webp2x} 2x`}
    />
  )
}

export default Image
