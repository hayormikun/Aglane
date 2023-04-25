import { useState } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
// import { ReactQueryDevtools } from 'react-query/devtools'


function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient} >
    <Hydrate state={pageProps.dehydratedState} >
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Hydrate >
    {/* <ReactQueryDevtools />  */}
    </QueryClientProvider>
  )
}

export default MyApp