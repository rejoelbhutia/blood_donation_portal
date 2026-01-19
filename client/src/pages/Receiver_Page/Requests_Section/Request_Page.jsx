import RecipientReqCard from "../../../component/RecepientReqCard";
import { CircleAlert } from 'lucide-react'
import React from 'react'

export default function Request_Page() {
  return (
    <>
     <div className="bg-blue-50 from-red-50 to-orange-50 p-4 md:p-6 rounded-xl border border-red-100 mb-8 ">
          <div className="flex flex-col md:flex-row md:items-center justify-between ">
            <div className=" flex flex-col">
                <div className=" flex flex-row">
                    <CircleAlert className=" text-blue-400"/>
                
              <h2 className="text-lg font-semibold text-gray-800 mb-1 ml-4">Managing Your Requests</h2>
             </div>
              <p className="text-gray-600 ml-10">
                You can view all donor responses, update request status, or create new requests as needed.
              </p>
              
            </div>
            </div>
            </div>
   <RecipientReqCard />
   </>
  )
}
