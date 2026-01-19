import { AlertCircle } from "lucide-react"

export default function ToWhomDonate({title, description}) {
  return (
    <div className=" bg-blue-100 rounded-2xl flex p-2 mt-4">
        <AlertCircle className=" text-blue-500 mt-1.5 h-10 w-10 md:h-8 md:w-8"/>
        <div className=" flex flex-col">
        <p className=" text-sm sm:text-lg md:text-xl ml-4 ">{title}</p>
        <p className=" text-sm sm:text-base lg:text-xl text-gray-700 ml-4">{description}</p>
        </div>
    </div>
  )
}
