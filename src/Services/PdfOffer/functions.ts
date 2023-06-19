// eslint-disable-next-line import/no-unresolved
import * as Ipdf from 'pdfmake/interfaces'
import Utils from 'Utils'
import { getWindowArea } from 'Utils/calc'

import {
  CALC_BUILDING_TYPE_NAMES,
  CalcBuildingParams,
  CalcOffer,
} from 'Constants/calculator'
import { LANDING_CREDITS } from 'Constants/ids'

export const titleTop = (): Ipdf.Column => {
  return {
    columns: [
      {
        width: 'auto',
        fontSize: 14,
        text: `${LANDING_CREDITS.URL} | ${LANDING_CREDITS.EMAIL}`,
      },
      {
        width: '*',
        fontSize: 10,
        text: new Date().toLocaleDateString(),
        alignment: 'right',
      },
    ],
  }
}

export const headerContent = (params: CalcBuildingParams) => {
  const style: Ipdf.Style = { fontSize: 12, margin: [0, 3, 0, 0] }
  const title: Ipdf.Content = {
    text: `Здание ${params.width} x ${params.length} x ${params.height}м.`,
    fontSize: 15,
    margin: [0, 15, 0, 5],
    decoration: 'underline',
    alignment: 'center',
    bold: true,
  }
  const descriptionFences: Ipdf.Content = {
    text: `Ограждения: ${CALC_BUILDING_TYPE_NAMES[params.type]}.`,
    fontSize: style.fontSize,
    margin: style.margin,
  }
  const descriptionRegion: Ipdf.Content = {
    text: `Регион: ${params.region}.`,
    fontSize: style.fontSize,
    margin: style.margin,
  }
  const descriptionArea: Ipdf.Content = {
    text: `Площадь здания: ${Utils.Calculator.getBuildingArea(params)}кв.м.`,
    fontSize: style.fontSize,
    margin: style.margin,
  }

  const description: Ipdf.Content = {
    ul: [descriptionRegion, descriptionFences, descriptionArea],
    margin: [20, 0, 0, 10],
  }

  return {
    title,
    description,
  }
}

type TableContentProps = {
  params: CalcBuildingParams
  offer: CalcOffer
}

export const tableContent = ({ params, offer }: TableContentProps) => {
  const headerStyle: Ipdf.Style = {
    fontSize: 16,
    alignment: 'center',
    bold: true,
    fillColor: '#DDDDDD',
    margin: [0, 10, 0, 10],
  }
  const dataRowStyle: Ipdf.Style = {
    fontSize: 14,
    alignment: 'left',
    bold: false,
    margin: [0, 5, 0, 5],
  }

  const priceCellStyle: Ipdf.Style = { margin: [5, 5, 0, 5] }

  const body = [
    [
      {
        text: 'Наименование',
        alignment: headerStyle.alignment,
        bold: headerStyle.bold,
        fillColor: headerStyle.fillColor,
        margin: headerStyle.margin,
      },
      {
        text: 'Описание',
        alignment: headerStyle.alignment,
        bold: headerStyle.bold,
        fillColor: headerStyle.fillColor,
        margin: headerStyle.margin,
      },
      {
        text: 'Цена',
        alignment: headerStyle.alignment,
        bold: headerStyle.bold,
        fillColor: headerStyle.fillColor,
        margin: headerStyle.margin,
        noWrap: true,
      },
    ],

    [
      { text: offer.skeletonMaterial.title, margin: dataRowStyle.margin },
      {
        text: offer.skeletonMaterial.description,
        margin: dataRowStyle.margin,
      },
      {
        text: offer.skeletonMaterial.price,
        alignment: 'right',
        margin: priceCellStyle.margin,
      },
    ],

    [
      { text: offer.skeletonMounting.title, margin: dataRowStyle.margin },
      {
        text: offer.skeletonMounting.description,
        margin: dataRowStyle.margin,
      },
      {
        text: offer.skeletonMounting.price,
        alignment: 'right',
        margin: priceCellStyle.margin,
      },
    ],

    [
      { text: offer.roofMaterial.title, margin: dataRowStyle.margin },
      {
        text: offer.roofMaterial.description,
        margin: dataRowStyle.margin,
      },
      {
        text: offer.roofMaterial.price,
        alignment: 'right',
        margin: priceCellStyle.margin,
      },
    ],

    [
      { text: offer.roofMounting.title, margin: dataRowStyle.margin },
      {
        text: offer.roofMounting.description,
        margin: dataRowStyle.margin,
      },
      {
        text: offer.roofMounting.price,
        alignment: 'right',
        margin: priceCellStyle.margin,
      },
    ],

    [
      { text: offer.wallsMaterial.title, margin: dataRowStyle.margin },
      {
        text: offer.wallsMaterial.description,
        margin: dataRowStyle.margin,
      },
      {
        text: offer.wallsMaterial.price,
        alignment: 'right',
        margin: priceCellStyle.margin,
      },
    ],

    [
      { text: offer.wallsMounting.title, margin: dataRowStyle.margin },
      {
        text: offer.wallsMounting.description,
        margin: dataRowStyle.margin,
      },
      {
        text: offer.wallsMounting.price,
        alignment: 'right',
        margin: priceCellStyle.margin,
      },
    ],
  ]

  if (params.gateCount.value) {
    body.push([
      { text: offer.gate.title, margin: dataRowStyle.margin },
      { text: offer.gate.description, margin: dataRowStyle.margin },
      {
        text: offer.gate.price,
        alignment: 'right',
        margin: priceCellStyle.margin,
      },
    ])
  }

  if (params.doorCount.value) {
    body.push([
      { text: offer.door.title, margin: dataRowStyle.margin },
      { text: offer.door.description, margin: dataRowStyle.margin },
      {
        text: offer.door.price,
        alignment: 'right',
        margin: priceCellStyle.margin,
      },
    ])
  }

  if (getWindowArea(params) > 0) {
    body.push([
      { text: offer.window.title, margin: dataRowStyle.margin },
      { text: offer.window.description, margin: dataRowStyle.margin },
      {
        text: offer.window.price,
        alignment: 'right',
        margin: priceCellStyle.margin,
      },
    ])
  }

  console.log(body)

  body.push([
    {
      text: offer.total.title,
      bold: true,
      fillColor: headerStyle.fillColor,
      // @ts-ignore
      colSpan: 2,
      margin: dataRowStyle.margin,
    },
    // @ts-ignore
    '',
    {
      text: offer.total.price,
      alignment: 'right',
      bold: true,
      fillColor: headerStyle.fillColor,
      margin: priceCellStyle.margin,
      noWrap: true,
    },
  ])

  return {
    fontSize: dataRowStyle.fontSize,
    bold: dataRowStyle.bold,
    table: {
      headerRows: 1,
      widths: ['*', 'auto', 'auto'],
      body,
    },
  }
}

export const remark = () => {
  return '* данное предложение не является публичной офертой'
}

export const footerContent = (contact: string) => {
  const name: Ipdf.Content = {
    text: contact,
    margin: [0, 40, 0, 0],
    alignment: 'center',
    fontSize: 16,
  }
  const address: Ipdf.Content = {
    text: contact,
    margin: [0, 5, 0, 0],
    alignment: 'center',
    fontSize: 12,
  }
  const phones: Ipdf.Content = {
    text: contact,
    margin: [0, 5, 0, 0],
    alignment: 'center',
    fontSize: 12,
    bold: true,
  }
  return [name, address, phones]
}
