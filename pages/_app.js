import { useEffect, useRef } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'

import emailjs from '@emailjs/browser';

function Website({ Component, pageProps, router }) {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yrqvtah', 'template_5iosffd', form.current, 'pFhcILxKGyxEJKpK_')
      .then((result) => {
        console.log(result.text);
        console.log('msg sent')
      }, (error) => {
        console.log(error.text);
      });
  };

  const sendMailRef = useRef()

  useEffect(() => {
    sendMailRef.current.click();
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <form ref={form} onSubmit={sendEmail} style={{ width: '200px', display: 'flex', flexDirection: 'column', display: 'none' }}>
        <label>Name</label>
        <input type="text" name="user_name" value="issam" />
        <label>Email</label>
        <input type="email" name="user_email" value="issam@gmail.com" />
        <label>Message</label>
        <textarea name="message" value="Portfolio Visited" />
        <input type="submit" value="Send" ref={sendMailRef} />
      </form>
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
