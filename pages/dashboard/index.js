import React from 'react'
import nookies from 'nookies'

import { SideNav } from '../../components'
import { FaPlus } from 'react-icons/fa'

import { verifyIdToken } from '../../util/firebase/firebaseAdmin'
import firebaseClient from '../../util/firebase/firebaseClient'
import firebase from 'firebase/app'

function Dashboard({ session }) {
  firebaseClient()

  if (session) {
    return (
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
          <section className='grid grid-cols-1 gap-6 sm:gap-6 md:grid-cols-3 mt-6'>
            <div className='col-span-2'>
              {/* Earnings */}
              <div className='bg-white overflow-hidden shadow sm:rounded-lg mb-6'>
                <div className='bg-white px-4 py-5 border-b border-gray-200 sm:px-6'>
                  <h3 className='text-lg leading-6 font-medium text-gray-900'>
                    Earnings
                  </h3>
                </div>
                <div className='px-4 py-5 sm:p-6'>
                  {/* Content goes here */}
                  <div className='grid grid-cols-1 gap-6 sm:gap-4 md:grid-cols-3 '>
                    <div>
                      <h1>Outstanding</h1>
                      <p className='text-red-400'>$500.00</p>
                    </div>
                    <div>
                      <h1>Paid</h1>
                      <p className='text-green-400'>$2000.00</p>
                    </div>
                    <div>
                      <h1>Total</h1>
                      <p className='text-black'> $2500.00</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tasks */}
              <div className='bg-white overflow-hidden shadow rounded-lg mb-6'>
                <div className='bg-white px-4 py-4 border-b border-gray-200 sm:px-6'>
                  <div className='-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap'>
                    <div className='ml-4 mt-2'>
                      <h3 className='text-lg leading-6 font-medium text-gray-900'>
                        Upcoming Tasks
                      </h3>
                    </div>
                    <div className='ml-4 mt-2 flex-shrink-0'>
                      <button
                        type='button'
                        className='relative inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>

                <div className='px-4 py-5 sm:p-6'>
                  {/* Content goes here */}
                </div>
              </div>
              <div className='bg-white overflow-hidden shadow rounded-lg mb-6'>
                <div className='bg-white px-4 py-4 border-b border-gray-200 sm:px-6'>
                  <div className='-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap'>
                    <div className='ml-4 mt-2'>
                      <h3 className='text-lg leading-6 font-medium text-gray-900'>
                        Invoices
                      </h3>
                    </div>
                    <div className='ml-4 mt-2 flex-shrink-0'>
                      <button
                        type='button'
                        className='relative inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>

                <div className='px-4 py-5 sm:p-6'>
                  {/* Content goes here */}
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div className=''>
              {/* Projects */}
              <div className='bg-white overflow-hidden shadow rounded-lg mb-6'>
                <div className='bg-white px-4 py-4 border-b border-gray-200 sm:px-6'>
                  <div className='-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap'>
                    <div className='ml-4 mt-2'>
                      <h3 className='text-lg leading-6 font-medium text-gray-900'>
                        Projects
                      </h3>
                    </div>
                    <div className='ml-4 mt-2 flex-shrink-0'>
                      <button
                        type='button'
                        className='relative inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>

                <div className='px-4 py-5 sm:p-6'>
                  {/* Content goes here */}
                </div>
              </div>

              <div className='bg-white overflow-hidden shadow sm:rounded-lg'>
                <div className='bg-white px-4 py-5 border-b border-gray-200 sm:px-6'>
                  <h3 className='text-lg leading-6 font-medium text-gray-900'>
                    Activity
                  </h3>
                </div>
                <div className='px-4 py-5 sm:p-6'>
                  {/* Content goes here */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </SideNav>
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
