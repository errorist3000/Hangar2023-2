import {
  CalcBuildingParams,
  CalcWindowTypes,
  DOOR_SIZE,
  WINDOW_SIZE,
} from 'Constants/calculator'

export function getBuildingArea(params: CalcBuildingParams) {
  return params.width * params.length
}

export function getBuildingVolume(params: CalcBuildingParams) {
  return params.width * params.length * params.height
}

export function getBuildingPerimeter(params: CalcBuildingParams) {
  return 2 * (params.width + params.length)
}

export function getSkeletonWeight(params: CalcBuildingParams) {
  return getBuildingVolume(params) * 20
}

export function getRoofArea(params: CalcBuildingParams) {
  return getBuildingArea(params) * 1.1
}

export function getWallArea(params: CalcBuildingParams) {
  return getBuildingPerimeter(params) * params.height
}

export function getGateArea(params: CalcBuildingParams) {
  if (params.gateCount === 0 || !params.gateWidth || !params.gateHeight)
    return 0

  return params.gateWidth * params.gateHeight * params.gateCount
}

export function getDoorArea(params: CalcBuildingParams) {
  if (params.doorCount === 0) return 0

  return DOOR_SIZE.WIDTH * DOOR_SIZE.WIDTH * params.doorCount
}

export function getWindowArea(params: CalcBuildingParams) {
  if (params.windowType === CalcWindowTypes.OneLine)
    return WINDOW_SIZE.HEIGHT * params.length * 2

  if (params.windowType === CalcWindowTypes.TwoLine)
    return WINDOW_SIZE.HEIGHT * params.length * 4

  return 0
}
