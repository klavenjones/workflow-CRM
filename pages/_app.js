import { AuthProvider } from '../context/auth'
import { ToastProvider } from 'react-toast-notifications'
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
        <Component {...pageProps} />
      </ToastProvider>
    </AuthProvider>
  )
}

export default MyApp
