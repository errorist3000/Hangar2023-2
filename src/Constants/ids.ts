export const APP_NAME = 'HangarPro'

export const LANDING_CONTENT_WIDTH = 1276

export const LANDING_PADDING_X = [3, 3, 5, 11]

export const LANDING_HEADER_HEIGHT = { SCROLLED: 56, DEFAULT: 72 }

export enum LandingPageSectionIds {
  Hero = 'hero',
  Gallery = 'gallery',
  AboutUs = 'aboutUs',
  News = 'ourNews',
  Contacts = 'contacts',
}

export enum CalculatorPageSectionIds {
  Hero = 'hero',
  Calculator = 'calculator',
}

export const DATOCMS_ENDPOINT = {
  MAIN: 'https://graphql.datocms.com/',
  PREVIEW: '',
}

export const CONTACT_US_URL_PHP = 'https://angarpro.com/php/contact.php'
export const CALCULATOR_URL_PHP = 'https://angarpro.com/php/calculator.php'

export enum Language {
  En = 'en',
  Ru = 'ru',
}

export const LOCAL_STORAGE = {
  STORE: `${APP_NAME}.store`,
}
