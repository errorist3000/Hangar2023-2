import { system } from 'styled-system'

export type GapProps = {
  gap?: number | string | number[]
}
export const gap = system({
  gap: {
    property: 'gap',
    scale: 'space',
  },
})
