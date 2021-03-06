import React, { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import firebaseClient from '../util/firebase/firebaseClient'
import firebase from 'firebase/app'
import 'firebase/auth'
import { useToasts } from 'react-toast-notifications'

export default function Register() {
  firebaseClient()

  const { register, handleSubmit, errors } = useForm()
  const { addToast } = useToasts()

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
        addToast(error.message, { appearance: 'error' })
      })
  }

  return (
    <>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form
            className='space-y-6'
            onSubmit={handleSubmit(onSubmit)}
            type='submit'
          >
            <div>
              <label
                htmlFor='fullname'
                className='block text-sm font-medium text-gray-700'
              >
                Full Name
              </label>
              <div className='mt-1'>
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
                  <p className='mt-2 text-sm text-red-600' id='email-error'>
                    You must enter your full name.
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email address
              </label>
              <div className='mt-1'>
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
                  <p className='mt-2 text-sm text-red-600' id='email-error'>
                    You must enter your email address.
                  </p>
                )}
                {errors.email?.type === 'pattern' && (
                  <p className='mt-2 text-sm text-red-600' id='email-error'>
                    This must be a valid email address.
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <div className='mt-1'>
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
                  <p className='mt-2 text-sm text-red-600' id='email-error'>
                    You must a password.
                  </p>
                )}
                {errors.password?.type === 'minLength' && (
                  <p className='mt-2 text-sm text-red-600' id='email-error'>
                    Your password must be atleast 6 characters.
                  </p>
                )}
              </div>
            </div>

            <div>
              <button className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                Get Started
              </button>
            </div>
          </form>
          <div className='mt-6'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300' />
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-white text-gray-500'>
                  Or continue with
                </span>
              </div>
            </div>
            <div className='mt-6 grid grid-cols-2 gap-3'>
              <div>
                <button
                  onClick={() => onGoogleSignIn()}
                  className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                >
                  <span className='sr-only'>Sign in with Google</span>
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
                  <span className='sr-only'>Sign in with GitHub</span>
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
        </div>
      </div>
    </>
  )
}
