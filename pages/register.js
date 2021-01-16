import React from 'react'
import Link from 'next/link'
import { useAuth } from '../context/auth'
import { Navigation, Register } from '../components'

export default function RegisterPage() {
  const { user } = useAuth()

  if (user) {
    window.location.href = '/dashboard'
  } else {
    return (
      <>
        <Navigation register />
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
          <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <img
              className='mx-auto h-12 w-auto'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
              alt='Workflow'
            />
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Sign up for free
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600 max-w'>
              Already have an account?{'  '}
              <Link href='/login'>
                <a className='font-medium text-indigo-600 hover:text-indigo-500'>
                  Login
                </a>
              </Link>
            </p>
          </div>
          <Register />
        </div>
      </>
    )
  }
}
