import React from 'react'
import { FaPlus, FaCalendar } from 'react-icons/fa'
import { DropDownMenu } from '../'

export default function EarningsCard() {
  return (
    <div className='bg-white overflow-hidden shadow sm:rounded-lg mb-6'>
      <div className='bg-white px-4 py-5 border-b border-gray-200 sm:px-6'>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>
          Earnings
        </h3>
      </div>
      <div className='px-4 py-5 sm:p-6'>
        {/* Content goes here */}
        <div className='grid grid-cols-1 gap-6 sm:gap-4 md:grid-cols-3'>
          <div>
            <h1>Outstanding</h1>
            <p className='text-red-400'>$500.00</p>
          </div>
          <div>
            <h1>Paid</h1>
            <p className='text-green-400'>$2000.00</p>
          </div>
          <div>
            <h1>Total</h1>
            <p className='text-black'> $2500.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
