import { AlertCircle } from "lucide-react"

export default function ToWhomDonate() {
  return (
    <div className=" bg-blue-100 rounded-2xl flex p-6">
        <AlertCircle className=" text-blue-500 mt-1.5 h-10 w-10 md:h-8 md:w-8"/>
        <div className=" flex flex-col">
        <p className=" text-sm sm:text-lg md:text-xl ml-4 font-semibold">These requests match your blood type (O+)</p>
        <p className=" text-sm sm:text-base lg:text-xl text-blue-600 ml-4">O+ blood can be donated to O+, A+, B+, and AB+ recipients. You can help save lives</p>
        </div>
    </div>
  )
}
