import React from 'react'
import {
  HiFolder,
  HiPaperClip,
  HiCalendar,
  HiCash,
  HiCalendar,
} from 'react-icons/hi'
import { BsPersonFill } from 'react-icons/bs'
import { BiDollarCircle } from 'react-icons/bi'
import { DropDownMenu } from '../'

function ClientListItem() {
  return (
    <div className='relative rounded-lg border border-gray-300 bg-white px-6 py-0 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
      {/* Client Avatar */}
      <div className='flex-shrink-0'>
        <img
          className='h-10 w-10 rounded-full'
          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          alt
        />
      </div>

      {/* Client Meta */}
      <Link href='/dashboard/client/detail'>
        <a className='flex-1 min-w-0'>
          <div>
            <a href='#' className='focus:outline-none'>
              <span className='absolute inset-0' aria-hidden='true' />
              <p className='text-sm font-medium text-gray-900'>
                Leslie Alexander
              </p>
              <p className='text-sm text-gray-500 truncate'>
                LesAlex@email.com
              </p>
            </a>
          </div>
        </a>
      </Link>

      {/* Menu */}
      <div className='h-full flex items-center'>
        <DropDownMenu />
      </div>
    </div>
  )
}

function ProjectListItem() {
  return (
    <li className='col-span-1 flex shadow-sm rounded-md relative'>
      {/* <div className='flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md'>
      GA
    </div> */}
      <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white hover:bg-gray-100 rounded-r-md truncate'>
        <div className='flex-1 px-4 py-2 text-sm truncate'>
          <div className='mb-2 sm:mb-1'>
            <a
              href='#'
              className='text-gray-900 font-medium hover:text-gray-600'
            >
              Project Title
            </a>
          </div>
          <div className='space-y-1 flex flex-col sm:flex-row'>
            <p className='flex items-center text-gray-500 mr-4'>
              <BsPersonFill className='mr-1' />
              <span>Client Name</span>
            </p>
            <p className='flex items-center text-gray-500 mr-4'>
              <HiCalendar className='mr-1' />
              <span>Jun 12, 2020</span>
            </p>
            <p className='flex items-center text-red-500 mr-4'>
              <FaFileInvoiceDollar className='mr-1' />
              <span>$500</span>
            </p>
            <p className='flex items-center text-green-500 mr-4'>
              <BiDollarCircle className='mr-1' />
              <span>$5000</span>
            </p>
          </div>
        </div>

        <div className='flex-shrink-1 pr-4'>
          <DropDownMenu />
        </div>
      </div>
    </li>
  )
}

function InvoiceListItem() {
  return (
    <li className='col-span-1 flex shadow-sm rounded-md relative hover:bg-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
      <div className='flex-shrink-0 flex items-center justify-center w-20 bg-gray-600 text-white text-sm font-medium rounded-l-md'>
        INV0001
      </div>

      <div className='flex-1 flex items-center justify-between py-2 border-t border-r border-b border-gray-200  bg-white hover:bg-gray-100 rounded-r-md'>
        <Link href='/dashboard/invoice/detail'>
          <a className='text-gray-900 font-medium hover:text-gray-600  inline-block'>
            <div className='flex-1 px-4 py-2 text-sm '>
              <div className='mb-4'>Invoice Title</div>
              <div className='flex flex-col justify-center md:grid md:grid-cols-6'>
                {/* <p className='flex items-center text-gray-500 md:self-end'>
                            <HiCalendar className='mr-1' />
                            <span>Inv001</span>
                          </p> */}
                <p className='flex items-center text-gray-500 pr-0 mb-3 md:mb-0 md:pr-4 col-span-1'>
                  <BsPersonFill className='mr-1' />
                  <span>Client Name</span>
                </p>
                <p className='flex items-center text-gray-700 pr-0 mb-3 md:mb-0 md:pr-4  col-span-1'>
                  <HiCalendar className='mr-1' />
                  <span>Jun 12, 2020</span>
                </p>
                <p className='flex items-center text-gray-400 pr-0 mb-3 md:mb-0 md:pr-4 col-span-1 '>
                  <HiCalendar className='mr-1' />
                  <span>Jul 12, 2020</span>
                </p>

                <p className='flex items-center text-red-500 pr-0 mb-3 md:mb-0 md:pr-3 col-span-1 '>
                  <FaFileInvoiceDollar className='mr-1' />
                  <span>$5000</span>
                </p>
                <p className='flex items-center text-green-500 pr-0 mb-3 md:mb-0 md:pr-3 col-span-1'>
                  <BiDollarCircle className='mr-1' />
                  <span>$5000</span>
                </p>
                <p className='flex items-center text-black pr-0 mb-3 md:mb-0 md:pr-3 col-span-1'>
                  <HiCash className='mr-1' />
                  <span>$5500</span>
                </p>
              </div>
            </div>
          </a>
        </Link>
        <div className='flex-shrink-0 pr-4 cursor-pointer'>
          <DropDownMenu />
        </div>
      </div>
    </li>
  )
}

function DocumentItem() {
  return (
    <li className='col-span-1 flex shadow-sm rounded-md relative hover:bg-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
      <div className='flex-1 flex items-center justify-between py-2 border-t border-r border-b border-gray-200 bg-white hover:bg-gray-100 rounded-r-md rounded-l-md'>
        <Link href='/dashboard/invoice/detail'>
          <a className='text-gray-900 font-medium hover:text-gray-600  inline-block'>
            <div className='flex-1 px-4 py-2 text-sm '>
              <div className='mb-2'>Proposal</div>
              <div className='space-y-3 md:space-y-0 flex flex-col md:flex-row md:items-center md:space-x-8'>
                <p className='flex items-center text-gray-400'>
                  <HiFolder className='mr-1 text-lg' />
                  <span>Website</span>
                </p>
                <p className='flex items-center text-gray-400'>
                  <BsPersonFill className='mr-1' />
                  <span>Leslie Alexander</span>
                </p>
                <p className='flex items-center text-gray-400'>
                  <HiPaperClip className='mr-1' />
                  <span>PDF</span>
                </p>
              </div>
            </div>
          </a>
        </Link>
        <div className='flex-shrink-0 pr-4 cursor-pointer'>
          <DropDownMenu />
        </div>
      </div>
    </li>
  )
}

function TaskItem() {
  return (
    <li className='col-span-1 flex shadow-sm rounded-md relative hover:bg-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
      <div className='flex-shrink-0 flex items-center justify-center w-16 bg-white text-white text-sm font-medium rounded-l-md border-t border-l border-b  border-gray-200'>
        <input
          type='checkbox'
          name='task'
          id='task'
          className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
        />
      </div>
      <div className='flex-1 flex items-center justify-between py-2 border-t border-r border-b border-gray-200 bg-white hover:bg-gray-100 rounded-r-md'>
        <Link href='/dashboard/invoice/detail'>
          <a className='text-gray-900 font-medium hover:text-gray-600  inline-block w-full'>
            <div className='flex flex-col justify-center md:pr-6 md:grid md:grid-cols-8 pt-2'>
              <div className='mb-2 items-center col-span-1'>
                <p className='text-sm font-medium'>Task Title</p>
              </div>
              <div className='flex space-x-4 mb-2 col-span-6'>
                <p className='flex items-center text-xs text-gray-400'>
                  <HiFolder className='mr-1' />
                  <span>Project Title</span>
                </p>
                <p className='flex items-center text-xs text-gray-400'>
                  <BsPersonFill className='mr-1' />
                  <span>Client</span>
                </p>
                <p className='flex items-center text-xs text-gray-400'>
                  <HiCalendar className='mr-1' />
                  <span>Feb 20, 2021</span>
                </p>
              </div>
            </div>
          </a>
        </Link>
        <div className='flex-shrink-0 pr-4 cursor-pointer'>
          <DropDownMenu />
        </div>
      </div>
    </li>
  )
}

function renderItem(itemType) {
  switch (itemType) {
    case 'client':
      return ClientListItem()
      break
    case 'invoice':
      return InvoiceListItem()
      break
    case 'project':
      return ProjectListItem()
      break
    case 'document':
      return DocumentItem()
      break
    default:
      return TaskItem()
      break
  }
}

export default function ListItem({ item }) {
  return <>{renderItem(item)}</>
}
