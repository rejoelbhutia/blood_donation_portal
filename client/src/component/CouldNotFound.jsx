import React from 'react'
import {Info} from 'lucide-react'

export default function CouldNotFound() {
  return (
    <div className=" min-w-full bg-yellow-50 border border-yellow-300 p-4 rounded-lg flex items-start">
      <Info className=" w-5 h-5 mr-6"/>
      <p className=" text-sm">
    Could not found your <span className=" font-semibold">donation history</span>
    </p>
  </div>
  )
}
