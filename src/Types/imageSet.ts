export type ImageSet = {
  id: string
  jpeg1x: (imgixParams: DatoSchema.ImgixParams) => void

  jpeg2x: (imgixParams: DatoSchema.ImgixParams) => void

  webp1x: (imgixParams: DatoSchema.ImgixParams) => void
  webp2x: (imgixParams: DatoSchema.ImgixParams) => void
}
