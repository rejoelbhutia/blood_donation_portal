import React, {useState} from 'react'
import HistoryComponent from '../../../component/HistoryComponent'
import CouldNotFound from '../../../component/CouldNotFound'


export default function HistorySection() {

  const [historyData, setHistoryData] = useState(false)
  return (
    <div className=' bg-white p-6 rounded-xl'>
      { historyData ? (
        <HistoryComponent place={"Singtam, Sikkim"} date={"14 November, 2025"} cause={"Used for emerygency surgery"} unitDontated={1}/>
      ) : (<CouldNotFound />)
    }

     
    </div>
  )
}
