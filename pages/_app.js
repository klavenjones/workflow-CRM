import { AuthProvider } from '../context/auth'
import { ToastProvider } from 'react-toast-notifications'
import Router from 'next/router'
import NextNProgress from 'nextjs-progressbar'
import { Error } from '../components'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={3000}
        placement='top-center'
      >
        <NextNProgress height={8} color='#4F46E5' />
        <Component {...pageProps} />
      </ToastProvider>
    </AuthProvider>
  )
}

export default MyApp
