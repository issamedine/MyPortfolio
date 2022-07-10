import { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'

import ReactGA from 'react-ga'

const TRACKING_ID = 'UA-233995159-1'

ReactGA.initialize(TRACKING_ID)

function Website({ Component, pageProps, router }) {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
