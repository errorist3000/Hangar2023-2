import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'

import { LANGUAGE } from 'Constants/ids'

import en from './translations/en.json'
import ru from './translations/ru.json'

const resources = {
  ru: {
    translation: ru,
  },
  en: {
    translation: en,
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: LANGUAGE.RU,

    interpolation: {
      escapeValue: false,
    },
  })
  .then()

export default i18n
