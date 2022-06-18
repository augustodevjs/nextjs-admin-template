import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useContext } from 'react';
import { AppProvider } from '../data/context/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
