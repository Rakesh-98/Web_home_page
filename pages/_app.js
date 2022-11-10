import Navbar from '../component/navbar'
import Footer from '../component/footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar />
  <Component {...pageProps} />
  <Footer />
  </>
}

export default MyApp
