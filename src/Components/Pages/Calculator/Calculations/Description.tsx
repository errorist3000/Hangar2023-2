import React from 'react'

import { Column, Row, Text } from 'Components/UI'

import {
  CALC_BUILDING_TYPE_NAMES,
  CALC_GATE_TYPE_NAMES,
  CalcBuildingParams,
} from 'Constants/calculator'

type Props = {
  params: CalcBuildingParams
}

function Description({ params }: Props) {
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
          {CALC_BUILDING_TYPE_NAMES[params.type]}
        </Text>
      </Row>

      <Row fullWidth px={6} spaceBetween>
        <Text body body3>
          Ширина, м:
        </Text>
        <Text action3 body>
          {/* @ts-ignore */}
          {params.width}
        </Text>
      </Row>

      <Row fullWidth px={6} spaceBetween>
        <Text body body3>
          Длина, м:
        </Text>
        <Text action3 body>
          {/* @ts-ignore */}
          {params.length}
        </Text>
      </Row>

      <Row fullWidth px={6} spaceBetween>
        <Text body body3>
          Высота полезная, м:
        </Text>
        <Text action3 body>
          {/* @ts-ignore */}
          {params.height}
        </Text>
      </Row>

      {params.gateCount.value && (
        <Row fullWidth px={6} spaceBetween>
          <Text body body3>
            Ворота:
          </Text>
          <Text action3 body>
            {/* @ts-ignore */}
            {CALC_GATE_TYPE_NAMES[params.gateType.value]}
            &nbsp; {`${params.gateWidth}м x ${params.gateHeight}м`}
          </Text>
        </Row>
      )}
    </Column>
  )
}

export default Description
