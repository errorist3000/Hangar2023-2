import React from 'react'

import { BaseImage, BaseImageProps } from './styles'

type Props<T> = BaseImageProps & {
  data: T
}

function Image({ data, cover }: Props<any>) {
  return (
    <BaseImage
      alt={data?.alt}
      cover={cover}
      src={data?.url}
      srcSet={`${data?.webp1x} 1x,${data?.webp2x} 2x`}
    />
  )
}

export default Image
