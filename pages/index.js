import { useAuth } from '../context/auth'
import firebaseClient from '../util/firebase/firebaseClient'


import {
  Layout,
  Hero,
  Features,
  CTA,
  Stats,
  Footer,
  SideNav,
} from '../components'

export default function Home({ session }) {
  firebaseClient()
  const { user } = useAuth()
  if (user) {
    window.location.href = '/dashboard'
  } else {
    return (
      <Layout title='Workflow CRM'>
        <Hero />
        <Features />
        <CTA />
        <Stats />
        <Footer />
      </Layout>
    )
  }
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context)
    const token = await verifyIdToken(cookies.token)
    return {
      props: { session: true },
    }
  } catch (error) {
    return { props: {} }
  }
}
