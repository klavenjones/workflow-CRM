import React from 'react'
import Link from 'next/link'
import nookies from 'nookies'
import firebaseClient from '../util/firebase/firebaseClient'
import firebase from 'firebase/app'

export default function SideNav({ children, page, pageTitle }) {
  firebaseClient()
  const [show, setShow] = React.useState(false)

  return (
    <>
      <div className='h-screen flex overflow-hidden bg-gray-100'>
        {/* Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}
        <div className='lg:hidden'>
          <div
            className={`fixed inset-0 flex transition-all delay-400 ease-linear duration-300 ${
              show ? 'z-30' : 'z-0'
            }`}
          >
            <div className='fixed inset-0'>
              <div
                className={`absolute inset-0 bg-gray-600 transition-opacity  ease-linear duration-300  ${
                  show ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
            <div
              className={`relative flex-1 flex flex-col max-w-xs w-full bg-gray-800 ${
                show
                  ? 'transition ease-in-out duration-300 transform translate-x-0'
                  : 'transition ease-in-out duration-300 transform -translate-x-full'
              }`}
            >
              <div className='absolute top-0 right-0 -mr-12 pt-2'>
                <button
                  className={`ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${
                    show ? 'block' : 'hidden'
                  }`}
                  onClick={() => setShow(!show)}
                >
                  <span className='sr-only'>Close sidebar</span>
                  {/* Heroicon name: x */}
                  <svg
                    className='h-6 w-6 text-white'
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
              <div className='flex-1 h-0 pt-5 pb-4 overflow-y-auto'>
                <div className='flex-shrink-0 flex items-center px-4'>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                    alt='Workflow'
                  />
                </div>
                <nav className='mt-5 flex-1 flex-col divide-y divide-gray-900 overflow-y-auto'>
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <div className='px-2 space-y-1'>
                    <Link href='/dashboard'>
                      <a
                        className={`${
                          page === 'dashboard'
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                      >
                        {/* Current: "text-gray-300", Default: "text-gray-400 group-hover:text-gray-300" */}
                        {/* Heroicon name: home */}
                        <svg
                          className='text-gray-300 mr-4 h-6 w-6'
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
                            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                          />
                        </svg>
                        Dashboard
                      </a>
                    </Link>
                    <Link href='/dashboard/clients'>
                      <a
                        className={`${
                          page === 'clients'
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                      >
                        {/* Heroicon name: users */}
                        <svg
                          className='text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6'
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
                            d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                          />
                        </svg>
                        Clients
                      </a>
                    </Link>
                    <Link href='/dashboard/projects'>
                      <a
                        className={`${
                          page === 'projects'
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                      >
                        {/* Heroicon name: folder */}
                        <svg
                          className='text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6'
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
                            d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                          />
                        </svg>
                        Projects
                      </a>
                    </Link>
                    <Link href='/dashboard/invoices'>
                      <a
                        className={`${
                          page === 'invoices'
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                      >
                        {/* Heroicon name: calendar */}
                        <svg
                          className='text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6'
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
                            d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                          />
                        </svg>
                        Invoices
                      </a>
                    </Link>
                    <Link href='/dashboard/documents'>
                      <a
                        className={`${
                          page === 'documents'
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                      >
                        {/* Heroicon name: inbox */}
                        <svg
                          className='text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6'
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
                            d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
                          />
                        </svg>
                        Documents
                      </a>
                    </Link>
                    <Link href='/dashboard/tasks'>
                      <a
                        className={`${
                          page === 'tasks'
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                      >
                        {/* Heroicon name: chart-bar */}
                        <svg
                          className='text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6'
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
                            d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                          />
                        </svg>
                        Tasks
                      </a>
                    </Link>
                  </div>
                  <div className='mt-6 pt-6'>
                    <div className='px-2 space-y-1'>
                      <Link href='/dashboard/settings'>
                        <a
                          className={`${
                            page === 'settings'
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                          } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                        >
                          {/* Heroicon name: cog */}
                          <svg
                            className='text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6'
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
                              d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                            />
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                            />
                          </svg>
                          Settings
                        </a>
                      </Link>
                      <Link href='#'>
                        <a
                          onClick={async () => {
                            firebase.auth().signOut()
                            nookies.destroy(undefined, 'token')
                            window.location.href = '/'
                          }}
                          className={`text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                        >
                          {/* Heroicon name: Power Off */}
                          <svg
                            className='text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            stroke='currentColor'
                            aria-hidden='true'
                            viewBox='0 0 496 504'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                          >
                            <title>power-off</title>
                            <g
                              id='Page-1'
                              stroke='none'
                              strokeWidth={1}
                              fill='none'
                              fillRule='evenodd'
                            >
                              <g
                                id='power-off'
                                fill='currentColor'
                                fillRule='nonzero'
                              >
                                <path
                                  d='M392,54.1 C455,99.1 496,172.7 496,256 C496,392.8 385.2,503.7 248.5,504.000605 C112,504.3 0.2,393 -0.000182516335,256.4 C-0.1,173.1 40.9,99.3 103.8,54.2 C115.5,45.9 131.8,49.4 138.8,61.9 L154.6,90 C160.5,100.5 157.7,113.8 148,121 C106.5,151.8 80,200.6 80,255.9 C79.9,348.2 154.5,424 248,424 C339.6,424 416.6,349.8 416,254.9 C415.7,203.1 391.3,153.1 347.9,120.9 C338.2,113.7 335.5,100.4 341.4,90 L357.2,61.9 C364.2,49.5 380.4,45.8 392,54.1 Z M288,264 L288,24 C288,10.7 277.3,0 264,0 L232,0 C218.7,0 208,10.7 208,24 L208,264 C208,277.3 218.7,288 232,288 L264,288 C277.3,288 288,277.3 288,264 Z'
                                  id='Shape'
                                />
                              </g>
                            </g>
                          </svg>
                          Log out
                        </a>
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
              {/* <div className='flex-shrink-0 flex bg-gray-700 p-4'>
                <Link><a href='#' className='flex-shrink-0 group block'>
                  <div className='flex items-center'>
                    <div>
                      <img
                        className='inline-block h-10 w-10 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt='Logo'
                      />
                    </div>
                    <div className='ml-3'>
                      <p className='text-base font-medium text-white'>
                        Tom Cook
                      </p>
                      <p className='text-sm font-medium text-gray-400 group-hover:text-gray-300'>
                        View profile
                      </p>
                    </div>
                  </div>
                </a></Link>
              </div> */}
            </div>
            <div className='flex-shrink-0 w-14'>
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </div>

        {/* Static sidebar for desktop */}
        <div className='hidden lg:flex lg:flex-shrink-0 relative z-20'>
          <div className='flex flex-col w-64'>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className='flex flex-col h-0 flex-1 bg-gray-800'>
              <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
                <div className='flex items-center flex-shrink-0 px-4'>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                    alt='Workflow'
                  />
                </div>
                <nav className='mt-5 flex-1 flex-col divide-y divide-gray-900 overflow-y-auto'>
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <div className='px-2 space-y-1'>
                    <Link href='/dashboard'>
                      <a
                        className={`${
                          page === 'dashboard'
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                      >
                        {/* Current: "text-gray-300", Default: "text-gray-400 group-hover:text-gray-300" */}
                        {/* Heroicon name: home */}
                        <svg
                          className='text-gray-300 mr-3 h-6 w-6'
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
                            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                          />
                        </svg>
                        Dashboard
                      </a>
                    </Link>
                    <Link href='/dashboard/clients'>
                      <a
                        className={`${
                          page === 'clients'
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                      >
                        {/* Heroicon name: users */}
                        <svg
                          className='text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6'
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
                            d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                          />
                        </svg>
                        Clients
                      </a>
                    </Link>
                    <Link href='/dashboard/projects'>
                      <a
                        className={`${
                          page === 'projects'
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                      >
                        {/* Heroicon name: folder */}
                        <svg
                          className='text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6'
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
                            d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                          />
                        </svg>
                        Projects
                      </a>
                    </Link>
                    <Link href='/dashboard/invoices'>
                      <a
                        className={`${
                          page === 'invoices'
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                      >
                        {/* Heroicon name: calendar */}
                        <svg
                          className='text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6'
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
                            d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                          />
                        </svg>
                        Invoices
                      </a>
                    </Link>
                    <Link href='/dashboard/documents'>
                      <a
                        className={`${
                          page === 'documents'
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                      >
                        {/* Heroicon name: inbox */}
                        <svg
                          className='text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6'
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
                            d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
                          />
                        </svg>
                        Documents
                      </a>
                    </Link>
                    <Link href='/dashboard/tasks'>
                      <a
                        className={`${
                          page === 'tasks'
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                      >
                        {/* Heroicon name: chart-bar */}
                        <svg
                          className='text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6'
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
                            d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                          />
                        </svg>
                        Tasks
                      </a>
                    </Link>
                  </div>
                  <div className='mt-2 pt-2'>
                    <div className='px-2 space-y-1'>
                      <Link href='/dashboard/settings'>
                        <a
                          className={`${
                            page === 'settings'
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                          } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                        >
                          {/* Heroicon name: cog */}
                          <svg
                            className='text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6'
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
                              d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                            />
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                            />
                          </svg>
                          Settings
                        </a>
                      </Link>
                      <Link href='/'>
                        <a
                          onClick={async () => {
                            firebase.auth().signOut()
                            nookies.destroy(undefined, 'token')
                            window.location.href = '/'
                          }}
                          className={`text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                        >
                          {/* Heroicon name: Power Off */}
                          <svg
                            className='text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            stroke='currentColor'
                            aria-hidden='true'
                            viewBox='0 0 24 25'
                            version='1.1'
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                          >
                            <title>power-off</title>
                            <g
                              id='Page-1'
                              stroke='none'
                              strokeWidth={1}
                              fill='none'
                              fillRule='evenodd'
                            >
                              <g
                                id='power-off'
                                fill='currentColor'
                                fillRule='nonzero'
                              >
                                <path
                                  d='M18.9677419,2.61774194 C22.016129,4.79516129 23.9999912,8.35645161 23.9999912,12.3870968 C23.9999912,19.0064516 18.6387097,24.3725806 12.0241935,24.3871261 C5.41935484,24.4016129 0.00967741935,19.016129 -8.83143559e-06,12.4064516 C-0.00483870968,8.37580645 1.97903226,4.80483871 5.02258065,2.62258065 C5.58870968,2.22096774 6.37741935,2.39032258 6.71612903,2.99516129 L7.48064516,4.35483871 C7.76612903,4.86290323 7.63064516,5.50645161 7.16129032,5.85483871 C5.15322581,7.34516129 3.87096774,9.70645161 3.87096774,12.3822581 C3.86612903,16.8483871 7.47580645,20.516129 11.9999912,20.516129 C16.4322581,20.516129 20.1580645,16.9258065 20.1290323,12.333871 C20.1145161,9.82741935 18.933871,7.40806452 16.833871,5.85 C16.3645161,5.5016129 16.233871,4.85806452 16.5193548,4.35483871 L17.283871,2.99516129 C17.6225806,2.39516129 18.4064516,2.21612903 18.9677419,2.61774194 Z M13.9354839,12.7741935 L13.9354839,1.16129032 C13.9354839,0.517741935 13.4177419,0 12.7741935,0 L11.2258065,0 C10.5822581,0 10.0645161,0.517741935 10.0645161,1.16129032 L10.0645161,12.7741935 C10.0645161,13.4177419 10.5822581,13.9354839 11.2258065,13.9354839 L12.7741935,13.9354839 C13.4177419,13.9354839 13.9354839,13.4177419 13.9354839,12.7741935 Z'
                                  id='Shape'
                                />
                              </g>
                            </g>
                          </svg>
                          Log out
                        </a>
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>

              {/* <div className='flex-shrink-0 flex bg-gray-700 p-4'>
                <Link><a href='dashboard/clients' className='flex-shrink-0 w-full group block'>
                  <div className='flex items-center'>
                    <div>
                      <img
                        className='inline-block h-9 w-9 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt='Profile Picture'
                      />
                    </div>
                    <div className='ml-3'>
                      <p className='text-sm font-medium text-white'>Tom Cook</p>
                      <p className='text-xs font-medium text-gray-300 group-hover:text-gray-200'>
                        View profile
                      </p>
                    </div>
                  </div>
                </a></Link>
              </div> */}
            </div>
          </div>
        </div>

        <div className='flex flex-col w-0 flex-1 overflow-hidden'>
          <div
            className={`lg:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 ${
              show ? 'z-0' : 'z-30'
            }`}
          >
            <button
              className={`-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
              onClick={() => setShow(!show)}
            >
              <span className='sr-only'>Open sidebar</span>
              {/* Heroicon name: menu */}
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
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
          <main
            className={`flex-1 relative overflow-y-auto z-0 focus:outline-none`}
            tabIndex={0}
          >
            <div className='py-6'>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h1 className='text-2xl font-semibold text-gray-900'>
                  {pageTitle}
                </h1>
              </div>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
                {/* Replace with your content */}
                {children}
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
