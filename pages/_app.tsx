
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { SessionProvider } from 'next-auth/react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <SessionProvider session={pageProps.session}>
    <QueryClientProvider client={queryClient} >
    <Hydrate state={pageProps.dehydratedState} >
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Hydrate >
    <ReactQueryDevtools /> 
    </QueryClientProvider>
    </SessionProvider>
  )
}

export default MyApp