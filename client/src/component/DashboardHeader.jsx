import {Droplet, Bell} from "lucide-react"



const DashboardHeader = ({portalName, bloogGroup, initial, Name, }) => {

  return (
  <header className="bg-white shadow-sm py-4 border-b border-gray-200 sticky top-0 z-50">
    <div className="container mx-auto px-6 flex justify-between items-center">
      
      <div className="flex items-center space-x-4">
        <a href="#" className="flex items-center gap-2">
          <Droplet className="w-7 h-7 text-red-600 fill-current" />
          <span className="text-2xl font-bold text-gray-900">BloodConnect</span>
        </a>
        <span className="text-gray-500 text-lg ml-4 hidden sm:block">{portalName} Portal</span>
      </div>

      {/* Right section: Icons and User */}
      <div className="flex items-center space-x-6">
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-500" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">1</span>
        </div>
        <div className="flex items-center space-x-2">
           <span className="flex items-center justify-center w-15 h-6.5 rounded text-red-600 border border-red-600 font-semibold text-sm"><Droplet className=" h-4 w-4 text-red-600 fill-current mr-3"/>{bloogGroup}</span>
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 font-semibold text-sm">{initial}</span>
          <span className="text-gray-800 font-medium hidden sm:block">{Name}</span>
        </div>

      </div>
    </div>
  </header>
  )
};

export default DashboardHeader;