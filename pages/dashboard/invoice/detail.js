import React from 'react'
import Link from 'next/link'
import nookies from 'nookies'

import { SideNav } from '../../../components'

import { verifyIdToken } from '../../../util/firebase/firebaseAdmin'
import firebaseClient from '../../../util/firebase/firebaseClient'
import EarningsCard from '../../../components/cards/earnings'
import InvoiceCard from '../../../components/cards/invoice'

function Invoice({ session }) {
  const [focused, setFocus] = React.useState(false)
  firebaseClient()

  if (session) {
    return (
      <SideNav page='invoices'>
        {/* Section title */}

        {/* This example requires Tailwind CSS v2.0+ */}
        <div className='md:flex md:items-center md:justify-between pb-5 mt-14 mb-10 border-b border-gray-200'>
          <div className='flex-1 min-w-0'>
            <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate'>
              INV0001
            </h2>
          </div>
          <div className='mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3'>
            <button
              type='button'
              className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500'
            >
              Edit Invoice
            </button>
          </div>
        </div>

        {/* Invoice Detail Cards */}
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-12'>
          <div className='col-span-8'>
            {/* Invoice Info */}
            <div className='bg-white overflow-hidden shadow rounded-lg'>
              <div className='px-4 py-5 sm:p-6'>
                <>
                  {/* This example requires Tailwind CSS v2.0+ */}
                  <div>
                    <h3 className='text-lg leading-6 font-medium text-gray-900'>
                      Applicant Information
                    </h3>
                    <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                      Personal details and application.
                    </p>
                  </div>
                  <div className='mt-5 border-t border-gray-200'>
                    <dl className='divide-y divide-gray-200'>
                      <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Full name
                        </dt>
                        <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          <span className='flex-grow'>Margot Foster</span>
                          <span className='ml-4flex-shrink-0'>
                            <button
                              type='button'
                              className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            >
                              Update
                            </button>
                          </span>
                        </dd>
                      </div>
                      <div className='py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Application for
                        </dt>
                        <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          <span className='flex-grow'>Backend Developer</span>
                          <span className='ml-4flex-shrink-0'>
                            <button
                              type='button'
                              className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            >
                              Update
                            </button>
                          </span>
                        </dd>
                      </div>
                      <div className='py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Email address
                        </dt>
                        <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          <span className='flex-grow'>
                            margotfoster@example.com
                          </span>
                          <span className='ml-4flex-shrink-0'>
                            <button
                              type='button'
                              className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            >
                              Update
                            </button>
                          </span>
                        </dd>
                      </div>
                      <div className='py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Salary expectation
                        </dt>
                        <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          <span className='flex-grow'> $120,000</span>
                          <span className='ml-4flex-shrink-0'>
                            <button
                              type='button'
                              className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            >
                              Update
                            </button>
                          </span>
                        </dd>
                      </div>
                      <div className='py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
                        <dt className='text-sm font-medium text-gray-500'>
                          About
                        </dt>
                        <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          <span className='flex-grow'>
                            Fugiat ipsum ipsum deserunt culpa aute sint do
                            nostrud anim incididunt cillum culpa consequat.
                            Excepteur qui ipsum aliquip consequat sint. Sit id
                            mollit nulla mollit nostrud in ea officia proident.
                            Irure nostrud pariatur mollit ad adipisicing
                            reprehenderit deserunt qui eu.
                          </span>
                          <span className='ml-4 flex-shrink-0'>
                            <button
                              type='button'
                              className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            >
                              Update
                            </button>
                          </span>
                        </dd>
                      </div>
                      <div className='py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Attachments
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          <ul className='border border-gray-200 rounded-md divide-y divide-gray-200'>
                            <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                              <div className='w-0 flex-1 flex items-center'>
                                {/* Heroicon name: paper-clip */}
                                <svg
                                  className='flex-shrink-0 h-5 w-5 text-gray-400'
                                  xmlns='http://www.w3.org/2000/svg'
                                  viewBox='0 0 20 20'
                                  fill='currentColor'
                                  aria-hidden='true'
                                >
                                  <path
                                    fillRule='evenodd'
                                    d='M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z'
                                    clipRule='evenodd'
                                  />
                                </svg>
                                <span className='ml-2 flex-1 w-0 truncate'>
                                  resume_back_end_developer.pdf
                                </span>
                              </div>
                              <div className='ml-4 flex-shrink-0 flex space-x-4'>
                                <button
                                  type='button'
                                  className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                >
                                  Update
                                </button>
                                <span
                                  className='text-gray-300'
                                  aria-hidden='true'
                                >
                                  |
                                </span>
                                <button
                                  type='button'
                                  className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                >
                                  Remove
                                </button>
                              </div>
                            </li>
                            <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                              <div className='w-0 flex-1 flex items-center'>
                                {/* Heroicon name: paper-clip */}
                                <svg
                                  className='flex-shrink-0 h-5 w-5 text-gray-400'
                                  xmlns='http://www.w3.org/2000/svg'
                                  viewBox='0 0 20 20'
                                  fill='currentColor'
                                  aria-hidden='true'
                                >
                                  <path
                                    fillRule='evenodd'
                                    d='M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z'
                                    clipRule='evenodd'
                                  />
                                </svg>
                                <span className='ml-2 flex-1 w-0 truncate'>
                                  coverletter_back_end_developer.pdf
                                </span>
                              </div>
                              <div className='ml-4 flex-shrink-0 flex space-x-4'>
                                <button
                                  type='button'
                                  className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                >
                                  Update
                                </button>
                                <span
                                  className='text-gray-300'
                                  aria-hidden='true'
                                >
                                  |
                                </span>
                                <button
                                  type='button'
                                  className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                >
                                  Remove
                                </button>
                              </div>
                            </li>
                          </ul>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </>
              </div>
            </div>
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

export default Invoice
