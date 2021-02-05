import React from 'react'
import nookies from 'nookies'

import { SideNav, ProjectCard, TaskCard, Modal } from '../../components'
import { verifyIdToken } from '../../util/firebase/firebaseAdmin'
import firebaseClient from '../../util/firebase/firebaseClient'
import InvoiceCard from '../../components/cards/invoice'
import EarningsCard from '../../components/cards/earnings'
import ActivityCard from '../../components/cards/activities'

function Dashboard({ session }) {
  firebaseClient()
  const [showMenu, setShow] = React.useState(false)

  if (session) {
    return (
      <>
        <Modal show />
        <SideNav page='dashboard'>
          {/* PAGE HEADER */}
          <div className='flex flex-col'>
            <div className='pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between'>
              <h3 className='text-2xl leading-6 font-xl text-gray-900'>
                Dashboard
              </h3>
              <div className='mt-3 flex sm:mt-0 sm:ml-4'>
                <button
                  type='button'
                  className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Create Project
                </button>
                <button
                  type='button'
                  className='ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Add Task
                </button>
              </div>
            </div>

            {/* MAIN SECTION */}
            <section className='grid grid-cols-1 gap-6 md:gap-4 md:grid-cols-2 lg:grid-cols-12 mt-6'>
              {/* Left Column */}
              <div className='col-span-1 md:col-span-2 lg:col-span-7'>
                {/* Earnings */}
                <EarningsCard />
                {/* Tasks */}
                <TaskCard />
                {/* INVOICES */}
                <InvoiceCard />
              </div>
              {/* Right Column */}
              <div className='col-span-1 md:col-span-2 lg:col-span-5'>
                {/* Projects */}
                <ProjectCard />
                {/* Activity */}
                <ActivityCard />
              </div>
            </section>
          </div>
        </SideNav>
      </>
    )
  } else {
    return <h1>LOADING....</h1>
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
