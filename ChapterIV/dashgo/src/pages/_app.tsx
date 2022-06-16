import {AppProps} from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawerCProvider } from '../contexts/SidebarDrawerContext'


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme={theme}> 
    <SidebarDrawerCProvider>
      <Component {...pageProps} />
    </SidebarDrawerCProvider>
  </ChakraProvider>
  )
}

export default MyApp
