import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function PortfolioApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Byungchul Kim</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default PortfolioApp
