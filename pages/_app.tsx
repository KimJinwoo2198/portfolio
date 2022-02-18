import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      disable: false,
      duration: 1300,
      once: false
    })
  }, [])

  return (
    <>
      <Head>
        <title>Byungchul Kim</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
