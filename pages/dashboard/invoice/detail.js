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
          <div className='col-span-12'>
            {/* Invoice Info */}
            <div className='bg-white overflow-hidden shadow rounded-lg'>
              <div className='px-4 py-5 sm:p-6'>
                <>
                  {/* This example requires Tailwind CSS v2.0+ */}
                  <div>
                    <h3 className='text-lg leading-6 font-medium text-gray-900'>
                      Invoice Information
                    </h3>
                    <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                      Invoice Details
                    </p>
                  </div>
                  <div className='mt-5 border-t border-gray-200'>
                    <dl className='divide-y divide-gray-200'>
                      <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Bill to
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
                          Company
                        </dt>
                        <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          <span className='flex-grow'>Miramom</span>
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
                          Issued On
                        </dt>
                        <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          <span className='flex-grow'> Jan 21, 2021 </span>
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
                          Due on
                        </dt>
                        <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          <span className='flex-grow'>Feb 21, 2021</span>
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
                          Items
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          {/* Add Item Button */}
                          <div className='mb-5 text-right'>
                            <button
                              type='button'
                              className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            >
                              Add Item
                            </button>
                          </div>
                        </dd>
                        {/* Item List*/}
                        <div className='mt-1 text-sm text-gray-900  sm:mt-0 sm:col-span-3'>
                          <div className='mb-5'>
                            <div className='flex justify-between'>
                              <div className='w-0 flex-1 flex items-center'>
                                <p className='flex-1 w-0 text-sm font-medium text-gray-400'>
                                  Item
                                </p>
                              </div>
                              <div className='flex flex-grow justify-end text-right pr-2'>
                                <p className='text-sm font-medium text-gray-400 w-32'>
                                  Units
                                </p>
                                <p className='text-sm font-medium text-gray-400 w-32'>
                                  Rate
                                </p>
                                <p className='text-sm font-medium text-gray-400 w-32'>
                                  Total
                                </p>
                              </div>
                            </div>
                            <div className='my-4'>
                              <ul className='border border-gray-200 rounded-sm divide-y divide-gray-200'>
                                {/* List Items */}
                                <li className='pr-2 py-3 flex items-center justify-between text-sm'>
                                  <div className='w-0 flex-1 flex items-center'>
                                    <p className='ml-2 flex-1 w-0 '>
                                      Website Creation
                                    </p>
                                  </div>
                                  <div className='flex flex-grow justify-end text-right'>
                                    <p className='text-sm font-bold text-gray-400 w-32 truncate'>
                                      2
                                    </p>
                                    <p className='text-sm font-medium text-gray-400  w-32  truncate'>
                                      $200.00
                                    </p>
                                    <p className='text-sm font-medium text-gray-400  w-32 truncate'>
                                      $4000.00
                                    </p>
                                  </div>
                                </li>
                                <li className='pr-2 py-3 flex items-center justify-between text-sm'>
                                  <div className='w-0 flex-1 flex items-center '>
                                    <span className='ml-2 flex-1 w-0'>
                                      Website Creation
                                    </span>
                                  </div>
                                  <div className='flex flex-grow justify-end text-right'>
                                    <p className='text-sm font-bold text-gray-400 w-32 truncate'>
                                      2
                                    </p>
                                    <p className='text-sm font-medium text-gray-400  w-32  truncate'>
                                      $200.00
                                    </p>
                                    <p className='text-sm font-medium text-gray-400  w-32 truncate'>
                                      $4000.00
                                    </p>
                                  </div>
                                </li>
                                <li className='pr-2 py-3 flex items-center justify-between text-sm'>
                                  <div className='w-0 flex-1 flex items-center '>
                                    <span className='ml-2 flex-1 w-0 '>
                                      Website Creation
                                    </span>
                                  </div>
                                  <div className='flex flex-grow justify-end text-right'>
                                    <p className='text-sm font-bold text-gray-400 w-32 truncate'>
                                      2
                                    </p>
                                    <p className='text-sm font-medium text-gray-400  w-32  truncate'>
                                      $200.00
                                    </p>
                                    <p className='text-sm font-medium text-gray-400  w-32 truncate'>
                                      $4000.00
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Subtotal
                        </dt>
                        <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          <span className='ml-auto flex-shrink-0'>
                            <p className='bg-white rounded-md font-bold hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                              $12,000.00
                            </p>
                          </span>
                        </dd>
                        <dt className='text-sm font-medium text-gray-500'>
                          % Taxes
                        </dt>
                        <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          <span className='ml-auto flex-shrink-0'>
                            <p className='bg-white rounded-md font-bold hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                              $0.00
                            </p>
                          </span>
                        </dd>
                        <dt className='text-sm font-medium text-gray-500'>
                          Discounts
                        </dt>
                        <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          <span className='ml-auto flex-shrink-0'>
                            <p className='bg-white rounded-md font-bold hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                              - $0.00
                            </p>
                          </span>
                        </dd>
                      </div>
                      {/* <div className='py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Due on
                        </dt>
                        <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          <span className='flex-grow'>Feb 21, 2021</span>
                          <span className='ml-4 flex-shrink-0'>
                            <button
                              type='button'
                              className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            >
                              Update
                            </button>
                          </span>
                        </dd>
                      </div> */}
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
