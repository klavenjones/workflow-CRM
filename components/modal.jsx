import React from 'react'
import { IoClose } from 'react-icons/io5'
import { FaChevronDown } from 'react-icons/fa'

import { Client, Projects } from '../util/data'

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
      <NewProjectForm />
    </>
  )
}

function NewProjectForm() {
  return (
    <>
      {' '}
      <div className='mt-6'>
        <label
          htmlFor='project'
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
            placeholder='Website Redesign'
          />
        </div>
      </div>
    </>
  )
}

function ExistingClientForm() {
  const [newForm, setForm] = React.useState(true)
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
          {/* Dropdown */}
          <FormDropDown
            data={Projects}
            type='+ New Project'
            handleForm={setForm}
          />
          {newForm && <NewProjectForm />}
        </div>
      </div>
    </>
  )
}
function ExistingProjectForm() {
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
          <NewProjectForm />
        </div>
      </div>
    </>
  )
}

function ClientMenu({ label, id, type }) {
  const [newForm, setForm] = React.useState(true)

  return (
    <>
      <label
        htmlFor={id}
        className='block text-gray-400 text-sm uppercase tracking-wider'
      >
        {label}
      </label>
      <div className='mt-3 relative'>
        <FormDropDown data={Client} type='+ New Client' handleForm={setForm} />
        {newForm ? (
          /* New Client Form */
          <NewClientForm />
        ) : type === 'new project' ? (
          <ExistingProjectForm />
        ) : (
          /* Existing Client Form */
          <ExistingClientForm />
        )}
      </div>
    </>
  )
}

function FormDropDown({ data, handleForm, type }) {
  const [show, setShow] = React.useState(false)
  const [selected, setSelected] = React.useState(type)
  const [value, setValue] = React.useState(type)

  React.useEffect(() => {
    handleForm(selected === type)
  }, [selected])

  return (
    <>
      <button
        type='button'
        id={type}
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
      <div
        className={`absolute mt-1 w-full rounded-md bg-white shadow-lg transition ease-in duration-100 z-10 ${
          show ? 'opacity-100 visible' : 'opacity-0 invisible'
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
            id='listbox-option-new'
            role='option'
            className={`text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white ${
              selected === `${type}` ? 'bg-indigo-100' : 'bg-white'
            }`}
          >
            <span
              data-name={`${type}`}
              onClick={(e) => {
                setValue(e.target.innerHTML)
                setSelected(e.target.getAttribute('data-name'))
                setShow(!show)
              }}
              className={`block truncate ${
                selected === `${type}` ? 'font-semibold' : 'font-normal'
              }`}
            >
              {type}
            </span>
          </li>
          {data.map((item, i) => {
            return (
              <li
                key={i}
                data-name={`${item.name}`}
                id={`listbox-option-${i}`}
                role='option'
                className={`text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white ${
                  selected === `listbox-option-${i}`
                    ? 'bg-indigo-100'
                    : 'bg-white'
                }`}
              >
                <span
                  data-name={`listbox-option-${i}`}
                  onClick={(e) => {
                    setValue(e.target.innerHTML)
                    setSelected(e.target.getAttribute('data-name'))
                    setShow(!show)
                  }}
                  className={`block truncate ${
                    selected === `listbox-option-${i}`
                      ? 'font-semibold'
                      : 'font-normal'
                  }`}
                >
                  {item.name}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

function InvoiceModal() {
  return (
    <>
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
    </>
  )
}

function ProjectModal() {
  return (
    <>
      <div>
        {/* Modal Title */}
        <div className='mx-auto flex items-center justify-center py-10 mb-10 border-b border-gray-200'>
          <h1 className='text-2xl'>Create New Project</h1>
        </div>

        {/* Modal Form */}
        <div className='mt-3 sm:mt-5 px-4 sm:p-6'>
          <ClientMenu id='client' label='Client' type='new project' />
        </div>

        <div className='mt-5 mx-auto flex items-center justify-center py-10 px-4 border-t border-gray-200 sm:mt-6 sm:p-4'>
          <button
            type='button'
            className='inline-flex justify-center w-full rounded-sm border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base text-white tracking-widest uppercase hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'
          >
            Create Project
          </button>
        </div>
      </div>
    </>
  )
}

export default function Modal({ show, type, handleModal }) {
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
              onClick={() => handleModal(false)}
              className={`absolute transform transition-all rounded-full flex justify-center items-center top-2 right-2 h-8 w-8  sm:-right-12 border-2 border-gray-400 text-gray-400 hover:text-gray-500 hover:border-gray-500 text-2xl focus:outline-none  sm:h-10 sm:w-10 ${
                show
                  ? 'sm:ease-out sm:duration-300 sm:delay-300 sm:opacity-100 sm:translate-x-0'
                  : 'sm:ease-in sm:duration-200 sm:opacity-0  sm:-translate-x-10'
              }`}
            >
              <IoClose />
            </button>
            <ProjectModal />
          </div>
        </div>
      </div>
    </>
  )
}
