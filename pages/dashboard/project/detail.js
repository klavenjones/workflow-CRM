import React from 'react'
import Link from 'next/link'
import nookies from 'nookies'

import {
  SideNav,
  DropDownMenu,
  ProjectCard,
  ActivityCard,
  TaskCard,
  NoteCard,
  DocumentCard,
} from '../../../components'
import { MdEmail } from 'react-icons/md'
import { HiPaperClip } from 'react-icons/hi'

import { verifyIdToken } from '../../../util/firebase/firebaseAdmin'
import firebaseClient from '../../../util/firebase/firebaseClient'
import EarningsCard from '../../../components/cards/earnings'
import InvoiceCard from '../../../components/cards/invoice'

function Project({ session }) {
  const [focused, setFocus] = React.useState(false)
  firebaseClient()

  if (session) {
    return (
      <SideNav page='projects'>
        {/* Section title */}

        {/* This example requires Tailwind CSS v2.0+ */}
        <div className='md:flex md:items-center md:justify-between pb-5 mt-14 mb-10 border-b border-gray-200'>
          <div className='flex-1 min-w-0'>
            <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate'>
              Project Title
            </h2>
          </div>
          <div className='mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3'>
            <button
              type='button'
              className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500'
            >
              Edit Project
            </button>
          </div>
        </div>

        {/* Project Detail Cards */}
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-12'>
          <div className='col-span-12 md:col-span-8'>
            <EarningsCard />
            <TaskCard />
            <ActivityCard />
          </div>
          <div className='col-span-12 md:col-span-4'>
            <InvoiceCard />
            <DocumentCard />
            <NoteCard />
          </div>
        </div>
      </SideNav>
    )
  } else {
    return <h1>LOAAAAADINGGG</h1>
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

export default Project
