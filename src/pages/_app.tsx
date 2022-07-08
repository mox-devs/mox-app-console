import React from 'react'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/globalStyle'
import { AuthProvider } from '../context/authContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider loggedUser={undefined}>
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
