import React from 'react'

export default function DropDownNav({ show, toggle }) {
  return (
    <>
      {/*
Mobile menu, show/hide based on menu open state.

Entering: "duration-150 ease-out"
  From: "opacity-0 scale-95"
  To: "opacity-100 scale-100"
Leaving: "duration-100 ease-in"
  From: "opacity-100 scale-100"
  To: "opacity-0 scale-95"
    */}
      <div
        className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right ${
          show
            ? 'duration-150 ease-out opacity-100 scale-100'
            : 'duration-100 ease-in opacity-0 scale-95'
        } md:hidden`}
      >
        <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
          <div className='px-5 pt-4 flex items-center justify-between'>
            <div>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                alt='logo'
              />
            </div>
            <div className='-mr-2'>
              <button
                type='button'
                className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                onClick={() => toggle()}
              >
                <span className='sr-only'>Close menu</span>
                {/* Heroicon name: x */}
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='main-menu'
          >
            <div className='px-2 pt-2 pb-3 space-y-1' role='none'>
              <a
                href='#get-started'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                role='menuitem'
              >
                Get Started
              </a>
              <a
                href='#features'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                role='menuitem'
              >
                Features
              </a>
            </div>

            <div role='none'>
              <a
                href='/login'
                className='block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100'
                role='menuitem'
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
