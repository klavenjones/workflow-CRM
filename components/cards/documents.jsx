import React from 'react'

export default function DocumentCard() {
  return (
    <div className='bg-white overflow-hidden shadow sm:rounded-lg mb-6'>
      <div className='bg-white px-4 py-5 border-b border-gray-200 sm:px-6'>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>
          Documents
        </h3>
      </div>
      <div className='px-4 py-5 sm:p-6'>
        {/* Content goes here */}
        <div className='grid grid-cols-1 gap-6 space-y-2'>
          <div>
            <h1 className='text-gray-500'>Contract</h1>
            <p className='text-bold text-indigo-600'>Add Proposal</p>
          </div>
          <div>
            <h1 className='text-gray-500'>Proposal</h1>
            <p className='text-bold text-indigo-600'>Proposal Title</p>
          </div>
        </div>
      </div>
    </div>
  )
}
