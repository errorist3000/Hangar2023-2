const breakpoints = ['480px', '768px', '1024px', '1600px', '1920px']

//             0  1  2  3   4   5   6   7   8   9   10  11  12  13  14  15  16
const space = [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 128]

//                 0   1   2   3   4   5   6   7   8   9   10  11
const fontSize = [10, 12, 14, 16, 18, 20, 24, 32, 48, 64, 72, 96]

const fontWeight = [400, 500, 600, 700]

const transitionTime = {
  default: '250ms',
  long: '400ms',
  short: '150ms',
}
const font = {
  fontFamily: 'Inter, sans-serif',
  webFonts: ['Inter:wght@400;500;600;700'],
}

const zIndexes = {
  landingHeader: 500,
  modal: 9000,
}

const defaultTheme = {
  breakpoints,
  font,
  fontSize,
  name: 'defaultTheme',
  space,
  transitionTime,
  fontWeight,
  zIndexes,
}

export default defaultTheme
