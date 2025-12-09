import DonorCard from "../../../component/DonorCard";
import { ChevronRight } from "lucide-react";


export default function () {
  return (
     <div className="mb-8">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-900">Critical Matches Near You</h2>
      <a href="#" className="text-red-600 font-medium flex items-center hover:underline">
        View All Matches (2) <ChevronRight className="w-4 h-4 ml-1" />
      </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DonorCard />
        <DonorCard />
        <DonorCard />
    </div>
    </div>
  )
}
