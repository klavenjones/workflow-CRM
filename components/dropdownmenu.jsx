import React from 'react'
import { FaChevronDown } from 'react-icons/fa'


export default function DropdownMenu() {
  const [showMenu, setShow] = React.useState(false)
  return (
    <>
      {/* Drop Down Menu*/}
      <FaChevronDown
        className={`text-gray-400 transition-all ease-out duration-100 transform ${
          showMenu ? '-rotate-180' : 'rotate-0'
        }`}
        onClick={() => setShow(!showMenu)}
      />
      <div
        className={`origin-top-right absolute right-10 md:right-12 top-8 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transform ${
          showMenu
            ? 'transition ease-out duration-100 opacity-1 scale-100'
            : 'transition ease-in duration-75 opacity-0 scale-95'
        } `}
      >
        <div
          className='py-1'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'
        >
          <a
            href='#'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            role='menuitem'
          >
            Account settings
          </a>
          <a
            href='#'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            role='menuitem'
          >
            Support
          </a>
          <a
            href='#'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            role='menuitem'
          >
            License
          </a>
          <form method='POST' action='#'>
            <button
              type='submit'
              className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
              role='menuitem'
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
