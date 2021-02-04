import React from 'react'
import { IoClose } from 'react-icons/io5'

export default function Modal({ show, type }) {
  return (
    <>
      <div
        className={`fixed inset-0 overflow-y-auto transition-all  ${
          show ? 'z-40' : 'delay-700 z-0'
        }`}
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <div
            className={`fixed inset-0 transition-opacity  ${
              show
                ? 'ease-out duration-300 opacity-100'
                : 'ease-in duration-200 opacity-0'
            }`}
            aria-hidden='true'
          >
            <div className='absolute inset-0 bg-gray-200 opacity-95' />
          </div>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            ​
          </span>
          <div
            className={`inline-block align-bottom bg-white rounded-lg w-full px-4 pt-5 pb-4 text-left shadow-xl transform transition-all relative sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 ${
              show
                ? 'ease-out duration-300 opacity-100 -translate-y-40 sm:-translate-y-20 sm:scale-100'
                : 'ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            }`}
            role='dialog'
            aria-modal='true'
            aria-labelledby='modal-headline'
          >
            {/* CLOSE BUTTON */}
            <button
              className={`absolute transform transition-all rounded-full flex justify-center items-center top-2 right-2 h-8 w-8  sm:-right-12 border-2 border-gray-400 text-gray-400 hover:text-gray-500 hover:border-gray-500 text-2xl focus:outline-none  sm:h-10 sm:w-10 ${
                show
                  ? 'sm:ease-out sm:duration-300 sm:delay-300 sm:opacity-100 sm:translate-x-0'
                  : 'sm:ease-in sm:duration-200 sm:opacity-0  sm:-translate-x-10'
              }`}
            >
              <IoClose />
            </button>
            <div>
              <div className='mx-auto flex items-center justify-center py-10 w-100'>
                <h1 className='text-2xl'>Create New Invoice</h1>
              </div>
              <div className='mt-3 sm:mt-5'>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm text-gray-400 text-lg uppercase'
                  >
                    Email
                  </label>
                  <div className='mt-3'>
                    <input
                      type='text'
                      name='email'
                      id='email'
                      className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                      placeholder='you@example.com'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-5 sm:mt-6'>
              <button
                type='button'
                className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'
              >
                Go back to dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
