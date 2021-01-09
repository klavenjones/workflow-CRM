import React from 'react'
import { Navigation, Login } from '../components'

export default function LoginPage() {
  return (
    <>
      <Navigation />
      <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            className='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Sign in to your account
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600 max-w'>
            Don't have an account?{'  '}
            <a
              href='/register'
              className='font-medium text-indigo-600 hover:text-indigo-500'
            >
              Sign up
            </a>
          </p>
        </div>
        <Login />
      </div>
    </>
  )
}
