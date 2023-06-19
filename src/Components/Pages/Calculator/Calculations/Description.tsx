import React from 'react'

import { Column, Row, Text } from 'Components/UI'

import {
  CalcBuildingParams,
  CalcBuildingTypeNames,
  CalcGateTypeNames,
  CalcGateTypes,
} from 'Constants/calculator'

type Props = {
  parameter: CalcBuildingParams
}

function Description({ parameter }: Props) {
  return (
    <Column gap={3}>
      <Text heading mx={6} subHeader3>
        Параметры конструкции
      </Text>
      <Row fullWidth px={6} spaceBetween>
        <Text body body3>
          Тип покрытия здания:
        </Text>
        <Text action3 body>
          {CalcBuildingTypeNames[parameter.type]}
        </Text>
      </Row>

      <Row fullWidth px={6} spaceBetween>
        <Text body body3>
          Ширина, м:
        </Text>
        <Text action3 body>
          {/* @ts-ignore */}
          {parameter.width}
        </Text>
      </Row>

      <Row fullWidth px={6} spaceBetween>
        <Text body body3>
          Длина, м:
        </Text>
        <Text action3 body>
          {/* @ts-ignore */}
          {parameter.length}
        </Text>
      </Row>

      <Row fullWidth px={6} spaceBetween>
        <Text body body3>
          Высота полезная, м:
        </Text>
        <Text action3 body>
          {/* @ts-ignore */}
          {parameter.height}
        </Text>
      </Row>

      <Row fullWidth px={6} spaceBetween>
        <Text body body3>
          Ворота:
        </Text>
        <Text action3 body>
          {/* @ts-ignore */}
          {CalcGateTypeNames[parameter.gateType.value]}
          &nbsp;
          {parameter.gateType.value !== CalcGateTypes.None &&
            `${parameter.gateWidth}м x ${parameter.gateHeight}м`}
        </Text>
      </Row>
    </Column>
  )
}

export default Description
