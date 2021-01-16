import React from 'react'
import nookies from 'nookies'

import { SideNav } from '../../components'

import { verifyIdToken } from '../../util/firebase/firebaseAdmin'
import firebaseClient from '../../util/firebase/firebaseClient'

function Documents({ session }) {
  firebaseClient()
  if (session) {
    return (
      <SideNav page='documents'>
        <div>
          <h1>Documents</h1>
        </div>
      </SideNav>
    )
  } else {
    return <h1>LOADING.....</h1>
  }
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context)
    const token = await verifyIdToken(cookies.token)
    const { email } = token
    return {
      props: { session: `Your email is ${email}` },
    }
  } catch (error) {
    context.res.writeHead(302, { location: '/login' })
    context.res.end()
    return { props: {} }
  }
}

export default Documents
