import React, { useEffect, useState } from 'react'
import { ReactI18NextChild } from 'react-i18next'

type Props = {
  children: ReactI18NextChild
}
function ClientOnly({ children = null }: Props) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return <div>{children}</div>
}

export default ClientOnly
