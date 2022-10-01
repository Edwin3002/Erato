import Footer from '../components/footer/Footer'
import Navb from '../components/navbar/Navb'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel="shortcut icon" href="https://res.cloudinary.com/edwin3002/image/upload/v1664576092/Erato/logo-1_fyxulh.png" />
    </Head>
      <Navb/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
