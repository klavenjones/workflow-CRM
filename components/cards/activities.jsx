import React from 'react'
import { BiCheck } from 'react-icons/bi'

export default function ActivityCard() {
  return (
    <div className='bg-white overflow-hidden shadow sm:rounded-lg'>
      <div className='bg-white px-4 py-5 border-b border-gray-200 sm:px-6'>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>
          Activity
        </h3>
      </div>
      <div className='px-4 py-5 sm:p-6'>
        {/* ACTIVITY Content goes here */}
        <>
          {/* This example requires Tailwind CSS v2.0+ */}
          <div className='flow-root'>
            <ul className='-mb-8'>
              <li>
                <div className='relative pb-8'>
                  <span
                    className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
                    aria-hidden='true'
                  />
                  <div className='relative flex space-x-3'>
                    <div>
                      <span className='h-8 w-8 rounded-full bg-green-400 flex items-center justify-center ring-8 ring-white text-white'>
                        {/* Heroicon name: user */}
                        <BiCheck size='1.75em' />
                      </span>
                    </div>
                    <div className='min-w-0 flex-1 pt-1.5 flex justify-between space-x-4'>
                      <div>
                        <p className='text-sm text-gray-500'>
                          Applied to{' '}
                          <a href='#' className='font-medium text-gray-900'>
                            Front End Developer
                          </a>
                        </p>
                      </div>
                      <div className='text-right text-sm whitespace-nowrap text-gray-500'>
                        <time dateTime='2020-09-20'>Sep 20</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className='relative pb-8'>
                  <span
                    className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
                    aria-hidden='true'
                  />
                  <div className='relative flex space-x-3'>
                    <div>
                      <span className='h-8 w-8 rounded-full bg-green-400 flex items-center justify-center ring-8 ring-white text-white'>
                        {/* Heroicon name: thumb-up */}
                        <BiCheck size='1.75em' />
                      </span>
                    </div>
                    <div className='min-w-0 flex-1 pt-1.5 flex justify-between space-x-4'>
                      <div>
                        <p className='text-sm text-gray-500'>
                          Advanced to phone screening by{' '}
                          <a href='#' className='font-medium text-gray-900'>
                            Bethany Blake
                          </a>
                        </p>
                      </div>
                      <div className='text-right text-sm whitespace-nowrap text-gray-500'>
                        <time dateTime='2020-09-22'>Sep 22</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className='relative pb-8'>
                  <span
                    className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
                    aria-hidden='true'
                  />
                  <div className='relative flex space-x-3'>
                    <div>
                      <span className='h-8 w-8 rounded-full bg-green-400 flex items-center justify-center ring-8 ring-white text-white'>
                        {/* Heroicon name: check */}
                        <BiCheck size='1.75em' />
                      </span>
                    </div>
                    <div className='min-w-0 flex-1 pt-1.5 flex justify-between space-x-4'>
                      <div>
                        <p className='text-sm text-gray-500'>
                          Completed phone screening with{' '}
                          <a href='#' className='font-medium text-gray-900'>
                            Martha Gardner
                          </a>
                        </p>
                      </div>
                      <div className='text-right text-sm whitespace-nowrap text-gray-500'>
                        <time dateTime='2020-09-28'>Sep 28</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className='relative pb-8'>
                  <span
                    className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
                    aria-hidden='true'
                  />
                  <div className='relative flex space-x-3'>
                    <div>
                      <span className='h-8 w-8 rounded-full bg-green-400 flex items-center justify-center ring-8 ring-white text-white'>
                        {/* Heroicon name: thumb-up */}
                        <BiCheck size='1.75em' />
                      </span>
                    </div>
                    <div className='min-w-0 flex-1 pt-1.5 flex justify-between space-x-4'>
                      <div>
                        <p className='text-sm text-gray-500'>
                          Advanced to interview by{' '}
                          <a href='#' className='font-medium text-gray-900'>
                            Bethany Blake
                          </a>
                        </p>
                      </div>
                      <div className='text-right text-sm whitespace-nowrap text-gray-500'>
                        <time dateTime='2020-09-30'>Sep 30</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className='relative pb-8'>
                  <div className='relative flex space-x-3'>
                    <div>
                      <span className='h-8 w-8 rounded-full bg-green-400 flex items-center justify-center ring-8 ring-white text-white'>
                        {/* Heroicon name: check */}
                        <BiCheck size='1.75em' />
                      </span>
                    </div>
                    <div className='min-w-0 flex-1 pt-1.5 flex justify-between space-x-4'>
                      <div>
                        <p className='text-sm text-gray-500'>
                          Completed interview with{' '}
                          <a href='#' className='font-medium text-gray-900'>
                            Katherine Snyder
                          </a>
                        </p>
                      </div>
                      <div className='text-right text-sm whitespace-nowrap text-gray-500'>
                        <time dateTime='2020-10-04'>Oct 4</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </>
      </div>
    </div>
  )
}
