import React from 'react'
import Link from 'next/link'
import nookies from 'nookies'

import {
  SideNav,
  DropDownMenu,
  ProjectCard,
  ActivityCard,
} from '../../../components'
import { MdEmail } from 'react-icons/md'
import { HiPaperClip } from 'react-icons/hi'

import { verifyIdToken } from '../../../util/firebase/firebaseAdmin'
import firebaseClient from '../../../util/firebase/firebaseClient'
import EarningsCard from '../../../components/cards/earnings'

function Client({ session }) {
  const [focused, setFocus] = React.useState(false)
  firebaseClient()

  if (session) {
    return (
      <SideNav page='clients'>
        {/* Section title */}
        
        {/* Client Info */}
        <div className='pb-5 mt-14 mb-10 border-b border-gray-200 sm:flex sm:items-center sm:justify-between'>
          <div className='flex items-center space-x-5'>
            <div className='flex-shrink-0'>
              <div className='relative'>
                <img
                  className='h-16 w-16  sm:h-24 sm:w-24 md:h-36 md:w-36  rounded-full'
                  src='https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
                  alt
                />
                <span
                  className='absolute inset-0 shadow-inner rounded-full'
                  aria-hidden='true'
                />
              </div>
            </div>
            <div>
              <h1 className='text-2xl lg:text-4xl font-bold text-gray-900'>
                Ricardo Cooper
              </h1>
              {/* <p className='text-sm font-medium lg:text-lg text-gray-500'>
                Applied for{' '}
                <a href='#' className='text-gray-900'>
                  Front End Developer
                </a>{' '}
                on <time dateTime='2020-08-25'>August 25, 2020</time>
              </p> */}
            </div>
          </div>
          <div className='mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3'>
            <button
              type='button'
              className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500'
            >
              Edit Client
            </button>
          </div>
        </div>

        {/* Detail Cards */}
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-12'>
          {/* Left Column */}
          <div className='col-span-12 lg:col-span-8'>
            {/* Totals Owed */}
            <EarningsCard />
            {/* Client Info */}
            <div className='bg-white overflow-hidden shadow rounded-lg'>
              <div className='px-4 py-5 sm:p-6'>
                <div className='flex items-center justify-between'>
                  <div className="flex-1">
                    <h3 className='text-lg leading-6 font-medium text-gray-900'>
                      Contact Info
                    </h3>
                    <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                      Personal details and application.
                    </p>
                  </div>
                  <div className="flex-shrink">
                    <button
                      type='button'
                      className='inline-flex items-center px-2 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                      Email Client
                      {/* Heroicon name: mail */}
                      <MdEmail className='ml-2 -mr-1 h-4 w-4' />
                    </button>
                  </div>
                </div>
                <div className='mt-5 border-t border-gray-200'>
                  <dl className='divide-y divide-gray-200'>
                    <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
                      <dt className='text-sm font-medium text-gray-500'>
                        Phone Number
                      </dt>
                      <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <span className='flex-grow'>(555) 555-5555</span>
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
                        Email Address
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
                        Website
                      </dt>
                      <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <span className='flex-grow'>website.com</span>
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
                        LinkedIn
                      </dt>
                      <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <span className='flex-grow'> Linkedin/example</span>
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
                        <span className='flex-grow'>Company Name</span>
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
                        Title in Company
                      </dt>
                      <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <span className='flex-grow'>Title Name</span>
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
                        Contracts & Proposals
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <ul className='border border-gray-200 rounded-md divide-y divide-gray-200'>
                          <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                            <div className='w-0 flex-1 flex items-center'>
                              {/* Heroicon name: paper-clip */}
                              <HiPaperClip className='flex-shrink-0 h-5 w-5 text-gray-400' />

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

                              <HiPaperClip className='flex-shrink-0 h-5 w-5 text-gray-400' />
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
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className='col-span-12 lg:col-span-4'>
            {/* Project Column */}
            <ProjectCard />
            {/* Activity */}
            <ActivityCard />
          </div>
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

export default Client
