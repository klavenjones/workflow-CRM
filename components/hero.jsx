import React from 'react'
import Link from 'next/link'
import DropDownNav from './dropdownnav'
import { useForm } from 'react-hook-form'
import { useToasts } from 'react-toast-notifications'

import firebaseClient from '../util/firebase/firebaseClient'
import firebase from 'firebase/app'
import 'firebase/auth'

export default function Hero() {
  firebaseClient()
  const [visible, setVisible] = React.useState(false)
  const { register, handleSubmit, errors } = useForm()
  const { addToast } = useToasts()

  const toggleNav = () => {
    setVisible(!visible)
  }

  const onGoogleSignIn = () => {
    let google = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(google)
      .then((result) => {
        window.location.href = '/dashboard'
      })
      .catch((error) => {
        // Handle Errors here.

        addToast(error.message, { appearance: 'error' })
      })
  }

  const onGithubSignIn = () => {
    let github = new firebase.auth.GithubAuthProvider()
    firebase
      .auth()
      .signInWithPopup(github)
      .then((result) => {
        window.location.href = '/dashboard'
      })
      .catch((error) => {
        // Handle Errors here.

        addToast(error.message, { appearance: 'error' })
      })
  }

  const onSubmit = (data) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        // Signed in

        window.location.href = '/dashboard'
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
        addToast(error.message, { appearance: 'error' })
      })
  }

  return (
    <>
      <div className='relative bg-gray-800 overflow-hidden'>
        <div
          className='hidden sm:block sm:absolute sm:inset-0'
          aria-hidden='true'
        >
          <svg
            className='absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0'
            width={364}
            height={384}
            viewBox='0 0 364 384'
            fill='none'
          >
            <defs>
              <pattern
                id='eab71dd9-9d7a-47bd-8044-256344ee00d0'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect x={0} y={0} width={4} height={4} fill='currentColor' />
              </pattern>
            </defs>
            <rect
              width={364}
              height={384}
              fill='url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)'
            />
          </svg>
        </div>
        <div className='relative pt-6 pb-16 sm:pb-24'>
          <nav
            className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
            aria-label='Global'
          >
            <div className='flex items-center flex-1'>
              <div className='flex items-center justify-between w-full md:w-auto'>
                <Link href='#'>
                  <a>
                    <span className='sr-only'>Workflow</span>
                    <img
                      className='h-8 w-auto sm:h-10'
                      src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                      alt='Logo'
                    />
                  </a>
                </Link>
                <div className='-mr-2 flex items-center md:hidden'>
                  <button
                    type='button'
                    className='bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'
                    id='main-menu'
                    aria-haspopup='true'
                    onClick={() => toggleNav()}
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
              <div className='hidden space-x-10 md:flex md:ml-auto md:mr-10'>
                <Link href='#get-started'>
                  <a className='font-medium text-white hover:text-gray-300'>
                    Get Started
                  </a>
                </Link>
                <Link href='#features'>
                  <a className='font-medium text-white hover:text-gray-300'>
                    Features
                  </a>
                </Link>
              </div>
            </div>

            <div className='hidden md:flex'>
              <Link href='/login'>
                <a className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700'>
                  Log in
                </a>
              </Link>
            </div>
          </nav>
          <DropDownNav show={visible} toggle={toggleNav} />

          <main className='mt-16 sm:mt-24'>
            <div className='mx-auto max-w-7xl'>
              <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
                <div className='px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center'>
                  <div>
                    <Link href='/register'>
                      <a className='inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200'>
                        <span className='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full'>
                          What's New
                        </span>
                        <span className='ml-4 text-sm'>
                          Just shipped version 0.1.0
                        </span>
                        {/* Heroicon name: chevron-right */}
                        <svg
                          className='ml-2 w-5 h-5 text-gray-500'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a>
                    </Link>
                    <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6  md:text-5xl lg:text-5xl xl:text-6xl'>
                      <span className='md:block'>Keep track of your</span>{' '}
                      <span className='text-indigo-400 md:block'>
                        freelance work
                      </span>
                    </h1>
                    <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-xl xl:text-2xl'>
                      Manage projects, book clients, send invoices and get paid
                      — all on Workflow CMS.
                    </p>
                    <p className='mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10'>
                      Used by
                    </p>
                    <div className='mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0'>
                      <div className='flex flex-wrap items-start justify-between'>
                        <div className='flex justify-center px-1'>
                          <img
                            className='h-9 sm:h-10'
                            src='https://tailwindui.com/img/logos/tuple-logo-gray-400.svg'
                            alt='Tuple'
                          />
                        </div>
                        <div className='flex justify-center px-1'>
                          <img
                            className='h-9 sm:h-10'
                            src='https://tailwindui.com/img/logos/workcation-logo-gray-400.svg'
                            alt='Workcation'
                          />
                        </div>
                        <div className='flex justify-center px-1'>
                          <img
                            className='h-9 sm:h-10'
                            src='https://tailwindui.com/img/logos/statickit-logo-gray-400.svg'
                            alt='StaticKit'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-16 sm:mt-24 lg:mt-0 lg:col-span-6'>
                  <div className='bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden'>
                    <div className='px-4 py-8 sm:px-10'>
                      <div>
                        <p className='text-sm font-medium text-gray-700'>
                          Sign in with
                        </p>
                        <div className='mt-1 grid grid-cols-2 gap-3'>
                          <div>
                            <button
                              onClick={() => onGoogleSignIn()}
                              className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                            >
                              <span className='sr-only'>
                                Sign in with Google
                              </span>
                              <svg
                                className='w-5 h-5'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                aria-hidden='true'
                                viewBox='0 0 488 496'
                                version='1.1'
                                xmlns='http://www.w3.org/2000/svg'
                                xmlnsXlink='http://www.w3.org/1999/xlink'
                              >
                                <title>google</title>
                                <g fillRule='evenodd'>
                                  <g id='google' fillRule='nonzero'>
                                    <path
                                      d='M488,253.8 C488,395.3 391.1,496 248,496 C110.8,496 0,385.2 0,248 C0,110.8 110.8,0 248,0 C314.8,0 371,24.5 414.3,64.9 L346.8,129.8 C258.5,44.6 94.3,108.6 94.3,248 C94.3,334.5 163.4,404.6 248,404.6 C346.2,404.6 383,334.2 388.8,297.7 L248,297.7 L248,212.4 L484.1,212.4 C486.4,225.1 488,237.3 488,253.8 Z'
                                      id='Path'
                                    />
                                  </g>
                                </g>
                              </svg>
                            </button>
                          </div>

                          <div>
                            <button
                              href='#'
                              className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                              onClick={() => onGithubSignIn()}
                            >
                              <span className='sr-only'>
                                Sign in with GitHub
                              </span>
                              <svg
                                className='w-5 h-5'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                aria-hidden='true'
                              >
                                <path
                                  fillRule='evenodd'
                                  d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                                  clipRule='evenodd'
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className='mt-6 relative'>
                        <div
                          className='absolute inset-0 flex items-center'
                          aria-hidden='true'
                        >
                          <div className='w-full border-t border-gray-300' />
                        </div>
                        <div className='relative flex justify-center text-sm'>
                          <span className='px-2 bg-white text-gray-500'>
                            Or
                          </span>
                        </div>
                      </div>
                      <div className='mt-6'>
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          className='space-y-6'
                          type='submit'
                        >
                          <div>
                            <label htmlFor='name' className='sr-only'>
                              Full name
                            </label>
                            <input
                              id='fullname'
                              name='fullname'
                              autoComplete='fullname'
                              placeholder='John Doe'
                              ref={register({ required: true })}
                              className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                errors.fullname
                                  ? 'focus:ring-red-500 focus:border-red-500 border-red-300 text-red-900 placeholder-red-300'
                                  : 'focus:ring-indigo-500 focus:border-indigo-500 border-gray-300'
                              }`}
                            />
                            {errors.fullname && (
                              <p
                                className='mt-2 text-sm text-red-600'
                                id='email-error'
                              >
                                You must enter your full name.
                              </p>
                            )}
                          </div>
                          <div>
                            <label htmlFor='email' className='sr-only'>
                              Email Address
                            </label>
                            <input
                              id='email'
                              name='email'
                              type='email'
                              ref={register({
                                required: true,
                                pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                              })}
                              autoComplete='email'
                              placeholder='johndoe@email.com'
                              className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                errors.email
                                  ? 'focus:ring-red-500 focus:border-red-500 border-red-300 text-red-900 placeholder-red-300'
                                  : 'focus:ring-indigo-500 focus:border-indigo-500 border-gray-300'
                              }`}
                            />
                            {errors.email?.type === 'required' && (
                              <p
                                className='mt-2 text-sm text-red-600'
                                id='email-error'
                              >
                                You must enter your email address.
                              </p>
                            )}
                            {errors.email?.type === 'pattern' && (
                              <p
                                className='mt-2 text-sm text-red-600'
                                id='email-error'
                              >
                                This must be a valid email address.
                              </p>
                            )}
                          </div>
                          <div>
                            <label htmlFor='password' className='sr-only'>
                              Password
                            </label>
                            <input
                              // onChange={(e) => setPassword(e.target.value)}
                              id='password'
                              name='password'
                              type='password'
                              ref={register({ required: true, minLength: 6 })}
                              placeholder='Enter your password'
                              autoComplete='current-password'
                              className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                errors.email
                                  ? 'focus:ring-red-500 focus:border-red-500 border-red-300 text-red-900 placeholder-red-300'
                                  : 'focus:ring-indigo-500 focus:border-indigo-500 border-gray-300'
                              }`}
                            />
                            {errors.password?.type === 'required' && (
                              <p
                                className='mt-2 text-sm text-red-600'
                                id='email-error'
                              >
                                You must a password.
                              </p>
                            )}
                            {errors.password?.type === 'minLength' && (
                              <p
                                className='mt-2 text-sm text-red-600'
                                id='email-error'
                              >
                                Your password must be atleast 6 characters.
                              </p>
                            )}
                          </div>
                          <div>
                            <button
                              type='submit'
                              className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            >
                              Create your account
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className='px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10'>
                      <p className='text-xs leading-5 text-gray-500'>
                        By signing up, you agree to our{' '}
                        <a
                          href='#'
                          className='font-medium text-gray-900 hover:underline'
                        >
                          Terms
                        </a>
                        ,{' '}
                        <a
                          href='#'
                          className='font-medium text-gray-900 hover:underline'
                        >
                          Data Policy
                        </a>{' '}
                        and{' '}
                        <a
                          href='#'
                          className='font-medium text-gray-900 hover:underline'
                        >
                          Cookies Policy
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
