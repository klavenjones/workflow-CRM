import React from 'react'
import nookies from 'nookies'
import Link from 'next/link'

import { SideNav, DropDownMenu, SectionHeader } from '../../components'
import {
  HiSortAscending,
  HiOutlineChevronDown,
  HiOutlineSearch,
  HiCalendar,
  HiCash,
} from 'react-icons/hi'
import { BsPersonFill } from 'react-icons/bs'
import { BiDollarCircle } from 'react-icons/bi'

import { verifyIdToken } from '../../util/firebase/firebaseAdmin'
import firebaseClient from '../../util/firebase/firebaseClient'
import { FaFileInvoiceDollar } from 'react-icons/fa'

function Invoices({ session }) {
  const [focused, setFocus] = React.useState(false)
  firebaseClient()
  if (session) {
    return (
      <SideNav page='invoices'>
        {/* Section title */}
        <SectionHeader title='Invoices' />
        {/* Search Bar */}
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
                  placeholder='Search Invoices'
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
              Add New Invoice
            </button>
          </div>
        </div>

        {/* Invoice List */}
        <div>
          <div>
            <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-1 lg:grid-cols-1'>
              <li className='col-span-1 flex shadow-sm rounded-md relative hover:bg-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                <div className='flex-shrink-0 flex items-center justify-center w-20 bg-gray-600 text-white text-sm font-medium rounded-l-md'>
                  INV0002
                </div>
                <div className='flex-1 flex items-center justify-between py-2 border-t border-r border-b border-gray-200  bg-white hover:bg-gray-100 rounded-r-md'>
                  <Link href='/dashboard/invoice/detail'>
                    <a className='text-gray-900 font-medium hover:text-gray-600  inline-block'>
                      <div className='flex-1 px-4 py-2 text-sm '>
                        <div className='mb-4'>Invoice Title</div>
                        <div className='flex flex-col justify-center md:grid md:grid-cols-6'>
                          {/* <p className='flex items-center text-gray-500 md:self-end'>
                            <HiCalendar className='mr-1' />
                            <span>Inv001</span>
                          </p> */}
                          <p className='flex items-center text-gray-500 pr-0 mb-3 md:mb-0 md:pr-4 col-span-1'>
                            <BsPersonFill className='mr-1' />
                            <span>Client Name</span>
                          </p>
                          <p className='flex items-center text-gray-700 pr-0 mb-3 md:mb-0 md:pr-4  col-span-1'>
                            <HiCalendar className='mr-1' />
                            <span>Jun 12, 2020</span>
                          </p>
                          <p className='flex items-center text-gray-400 pr-0 mb-3 md:mb-0 md:pr-4 col-span-1 '>
                            <HiCalendar className='mr-1' />
                            <span>Jul 12, 2020</span>
                          </p>

                          <p className='flex items-center text-red-500 pr-0 mb-3 md:mb-0 md:pr-2  col-span-1 '>
                            <FaFileInvoiceDollar className='mr-1' />
                            <span>$5000.00</span>
                          </p>
                          <p className='flex items-center text-green-500 pr-0 mb-3 md:mb-0 md:pr-2 col-span-1'>
                            <BiDollarCircle className='mr-1' />
                            <span>$5000.00</span>
                          </p>
                          <p className='flex items-center text-black pr-0 mb-3 md:mb-0 md:pr-2 col-span-1'>
                            <HiCash className='mr-1' />
                            <span>$5500.00</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </Link>
                  <div className='flex-shrink-0 pr-4 cursor-pointer'>
                    <DropDownMenu />
                  </div>
                </div>
              </li>
              <li className='col-span-1 flex shadow-sm rounded-md relative hover:bg-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                <div className='flex-shrink-0 flex items-center justify-center w-20 bg-gray-600 text-white text-sm font-medium rounded-l-md'>
                  INV0003
                </div>
                <div className='flex-1 flex items-center justify-between py-2 border-t border-r border-b border-gray-200  bg-white hover:bg-gray-100 rounded-r-md'>
                  <Link href='/dashboard/invoice/detail'>
                    <a className='text-gray-900 font-medium hover:text-gray-600  inline-block'>
                      <div className='flex-1 px-4 py-2 text-sm '>
                        <div className='mb-2'>Invoice Title</div>
                        <div className='space-y-3 lg:space-y-0 flex flex-col lg:flex-row lg:items-center lg:space-x-12'>
                          {/* <p className='flex items-center text-gray-500 md:self-end'>
                            <HiCalendar className='mr-1' />
                            <span>Inv001</span>
                          </p> */}
                          <p className='flex items-center text-gray-500'>
                            <BsPersonFill className='mr-1' />
                            <span>Client Name</span>
                          </p>
                          <p className='flex items-center text-gray-700'>
                            <HiCalendar className='mr-1' />
                            <span>Jun 12, 2020</span>
                          </p>
                          <p className='flex items-center text-gray-400'>
                            <HiCalendar className='mr-1' />
                            <span>Jul 12, 2020</span>
                          </p>

                          <p className='flex items-center text-red-500'>
                            <FaFileInvoiceDollar className='mr-1' />
                            <span>$500</span>
                          </p>
                          <p className='flex items-center text-green-500'>
                            <BiDollarCircle className='mr-1' />
                            <span>$5000</span>
                          </p>
                          <p className='flex items-center text-black'>
                            <HiCash className='mr-1' />
                            <span>$5500</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </Link>
                  <div className='flex-shrink-0 pr-4 cursor-pointer'>
                    <DropDownMenu />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </SideNav>
    )
  } else {
    console.log()
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

export default Invoices
