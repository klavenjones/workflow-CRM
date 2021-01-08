import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Hello world */}
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className='bg-gray-50'>
        <div className='relative overflow-hidden'>
          <div className='absolute inset-y-0 h-full w-full' aria-hidden='true'>
            <div className='relative h-full'>
              <svg
                className='absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full'
                width={404}
                height={784}
                fill='none'
                viewBox='0 0 404 784'
              >
                <defs>
                  <pattern
                    id='e229dbec-10e9-49ee-8ec3-0286ca089edf'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={784}
                  fill='url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)'
                />
              </svg>
              <svg
                className='absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4'
                width={404}
                height={784}
                fill='none'
                viewBox='0 0 404 784'
              >
                <defs>
                  <pattern
                    id='d2a68204-c383-44b1-b99f-42ccff4e5365'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={784}
                  fill='url(#d2a68204-c383-44b1-b99f-42ccff4e5365)'
                />
              </svg>
            </div>
          </div>
          <div className='relative pt-6 pb-16 sm:pb-24'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
              <nav
                className='relative flex items-center justify-between sm:h-10 md:justify-center'
                aria-label='Global'
              >
                <div className='flex items-center flex-1 md:absolute md:inset-y-0 md:left-0'>
                  <div className='flex items-center justify-between w-full md:w-auto'>
                    <a href='#'>
                      <span className='sr-only'>Workflow</span>
                      <img
                        className='h-8 w-auto sm:h-10'
                        src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                        alt
                      />
                    </a>
                    <div className='-mr-2 flex items-center md:hidden'>
                      <button
                        type='button'
                        className='bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                        id='main-menu'
                        aria-haspopup='true'
                      >
                        <span className='sr-only'>Open main menu</span>
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
                  </div>
                </div>
                <div className='hidden md:flex md:space-x-10'>
                  <a
                    href='#'
                    className='font-medium text-gray-500 hover:text-gray-900'
                  >
                    Product
                  </a>
                  <a
                    href='#'
                    className='font-medium text-gray-500 hover:text-gray-900'
                  >
                    Features
                  </a>
                  <a
                    href='#'
                    className='font-medium text-gray-500 hover:text-gray-900'
                  >
                    Marketplace
                  </a>
                  <a
                    href='#'
                    className='font-medium text-gray-500 hover:text-gray-900'
                  >
                    Company
                  </a>
                </div>
                <div className='hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0'>
                  <span className='inline-flex rounded-md shadow'>
                    <a
                      href='#'
                      className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500'
                    >
                      Log in
                    </a>
                  </span>
                </div>
              </nav>
            </div>
            {/*
  Mobile menu, show/hide based on menu open state.

  Entering: "duration-150 ease-out"
    From: "opacity-0 scale-95"
    To: "opacity-100 scale-100"
  Leaving: "duration-100 ease-in"
    From: "opacity-100 scale-100"
    To: "opacity-0 scale-95"
*/}
            <div className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
              <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                <div className='px-5 pt-4 flex items-center justify-between'>
                  <div>
                    <img
                      className='h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                      alt
                    />
                  </div>
                  <div className='-mr-2'>
                    <button
                      type='button'
                      className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                    >
                      <span className='sr-only'>Close main menu</span>
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
                      href='#'
                      className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      role='menuitem'
                    >
                      Product
                    </a>
                    <a
                      href='#'
                      className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      role='menuitem'
                    >
                      Features
                    </a>
                    <a
                      href='#'
                      className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      role='menuitem'
                    >
                      Marketplace
                    </a>
                    <a
                      href='#'
                      className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      role='menuitem'
                    >
                      Company
                    </a>
                  </div>
                  <div role='none'>
                    <a
                      href='#'
                      className='block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700'
                      role='menuitem'
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6'>
              <div className='text-center'>
                <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                  <span className='block'>Data to enrich your</span>
                  <span className='block text-indigo-600'>online business</span>
                </h1>
                <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className='relative'>
            <div className='absolute inset-0 flex flex-col' aria-hidden='true'>
              <div className='flex-1' />
              <div className='flex-1 w-full bg-gray-800' />
            </div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
              <img
                className='relative rounded-lg shadow-lg'
                src='https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg'
                alt='App screenshot'
              />
            </div>
          </div>
        </div>
        <div className='bg-gray-800'>
          <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
            <h2 className='text-center text-gray-400 text-sm font-semibold uppercase tracking-wide'>
              Trusted by over 26,000 forward-thinking companies
            </h2>
            <div className='mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
              <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                <img
                  className='h-12'
                  src='https://tailwindui.com/img/logos/tuple-logo-gray-400.svg'
                  alt='Tuple'
                />
              </div>
              <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                <img
                  className='h-12'
                  src='https://tailwindui.com/img/logos/mirage-logo-gray-400.svg'
                  alt='Mirage'
                />
              </div>
              <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                <img
                  className='h-12'
                  src='https://tailwindui.com/img/logos/statickit-logo-gray-400.svg'
                  alt='StaticKit'
                />
              </div>
              <div className='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
                <img
                  className='h-12'
                  src='https://tailwindui.com/img/logos/transistor-logo-gray-400.svg'
                  alt='Transistor'
                />
              </div>
              <div className='col-span-2 flex justify-center md:col-span-3 lg:col-span-1'>
                <img
                  className='h-12'
                  src='https://tailwindui.com/img/logos/workcation-logo-gray-400.svg'
                  alt='Workcation'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
