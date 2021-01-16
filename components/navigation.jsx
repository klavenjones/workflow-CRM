import React from 'react'
import Link from 'next/link'

export default function Navigation({ register }) {
  const renderNavButton = register ? (
    <Link href='/login'>
      <a className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
        Log In
      </a>
    </Link>
  ) : (
    <Link href='/register'>
      <a className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
        Sign up
      </a>
    </Link>
  )

  return (
    <>
      <div className='relative bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <Link href='/'>
                <a>
                  <span className='sr-only'>Workflow</span>
                  <img
                    className='h-8 w-auto sm:h-10'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt='Logo'
                  />
                </a>
              </Link>
            </div>

            <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
              {renderNavButton}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
