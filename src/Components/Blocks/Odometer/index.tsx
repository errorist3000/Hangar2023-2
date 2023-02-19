import React, { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'

import 'odometer/themes/odometer-theme-default.css'

const Odometer = dynamic(import('react-odometerjs'), {
  ssr: false,
})

const DURATION = 5000
const TIMEOUT = 100
const FORMAT = '(.ddd),dd'

type Props = {
  value: number
  visible: boolean
}

function OdometerElement({ visible, value }: Props): JSX.Element {
  const [odometerValue, setOdometerValue] = useState(0)

  const handlerScroll = () => {
    if (visible && odometerValue === 0) {
      setTimeout(() => {
        setOdometerValue(() => {
          return value
        })
      }, TIMEOUT)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handlerScroll)
    return () => {
      window.removeEventListener('scroll', handlerScroll)
    }
  })

  return <Odometer duration={DURATION} format={FORMAT} value={odometerValue} />
}

export default OdometerElement
