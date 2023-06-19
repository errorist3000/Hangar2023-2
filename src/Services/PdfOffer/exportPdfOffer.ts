import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
// eslint-disable-next-line import/no-unresolved
import * as Ipdf from 'pdfmake/interfaces'

import {
  CALC_BUILDING_TYPE_NAMES,
  CalcBuildingParams,
  CalcOffer,
} from 'Constants/calculator'

import {
  footerContent,
  headerContent,
  remark,
  tableContent,
  titleTop,
} from './functions'

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs



type Props = {
  params: CalcBuildingParams
  offer: CalcOffer
  contact: string
}

function saveOffer({ contact, offer, params }: Props) {
  if (!params) return

  const header = headerContent(params)

  const docDefinition: Ipdf.TDocumentDefinitions = {
    info: {
      title: `Предложение на здание от ${contact}`,
      author: 'HangarPro',
      subject: `Здание ${params.width} x ${params.length} x ${params.height}м.`,
    },
    watermark: { text: 'HangarPro', fontSize: 150, angle: 70, opacity: 0.05 },
    content: [
      titleTop(),
      header.title,
      header.description,
      tableContent(offer),
      remark(),
      footerContent(contact),
    ],
  }

  const fileName = `КП ${params.width}x${params.length}x${params.height} ${
    CALC_BUILDING_TYPE_NAMES[params.type]
  } АнгарПро`

  console.log(fileName)

  // @ts-ignore
  pdfMake.createPdf(docDefinition).download(fileName)
}

export default saveOffer
