import Head from 'next/head'
import styles from '../styles/Home.module.css'
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
  return (
    <Layout>
      <>
        <Head>
          <title>Workflow CRM</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
      </>
      <Hero />
      <Features />
      <CTA />
      <Stats />
      <Footer />
    </Layout>
  )
}
