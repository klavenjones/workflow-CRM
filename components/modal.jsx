import React from 'react'
import { IoClose } from 'react-icons/io5'
import { FaChevronDown, FaCheck } from 'react-icons/fa'

import { Client } from '../util/data'

function NewClientForm() {
  return (
    <>
      {' '}
      <div className='mt-6'>
        <label
          htmlFor='name'
          className='block text-gray-400 text-sm uppercase tracking-wider'
        >
          Client Name
        </label>
        <div className='mt-3'>
          <input
            type='text'
            name='name'
            id='name'
            className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
            placeholder='Jane Smith'
          />
        </div>
      </div>
      <div className='mt-6'>
        <label
          htmlFor='email'
          className='block text-gray-400 text-sm uppercase tracking-wider'
        >
          Client Email
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
      <div className='mt-6'>
        <label
          htmlFor='email'
          className='block text-gray-400 text-sm uppercase tracking-wider'
        >
          New Project Name
        </label>
        <div className='mt-3'>
          <input
            type='text'
            name='project'
            id='project'
            className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
            placeholder='New Project Name'
          />
        </div>
      </div>
    </>
  )
}

function ExistingClientForm() {
  const [show, setShow] = React.useState(false)
  const [selected, setSelected] = React.useState('+ New Client')
  const [newForm, setForm] = React.useState(false)
  const [value, setValue] = React.useState('+ New Client')

  return (
    <>
      {' '}
      <div className='mt-6'>
        <label
          htmlFor='name'
          className='block text-gray-400 text-sm uppercase tracking-wider'
        >
          Project
        </label>
        <div className='mt-3'>
          <button
            type='button'
            onClick={() => setShow(!show)}
            aria-haspopup='listbox'
            aria-expanded='true'
            aria-labelledby='listbox-label'
            className='bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          >
            <span className='block truncate'>+ New Project</span>
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
              <FaChevronDown
                className={`text-gray-400 transition-all ease-in duration-100 transform ${
                  show ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </span>
          </button>
           {/* Dropdown */}
        <div
          className={`absolute mt-1 w-full rounded-md bg-white shadow-lg transition ease-in duration-100 ${
            show ? 'opacity-100' : 'opacity-0 -z-10'
          }`}
        >
          <ul
            tabIndex={-1}
            role='listbox'
            aria-labelledby='listbox-label'
            aria-activedescendant='listbox-item-3'
            className='max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'
          >
            <li
              id='listbox-option-0'
              role='option'
              className={`text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white ${
                selected === '+ New Client' ? 'bg-indigo-100' : 'bg-white'
              }`}
            >
              <span
                data-name='+ New Client'
                onClick={(e) => {
                  setValue(e.target.innerHTML)
                  setSelected(e.target.getAttribute('data-name'))
                  setShow(!show)
                }}
                className={`block truncate ${
                  selected === '+ New Client' ? 'font-semibold' : 'font-normal'
                }`}
              >
                + New Client
              </span>
            </li>
            </ul>
            </div>
        </div>
      </div>
    </>
  )
}

function ClientMenu({ label, id }) {
  const [show, setShow] = React.useState(false)
  const [selected, setSelected] = React.useState('+ New Client')
  const [newForm, setForm] = React.useState(false)
  const [value, setValue] = React.useState('+ New Client')

  return (
    <>
      <label
        htmlFor={id}
        className='block text-gray-400 text-sm uppercase tracking-wider'
      >
        {label}
      </label>
      <div className='mt-3 relative'>
        <button
          type='button'
          id={id}
          onClick={() => setShow(!show)}
          aria-haspopup='listbox'
          aria-expanded='true'
          aria-labelledby='listbox-label'
          className='bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        >
          <span className='block truncate'>{value}</span>
          <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
            <FaChevronDown
              className={`text-gray-400 transition-all ease-in duration-100 transform ${
                show ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </span>
        </button>
        {/* Dropdown */}
        <div
          className={`absolute mt-1 w-full rounded-md bg-white shadow-lg transition ease-in duration-100 ${
            show ? 'opacity-100' : 'opacity-0 -z-10'
          }`}
        >
          <ul
            tabIndex={-1}
            role='listbox'
            aria-labelledby='listbox-label'
            aria-activedescendant='listbox-item-3'
            className='max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'
          >
            <li
              id='listbox-option-0'
              role='option'
              className={`text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white ${
                selected === '+ New Client' ? 'bg-indigo-100' : 'bg-white'
              }`}
            >
              <span
                data-name='+ New Client'
                onClick={(e) => {
                  setValue(e.target.innerHTML)
                  setSelected(e.target.getAttribute('data-name'))
                  setShow(!show)
                }}
                className={`block truncate ${
                  selected === '+ New Client' ? 'font-semibold' : 'font-normal'
                }`}
              >
                + New Client
              </span>
            </li>
            {Client.map((item, i) => {
              return (
                <li
                  id='listbox-option-1'
                  role='option'
                  className={`text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white ${
                    selected === `${item.firstname} ${item.lastname}`
                      ? 'bg-indigo-100'
                      : 'bg-white'
                  }`}
                >
                  <span
                    data-name={`${item.firstname} ${item.lastname}`}
                    onClick={(e) => {
                      setValue(e.target.innerHTML)
                      setSelected(e.target.getAttribute('data-name'))
                      setShow(!show)
                    }}
                    className={`block truncate ${
                      selected === `${item.firstname} ${item.lastname}`
                        ? 'font-semibold'
                        : 'font-normal'
                    }`}
                  >
                    {`${item.firstname} ${item.lastname}`}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        {selected === '+ New Client' ? (
          /* New Client Form */
          <NewClientForm />
        ) : (
          /* Existing Client Form */
          <ExistingClientForm />
        )}
      </div>
    </>
  )
}

export default function Modal({ show, type }) {
  return (
    <>
      <div
        className={`fixed inset-0 overflow-y-auto transition-all z-40 ${
          show ? 'visible' : 'invisible'
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
            className={`inline-block align-bottom bg-white rounded-lg w-full  pt-5 pb-4 text-left shadow-xl transform transition-all relative sm:my-8 sm:align-middle sm:max-w-lg sm:w-full  ${
              show
                ? 'ease-out duration-300 opacity-100 translate-y-0 sm:translate-y-0 sm:scale-100'
                : 'ease-in duration-200 opacity-0 translate-y-40 sm:translate-y-20 sm:scale-95'
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
              {/* Modal Title */}
              <div className='mx-auto flex items-center justify-center py-10 mb-10 border-b border-gray-200'>
                <h1 className='text-2xl'>Create New Invoice</h1>
              </div>
              {/* Modal Form */}
              <div className='mt-3 sm:mt-5 px-4 sm:p-6'>
                <ClientMenu id='client' label='Client' />
              </div>

              <div className='mt-5 mx-auto flex items-center justify-center py-10 px-4 border-t border-gray-200 sm:mt-6 sm:p-4'>
                <button
                  type='button'
                  className='inline-flex justify-center w-full rounded-sm border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base text-white tracking-widest uppercase hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'
                >
                  Create Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
