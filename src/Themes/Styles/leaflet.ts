import { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

const leaflet = css`
  .leaflet-popup-content-wrapper {
    background: ${themeGet('colors.bg.primary')};
    box-shadow: ${themeGet('shadow.large')};
    padding: ${themeGet('space.4')}px;
    border-radius: 12px;
  }

  .leaflet-popup-content {
    margin: 0;

    p {
      margin-top: 0;
      margin-bottom: ${themeGet('space.2')}px;
    }
  }
`

export default leaflet
