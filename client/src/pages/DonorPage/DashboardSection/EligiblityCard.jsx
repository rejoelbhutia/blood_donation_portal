import { AlertCircle } from "lucide-react";


const EligibilityCard = () => (
  <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-200">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Donation Eligibility</h3>
    <div className="flex justify-between items-center text-gray-700 text-sm mb-4">
      <span>Last Donation: <span className="font-medium">October 15, 2025</span></span>{/*Add from bakcend */}
      <span>Next eligible: <span className="font-medium">December 20, 2025</span></span>
    </div>
    <div className=" progress-bar w-full h-3 bg-gray-300 rounded-3xl relative">
        <span className="bg-red-500 block h-full rounded-3xl" 
        style={{width : "100%"}}></span>
        <span className=" absolute inset-0 flex items-center justify-center text-xs font-bold text-white">100%</span>
    </div>
    <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-lg flex items-start mt-4 ">
      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 mr-3" />
      <p className="text-sm">
        Please wait <span className="font-semibold">38 more days</span> before your next donation (56 days between whole blood donations).
      </p>
    </div>
  </div>
);

export default EligibilityCard;