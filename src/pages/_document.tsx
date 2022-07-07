import React, { Fragment } from 'react'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  NextScript,
  Head,
  Main,
  Html
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          // eslint-disable-next-line react/react-in-jsx-scope
          <Fragment key={0}>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>
        ]
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          {/* <!-- Cache --> */}
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta
            httpEquiv="cache-control"
            content="no-cache, no-store, must-revalidate"
          />
          {/* <!-- Favicon & Icons--> */}
          <link
            rel="icon"
            href="https://s3.amazonaws.com/mox.cash/website/mox-pyramid-green-favicon.ico"
          />
          {/* <!-- Fonts --> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
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
}
