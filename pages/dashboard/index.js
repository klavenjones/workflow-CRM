import React from 'react'
import nookies from 'nookies'

import { SideNav, DropDownMenu } from '../../components'
import { FaPlus, FaCalendar, FaChevronRight } from 'react-icons/fa'
import { HiDotsVertical } from 'react-icons/hi'
import { BiCheck } from 'react-icons/bi'

import { verifyIdToken } from '../../util/firebase/firebaseAdmin'
import firebaseClient from '../../util/firebase/firebaseClient'
import firebase from 'firebase/app'

function Dashboard({ session }) {
  firebaseClient()
  const [showMenu, setShow] = React.useState(false)

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
          <section className='grid grid-cols-1 gap-6 md:gap-4 md:grid-cols-2 lg:grid-cols-12 mt-6'>
            {/* Left Column */}
            <div className='col-span-1 md:col-span-2 lg:col-span-7'>
              {/* Earnings */}
              <div className='bg-white overflow-hidden shadow sm:rounded-lg mb-6'>
                <div className='bg-white px-4 py-5 border-b border-gray-200 sm:px-6'>
                  <h3 className='text-lg leading-6 font-medium text-gray-900'>
                    Earnings
                  </h3>
                </div>
                <div className='px-4 py-5 sm:p-6'>
                  {/* Content goes here */}
                  <div className='grid grid-cols-1 gap-6 sm:gap-4 md:grid-cols-3'>
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
              <div className='bg-white overflow-visible shadow rounded-lg mb-6 relative'>
                <div className='bg-white px-4 py-4 border-b border-gray-200 rounded-t-lg rounded-b-none sm:px-6'>
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

                <div className=''>
                  {/* TASK Content goes here */}
                  <div className='bg-white  overflow-visible sm:rounded-md'>
                    <ul className='relative divide-y divide-gray-200'>
                      <li>
                        <a href='#' className='block hover:bg-gray-50'>
                          <div className='flex items-center px-4 py-4 sm:px-6'>
                            <div className='min-w-0 flex-1 flex items-center'>
                              <div className='min-w-0 flex-1 px-2 md:grid md:grid-cols-2 md:gap-4'>
                                <div>
                                  <p className='text-sm font-medium text-indigo-600 '>
                                    Task Title
                                  </p>
                                  <p className='mt-2 flex items-center text-sm text-gray-500'>
                                    <FaCalendar className='mr-2 text-gray-400 space-x-1' />{' '}
                                    <time
                                      className='ml-1'
                                      dateTime='2020-01-07'
                                    >
                                      January 7, 2020
                                    </time>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div>
                              {/* Drop Down Menu*/}
                              <DropDownMenu />
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* INVOICES */}
              <div className='bg-white overflow-visible shadow rounded-lg mb-6 relative'>
                <div className='bg-white px-4 py-4 border-b border-gray-200 rounded-t-lg rounded-b-none sm:px-6'>
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

                <div className=''>
                  {/* Invoice CONTENT */}
                  <div className='px-1'>
                    <div className='bg-white  overflow-visible sm:rounded-md'>
                      <ul className='relative divide-y divide-gray-200'>
                        <li>
                          <a href='#' className='block hover:bg-gray-50'>
                            <div className='flex items-center px-4 py-4 sm:px-6'>
                              <div className='min-w-0 flex-1 flex items-center'>
                                <div className='min-w-0 flex-1 px-2 md:grid md:grid-cols-2 md:gap-4'>
                                  <div>
                                    <p className='text-sm font-medium text-indigo-600 '>
                                      Invoice Number
                                    </p>
                                    <p className='mt-2 flex items-center text-sm text-gray-500'>
                                      <FaCalendar className='mr-2 text-gray-400 space-x-1' />{' '}
                                      <time
                                        className='ml-1'
                                        dateTime='2020-01-07'
                                      >
                                        January 7, 2020
                                      </time>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div>
                                {/* Drop Down Menu*/}
                                <DropDownMenu />
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className='col-span-1 md:col-span-2 lg:col-span-5'>
              {/* Projects */}
              <div className='bg-white overflow-visible shadow rounded-lg mb-6 relative'>
                <div className='bg-white px-4 py-4 border-b border-gray-200 rounded-t-lg rounded-b-none sm:px-6'>
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

                <div className='px-1'>
                  {/* This example requires Tailwind CSS v2.0+ */}
                  <div className='bg-white  overflow-visible sm:rounded-md'>
                    <ul className='relative divide-y divide-gray-200'>
                      <li>
                        <a href='#' className='block hover:bg-gray-50'>
                          <div className='flex items-center px-4 py-4 sm:px-6'>
                            <div className='min-w-0 flex-1 flex items-center'>
                              <div className='min-w-0 flex-1 px-2 md:grid md:grid-cols-2 md:gap-4'>
                                <div>
                                  <p className='text-sm font-medium text-indigo-600 '>
                                    Project Title
                                  </p>
                                  <p className='mt-2 flex items-center text-sm text-gray-500'>
                                    <FaCalendar className='mr-2 text-gray-400 space-x-1' />{' '}
                                    <time
                                      className='ml-1'
                                      dateTime='2020-01-07'
                                    >
                                      January 7, 2020
                                    </time>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div>
                              {/* Dropdown */}
                              <DropDownMenu />
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='bg-white overflow-hidden shadow sm:rounded-lg'>
                <div className='bg-white px-4 py-5 border-b border-gray-200 sm:px-6'>
                  <h3 className='text-lg leading-6 font-medium text-gray-900'>
                    Activity
                  </h3>
                </div>
                <div className='px-4 py-5 sm:p-6'>
                  {/* ACTIVITY Content goes here */}
                  <>
                    {/* This example requires Tailwind CSS v2.0+ */}
                    <div className='flow-root'>
                      <ul className='-mb-8'>
                        <li>
                          <div className='relative pb-8'>
                            <span
                              className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
                              aria-hidden='true'
                            />
                            <div className='relative flex space-x-3'>
                              <div>
                                <span className='h-8 w-8 rounded-full bg-green-400 flex items-center justify-center ring-8 ring-white text-white'>
                                  {/* Heroicon name: user */}
                                  <BiCheck size='1.75em' />
                                </span>
                              </div>
                              <div className='min-w-0 flex-1 pt-1.5 flex justify-between space-x-4'>
                                <div>
                                  <p className='text-sm text-gray-500'>
                                    Applied to{' '}
                                    <a
                                      href='#'
                                      className='font-medium text-gray-900'
                                    >
                                      Front End Developer
                                    </a>
                                  </p>
                                </div>
                                <div className='text-right text-sm whitespace-nowrap text-gray-500'>
                                  <time dateTime='2020-09-20'>Sep 20</time>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className='relative pb-8'>
                            <span
                              className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
                              aria-hidden='true'
                            />
                            <div className='relative flex space-x-3'>
                              <div>
                                <span className='h-8 w-8 rounded-full bg-green-400 flex items-center justify-center ring-8 ring-white text-white'>
                                  {/* Heroicon name: thumb-up */}
                                  <BiCheck size='1.75em' />
                                </span>
                              </div>
                              <div className='min-w-0 flex-1 pt-1.5 flex justify-between space-x-4'>
                                <div>
                                  <p className='text-sm text-gray-500'>
                                    Advanced to phone screening by{' '}
                                    <a
                                      href='#'
                                      className='font-medium text-gray-900'
                                    >
                                      Bethany Blake
                                    </a>
                                  </p>
                                </div>
                                <div className='text-right text-sm whitespace-nowrap text-gray-500'>
                                  <time dateTime='2020-09-22'>Sep 22</time>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className='relative pb-8'>
                            <span
                              className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
                              aria-hidden='true'
                            />
                            <div className='relative flex space-x-3'>
                              <div>
                                <span className='h-8 w-8 rounded-full bg-green-400 flex items-center justify-center ring-8 ring-white text-white'>
                                  {/* Heroicon name: check */}
                                  <BiCheck size='1.75em' />
                                </span>
                              </div>
                              <div className='min-w-0 flex-1 pt-1.5 flex justify-between space-x-4'>
                                <div>
                                  <p className='text-sm text-gray-500'>
                                    Completed phone screening with{' '}
                                    <a
                                      href='#'
                                      className='font-medium text-gray-900'
                                    >
                                      Martha Gardner
                                    </a>
                                  </p>
                                </div>
                                <div className='text-right text-sm whitespace-nowrap text-gray-500'>
                                  <time dateTime='2020-09-28'>Sep 28</time>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className='relative pb-8'>
                            <span
                              className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
                              aria-hidden='true'
                            />
                            <div className='relative flex space-x-3'>
                              <div>
                                <span className='h-8 w-8 rounded-full bg-green-400 flex items-center justify-center ring-8 ring-white text-white'>
                                  {/* Heroicon name: thumb-up */}
                                  <BiCheck size='1.75em' />
                                </span>
                              </div>
                              <div className='min-w-0 flex-1 pt-1.5 flex justify-between space-x-4'>
                                <div>
                                  <p className='text-sm text-gray-500'>
                                    Advanced to interview by{' '}
                                    <a
                                      href='#'
                                      className='font-medium text-gray-900'
                                    >
                                      Bethany Blake
                                    </a>
                                  </p>
                                </div>
                                <div className='text-right text-sm whitespace-nowrap text-gray-500'>
                                  <time dateTime='2020-09-30'>Sep 30</time>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className='relative pb-8'>
                            <div className='relative flex space-x-3'>
                              <div>
                                <span className='h-8 w-8 rounded-full bg-green-400 flex items-center justify-center ring-8 ring-white text-white'>
                                  {/* Heroicon name: check */}
                                  <BiCheck size='1.75em' />
                                </span>
                              </div>
                              <div className='min-w-0 flex-1 pt-1.5 flex justify-between space-x-4'>
                                <div>
                                  <p className='text-sm text-gray-500'>
                                    Completed interview with{' '}
                                    <a
                                      href='#'
                                      className='font-medium text-gray-900'
                                    >
                                      Katherine Snyder
                                    </a>
                                  </p>
                                </div>
                                <div className='text-right text-sm whitespace-nowrap text-gray-500'>
                                  <time dateTime='2020-10-04'>Oct 4</time>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </>
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
