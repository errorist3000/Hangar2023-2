import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function ClientOnly({ children }) {
  const [isMounted, setIsMounted] = useState(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return <div>{children}</div>
}

ClientOnly.defaultProps = {
  children: null,
}

ClientOnly.propTypes = {
  children: PropTypes.node,
}

export default ClientOnly
