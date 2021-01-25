import React from 'react'
import nookies from 'nookies'

import { SideNav } from '../../components'

import { verifyIdToken } from '../../util/firebase/firebaseAdmin'
import firebaseClient from '../../util/firebase/firebaseClient'

function Tasks({ session }) {
  firebaseClient()
  if (session) {
    return (
      <SideNav page='tasks'>
        {/* Section Title */}
        <div className='pb-5 mb-10 border-b border-gray-200 sm:flex sm:items-center sm:justify-between'>
          <h3 className='text-2xl leading-6 font-xl text-gray-900'>Tasks</h3>
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

export default Tasks
