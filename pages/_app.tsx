
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient} >
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </QueryClientProvider>
  )
}

export default MyApp