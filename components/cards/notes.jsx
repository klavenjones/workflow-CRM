import React from 'react'
import { FaPlus, FaCalendar } from 'react-icons/fa'
import { DropDownMenu } from '../'

export default function NoteCard() {
  const [formVisible, setVisible] = React.useState(false)

  let testData = ''

  const noteForm = (
    <div>
      <div className='my-4'>
        <textarea
          id='about'
          name='about'
          rows='5ß'
          className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md'
          placeholder='Enter notes for this project.'
          defaultValue={''}
        />
      </div>
      <div classname='my-4'>
        <div className='flex justify-end'>
          <button
            type='button'
            className='bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            onClick={() => setVisible(false)}
          >
            Cancel
          </button>
          <button
            type='submit'
            className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )

  const note = (
    <div>
      {testData && testData ? (
        <p className='text-gray-500'>{testData}</p>
      ) : (
        <p className='text-gray-300'>Add notes only visible to your company</p>
      )}
    </div>
  )

  return (
    <div className='bg-white overflow-visible shadow rounded-lg mb-6 relative'>
      <div className='bg-white px-4 py-4 border-b border-gray-200 rounded-t-lg rounded-b-none sm:px-6'>
        <div className='-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap'>
          <div className='ml-4 mt-2'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Notes
            </h3>
          </div>
          <div className='ml-4 mt-2 flex-shrink-0'>
            <button
              type='button'
              className='relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={(e) => {
                e.preventDefault()
                setVisible(true)
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className=''>
        {/* TASK Content goes here */}
        <div className='bg-white  overflow-visible sm:rounded-md'>
          <ul className='relative divide-y divide-gray-200'>
            <li>
              <a href='#' className='block hover:bg-gray-50'>
                <div className='flex items-center px-4 py-4 sm:px-6'>
                  <div className='min-w-0 flex-1 flex items-center'>
                    <div className='min-w-0 flex-1 px-2 md:grid md:grid-cols-1 md:gap-4'>
                      {formVisible ? noteForm : note}
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
