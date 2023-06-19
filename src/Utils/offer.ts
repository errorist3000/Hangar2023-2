import numeral from 'numeral'
import {
  getDoorArea,
  getGateArea,
  getRoofArea,
  getSkeletonWeight,
  getWallArea,
  getWindowArea,
} from 'Utils/calc'

import {
  CALC_OFFER_TOTAL_ID,
  CalcBuildingParams,
  CalcOffer,
} from 'Constants/calculator'

function formatPrice(price: number) {
  return numeral(price).format('0,0$')
}

export function getOffer(params: CalcBuildingParams): CalcOffer {
  const skeletonWeight = getSkeletonWeight(params)
  const roofArea = getRoofArea(params)
  const wallsArea = getWallArea(params)
  const gateArea = getGateArea(params)
  const doorArea = getDoorArea(params)
  const windowArea = getWindowArea(params)

  const skeletonMaterialPrice = Math.ceil(skeletonWeight * 1000)
  const skeletonMountingPrice = Math.ceil(skeletonWeight * 1000)
  const roofMaterialPrice = Math.ceil(roofArea * 1000)
  const roofMountingPrice = Math.ceil(roofArea * 1000)
  const wallsMaterialPrice = Math.ceil(wallsArea * 1000)
  const wallsMountingPrice = Math.ceil(wallsArea * 1000)
  const gatePrice = Math.ceil(gateArea * 1000)
  const doorPrice = Math.ceil(doorArea * 1000)
  const windowPrice = Math.ceil(windowArea * 1000)
  const totalPrice =
    skeletonMaterialPrice +
    skeletonMountingPrice +
    roofMaterialPrice +
    roofMountingPrice +
    wallsMaterialPrice +
    wallsMountingPrice +
    gatePrice +
    doorPrice +
    windowPrice

  return {
    skeletonMaterial: {
      id: 11,
      title: 'Металлоконструкция',
      description: 'Металлоконструкция',
      price: formatPrice(skeletonMaterialPrice),
    },
    skeletonMounting: {
      id: 12,
      title: 'Монтаж металлоконструкции',
      description: 'Монтаж металлоконструкции',
      price: formatPrice(skeletonMountingPrice),
    },
    roofMaterial: {
      id: 21,
      title: 'Кровля',
      description: 'Кровля',
      price: formatPrice(roofMaterialPrice),
    },
    roofMounting: {
      id: 22,
      title: 'Монтаж кровли',
      description: 'Монтаж кровли',
      price: formatPrice(roofMountingPrice),
    },
    wallsMaterial: {
      id: 31,
      title: 'Стены',
      description: 'Стены',
      price: formatPrice(wallsMaterialPrice),
    },
    wallsMounting: {
      id: 32,
      title: 'Монтаж стен',
      description: 'Монтаж стен',
      price: formatPrice(wallsMountingPrice),
    },
    gate: {
      id: 41,
      title: 'Ворота',
      description: 'Ворота',
      price: formatPrice(gatePrice),
    },
    door: {
      id: 51,
      title: 'Двери',
      description: 'Двери',
      price: formatPrice(doorPrice),
    },
    window: {
      id: 61,
      title: 'Окна',
      description: 'Окна',
      price: formatPrice(windowPrice),
    },
    total: {
      id: CALC_OFFER_TOTAL_ID,
      title: 'Итого',
      description: 'Итого',
      price: formatPrice(totalPrice),
    },
  }
}
