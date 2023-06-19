import React, { ElementType } from 'react'
import { I18nextProvider } from 'react-i18next'

import { ThemeProvider } from 'styled-components'

import { ApolloProvider } from '@apollo/client'
import numeral from 'numeral'
import { StoreContext } from 'storeon/react'
import { GlobalStyle, theme } from 'Themes'

import client from 'Services/DatoCMS/client'
import i18n from 'Services/i18n'
import { createStore } from 'Services/Store'

type Props = {
  Component: ElementType
  pageProps: object
}

function MyApp({ Component, pageProps }: Props) {
  const store = createStore()

  if (!numeral.locales.ru) {
    numeral.register('locale', 'ru', {
      delimiters: {
        thousands: ' ',
        decimal: ',',
      },
      abbreviations: {
        thousand: 'тыс',
        million: 'млн',
        billion: 'млрд',
        trillion: 'трлн',
      },
      ordinal(number) {
        return number === 1 ? 'er' : 'ème'
      },
      currency: {
        symbol: '₽',
      },
    })
  }

  numeral.locale('ru')

  return (
    // @ts-ignore
    <ApolloProvider client={client}>
      <StoreContext.Provider value={store}>
        <ThemeProvider theme={theme}>
          <I18nextProvider i18n={i18n}>
            <GlobalStyle />
            <Component {...pageProps} />
          </I18nextProvider>
        </ThemeProvider>
      </StoreContext.Provider>
    </ApolloProvider>
  )
}

export default MyApp
