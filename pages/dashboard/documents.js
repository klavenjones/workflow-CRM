import React from 'react'
import nookies from 'nookies'
import { Documents as DocumentData } from '../../util/data'

import { SideNav, ListComponent, SectionHeader } from '../../components'
import {
  HiSortAscending,
  HiOutlineChevronDown,
  HiOutlineSearch,
} from 'react-icons/hi'

import { BsPersonFill } from 'react-icons/bs'

import { verifyIdToken } from '../../util/firebase/firebaseAdmin'
import firebaseClient from '../../util/firebase/firebaseClient'

function Documents({ session }) {
  const [focused, setFocus] = React.useState(false)
  firebaseClient()
  if (session) {
    return (
      <SideNav page='documents'>
        {/* Section title */}
        <SectionHeader title='Documents' />
        {/* Search and Filters */}
        <div className='pb-5 mb-10 sm:-ml-4 sm:flex sm:items-center sm:justify-between'>
          <div
            className={`mt-3 sm:mt-0 sm:ml-4 transition-all duration-800 ${
              focused ? 'sm:w-96 md:w-96' : 'sm:w-80 md:w-80'
            }`}
          >
            <label htmlFor='search_candidate' className='sr-only'>
              Search
            </label>
            <div className='flex rounded-md shadow-sm'>
              <div className='relative flex-grow focus-within:z-10'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  {/* Heroicon name: search */}
                  <HiOutlineSearch className='h-5 w-5 text-gray-400' />
                </div>
                <input
                  type='text'
                  name='search_candidate'
                  id='search_candidate'
                  className='focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:hidden border-gray-300'
                  placeholder='Search'
                />
                <input
                  type='text'
                  name='search_candidate'
                  id='search_candidate'
                  className='hidden focus:ring-indigo-500 focus:border-indigo-500 w-full rounded-none rounded-l-md pl-10 sm:block sm:text-sm border-gray-300'
                  placeholder='Search Documents'
                  onFocus={() => setFocus(true)}
                  onBlur={() => setFocus(false)}
                />
              </div>
              <button
                type='button'
                className='-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
              >
                {/* Heroicon name: sort-ascending */}
                <HiSortAscending className='h-5 w-5 text-gray-400' />
                <span className='ml-2'>Sort</span>
                {/* Heroicon name: chevron-down */}

                <HiOutlineChevronDown className='ml-2.5 -mr-1.5 h-5 w-5 text-gray-400' />
              </button>
            </div>
          </div>
          <div className='mt-3 sm:mt-0 sm:ml-4'>
            <button
              type='button'
              className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Upload Document
            </button>
          </div>
        </div>

        {/* Document List */}
        <div>
          <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2'>
            {/* LIST ITEM */}
            {/* List Items */}
            <ListComponent data={DocumentData} listType='document' />
          </ul>
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
