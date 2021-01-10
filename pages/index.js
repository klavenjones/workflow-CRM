import { useAuth } from '../context/auth'
import {
  Layout,
  Hero,
  Features,
  CTA,
  Stats,
  Footer,
  SideNav,
} from '../components'

export default function Home() {
  const { user } = useAuth()
  console.log("USER FIREBASE", user)
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
