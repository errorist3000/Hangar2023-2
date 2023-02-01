import React from 'react'

import { Head, Html, Main, NextScript } from 'next/document'
import themes from 'Themes'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin=""
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        {themes.main.font.webFonts.map(font => (
          <link
            href={`https://fonts.googleapis.com/css2?family=${font}`}
            rel="stylesheet"
          />
        ))}
        <link
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
