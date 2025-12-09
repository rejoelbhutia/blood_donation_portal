import React from 'react'

export default function InstructionUi({Icon, number, title, subtitle}) {
  return (
    <div>
        <div className="icon flex ">
            <Icon className=" w-5 h-5 m-3"/>
        </div>
        <div className="text flex flex-col">
            <div>
                <span className=' h-6 w-6 bg-neutral-400 text-neutral-600 mr-4'>{number}</span>
            <p className=' text-3xl font-medium'> {title}</p>
            </div>
            <p className=' text-xl'>{subtitle}</p>
        </div>
    </div>
  )
}
