import React from 'react'
import App, { Container } from 'next/app'
import {ThemeProvider} from 'styled-components'
import GlobalStyle, {theme} from '../style'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <GlobalStyle />
                <Component {...pageProps} />
            </Container>
        </ThemeProvider>
    )
  }
}