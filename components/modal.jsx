import React from 'react'
import { GrClose } from 'react-icons/gr'

export default function Modal({ show, type }) {
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div
        className={`fixed inset-0 overflow-y-auto transition-all ${
          show ? 'z-30' : 'delay-700 z-0'
        }`}
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          {/*
  Background overlay, show/hide based on modal state.
  
  Entering: "ease-out duration-300"
    From: "opacity-0"
    To: "opacity-100"
  Leaving: "ease-in duration-200"
    From: "opacity-100"
    To: "opacity-0"
      */}
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
          {/*
  Modal panel, show/hide based on modal state.
  
  Entering: "ease-out duration-300"
    From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    To: "opacity-100 translate-y-0 sm:scale-100"
  Leaving: "ease-in duration-200"
    From: "opacity-100 translate-y-0 sm:scale-100"
    To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      */}
          <div
            className={`inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transform transition-all border-2 relative border-red-300 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 ${
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
              className={`absolute transform transition-all rounded-full flex justify-center items-center top-2 right-2 h-8 w-8 sm:-right-12 border-2 border-gray-400 text-gray-400 text-lg sm:h-10 sm:w-10 ${
                show
                  ? 'sm:ease-out sm:duration-300 sm:delay-300 sm:opacity-100 sm:translate-x-0'
                  : 'sm:ease-in sm:duration-200 sm:opacity-0  sm:-translate-x-10'
              }`}
            >
              <GrClose className='text-gray-400' />
            </button>
            <div>
              <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100'>
                {/* Heroicon name: check */}
                <svg
                  className='h-6 w-6 text-green-600'
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
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </div>
              <div className='mt-3 text-center sm:mt-5'>
                <h3
                  className='text-lg leading-6 font-medium text-gray-900'
                  id='modal-headline'
                >
                  Payment successful
                </h3>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur amet labore.
                  </p>
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
