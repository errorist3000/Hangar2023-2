const breakpoints = ['768px', '1024px', '1600px', '1920px']

//             0  1  2  3   4   5   6   7   8   9   10  11  12  13  14  15  16
const space = [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 128]

//                 0   1   2   3   4   5   6   7   8   9   10  11
const fontSizes = [10, 12, 14, 16, 18, 20, 24, 32, 48, 64, 72, 96]

const fontWeights = {
  thin: 300,
  default: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  blackBold: 900,
}

const transitionTime = {
  default: '250ms',
  modal: '150ms',
}
const fontFamily = { fontFamily: 'Rubik, sans-serif' }

const defaultTheme = {
  breakpoints,
  fontFamily,
  fontSizes,
  name: 'defaultTheme',
  space,
  transitionTime,
  fontWeights,
}

export default defaultTheme
