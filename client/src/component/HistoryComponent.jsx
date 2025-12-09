import React from 'react';
import { Droplet, CircleCheck } from 'lucide-react';

export default function HistoryComponent({ place, date, cause, unitDontated }) {
  return (
    <div className='rounded-lg border-b border-gray-300 flex justify-between items-center p-6 my-4 lg:p-8 md:flex-row flex-col'>
      <div className='flex md:flex-row flex-col gap-x-4 gap-y-4 md:gap-y-0'>
        {/* Icon */}
        <div className='w-12 h-12 rounded-full flex items-center justify-center bg-red-100'>
          <Droplet className='w-6 h-6 text-red-600' />
        </div>

        {/* Details */}
        <div className='flex flex-col'>
          <p className='font-semibold text-xl text-gray-800'>{place}</p>
          <p className='font-light text-lg text-gray-600'>{date}</p>
          <p className='font-light text-lg text-gray-600 mt-1'>{cause}</p>
          <p className='font-medium text-lg text-gray-700 mt-1'>Unit Donated: {unitDontated}</p>
        </div>
      </div>

      {/* Status Badge */}
      <div className='flex items-center bg-green-100 text-green-700 rounded-full px-3 py-1 md:ml-6 mt-4 md:mt-0'>
        <CircleCheck className='w-5 h-5' />
        <p className='text-sm ml-2'>Completed</p>
      </div>
    </div>
  );
}
