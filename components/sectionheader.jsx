import React from 'react'

React.PropTypes = {
  title: String,
}

export default function SectionHeader({ title }) {
  return (
    <div className='pb-5 mb-10 border-b border-gray-200 sm:flex sm:items-center sm:justify-between'>
      <h3 className='text-2xl leading-6 font-xl text-gray-900'>{title}</h3>
    </div>
  )
}
