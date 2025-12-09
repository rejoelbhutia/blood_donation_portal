import { Droplet, CheckCircle, Info } from "lucide-react";
import { useState } from "react";



const RecentDonationActivity = () => {
  const [donationHistory, setDonationHistory] = useState();
  const [haveDonated, setDonated] = useState(false);
  return (
  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Donation Activity</h2>
     {haveDonated ? (
      <>
    <ul className="space-y-4">
      {[
        { center: "Manhattan Blood Center", reason: "Used for emergency surgery", date: "October 15, 2025", status: "Completed" },
        { center: "NYC Blood Drive", reason: "Helped cancer patient", date: "August 10, 2025", status: "Completed" },
        { center: "Local Community Drive", reason: "Supported local hospital", date: "June 22, 2025", status: "Completed" },
      ].map((activity, index) => (
        <li key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
          <div className="flex items-start">
            <Droplet className="w-5 h-5 text-red-600 flex-shrink-0 mt-1 mr-3" />
            <div>
              <p className="font-semibold text-gray-900">{activity.center}</p>
              <p className="text-sm text-gray-600">{activity.reason}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-700">{activity.date}</p>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
              <CheckCircle className="w-3 h-3 inline-block mr-1" />{activity.status}
            </span>
          </div>
        </li>
      ))}
    </ul>
    </>
    ) : <div className=" min-w-full bg-yellow-50 border border-yellow-300 p-4 rounded-lg flex items-start">
      <Info className=" w-5 h-5 mr-6"/>
      <p className=" text-sm">
    Could not found your <span className=" font-semibold">donation history</span>
    </p></div>}
  </div>
  )
}; 

export default RecentDonationActivity;