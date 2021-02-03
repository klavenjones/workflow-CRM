import React from 'react'
import { Activities as ActivityData } from '../../util/data'
import { ListComponent } from '../'

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
              {/* List Items */}
              <ListComponent data={ActivityData} listType="activity" />
              
            </ul>
          </div>
        </>
      </div>
    </div>
  )
}
