import React from 'react'
import Head from 'next/head'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <meta name='description' content='Workflow CRM' />
        <meta name='og:title' content='A CRM for Developers' />
        <meta name='twitter:card' content='summary_large_image' />
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>{children}</main>
    </>
  )
}
