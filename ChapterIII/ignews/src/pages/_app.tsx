import { AppProps } from 'next/app'
import { Header } from '../coomponents/Header'
import { SessionProvider as NextAuthProvider } from "next-auth/react"

import '../styles/global.scss'

// Ao recarregar a pagina as informações se o usuário está logado ou não chegam através do pageProps.session
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
