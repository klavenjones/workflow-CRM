import React from 'react'
import nookies from 'nookies'

import { SideNav } from '../components'

import { verifyIdToken } from '../util/firebase/firebaseAdmin'
import firebaseClient from '../util/firebase/firebaseClient'
import firebase from 'firebase/app'

function Dashboard({ session }) {
  firebaseClient()

  if (session) {
    return (
      <SideNav page='dashboard'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
          <div className='max-w-3xl mx-auto flex flex-column justify-between'>
            <h1>{session}</h1>
            <button
              type='button'
              className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={async () => {
                firebase.auth().signOut()
                nookies.destroy(undefined, 'token')
                window.location.href = '/'
              }}
            >
              Log Out
            </button>
          </div>
        </div>
      </SideNav>
    )
  } else {
    return <h1>LOADING!</h1>
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

export default Dashboard
