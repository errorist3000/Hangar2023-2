import { useEffect } from 'react'

const useWindowWidth = ({
  onWidthChange,
}: {
  onWidthChange?: (width: number) => void
}) => {
  return useEffect(() => {
    onWidthChange?.(window.innerWidth)

    function handlerResize() {
      onWidthChange?.(window.innerWidth)
    }

    window.addEventListener('resize', handlerResize)

    return () => window.removeEventListener('resize', handlerResize)
  }, [onWidthChange])
}

export default useWindowWidth
