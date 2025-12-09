import React from 'react'

export default function Card({Icon, value, label, sublabel}) {
  return (
    <div className={` card flex flex-col items-center p-6 bg-red-500 rounded-lg text-white text-center shadow-lg`}>
        <div className=' w-fit h-fit bg-red-400 p-3 rounded-full mb-4'> 
            <Icon className={" text-white"}/>
        </div>
        <p className=' text-4xl text-black mb-1'>{value}</p>
        <p className=' text-xl text-black mb-2'>{label}</p>
        <p className=' text-lg text-black'>{sublabel}</p>
    </div>
  )
}
