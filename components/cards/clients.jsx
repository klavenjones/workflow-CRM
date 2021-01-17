import React from 'react'
import { FaPlus, FaCalendar} from 'react-icons/fa'
import { DropDownMenu } from '../'

export default function ClientCard() {
  return (
    <div className='bg-white overflow-visible shadow rounded-lg mb-6 relative'>
      <div className='bg-white px-4 py-4 border-b border-gray-200 rounded-t-lg rounded-b-none sm:px-6'>
        <div className='-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap'>
          <div className='ml-4 mt-2'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Client
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
                          Client Title
                        </p>
                        <p className='mt-2 flex items-center text-sm text-gray-500'>
                          <FaCalendar className='mr-2 text-gray-400 space-x-1' />{' '}
                          <time className='ml-1' dateTime='2020-01-07'>
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
  )
}
