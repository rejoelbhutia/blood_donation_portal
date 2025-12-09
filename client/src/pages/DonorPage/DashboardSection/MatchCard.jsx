import { AlertCircle, Droplet, MapPin, Clock, MessageSquare } from "lucide-react";

const MatchCard = ({ type, name, hospital, reason, units, location, time, status, className, isPlaceholder }) => (
  <div className={`bg-white rounded-lg shadow-sm p-6 border border-gray-200 ${className}`}>
    {isPlaceholder ? (
      <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg p-6">
        <AlertCircle className="w-12 h-12 text-gray-400 mb-4" />
        <p className="text-lg font-medium mb-2">More people need your help</p>
        <p className="text-sm mb-4">0 more critical requests match your blood type</p>
        <button className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
          View All Requests
        </button>
      </div>
    ) : (
      <>
        <div className="flex flex-col sm:flex-row items-start justify-between mb-4">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 font-semibold text-sm">{type}</span>
            <div>
              <p className="font-semibold text-gray-900">{name}</p>
              <p className="text-sm text-gray-600">{hospital}</p>
            </div>
          </div>
          {status && (
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              status === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
            }`}>
              {status}
            </span>
          )}
        </div>
        
        <p className="text-gray-700 mb-4 text-sm"><span className="font-semibold">Reason:</span> {reason}</p>
        
        {units && <p className="text-gray-700 text-sm mb-2 flex items-center"><Droplet className="w-4 h-4 mr-2 text-red-500" />{units} units needed</p>}
        <p className="text-gray-700 text-sm mb-2 flex items-center"><MapPin className="w-4 h-4 mr-2 text-gray-500" />{location}</p>
        <p className="text-gray-700 text-sm mb-6 flex items-center"><Clock className="w-4 h-4 mr-2 text-gray-500" />{time}</p>

        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-3 space-y-3 sm:space-y-0 mt-auto pt-4 border-t border-gray-100">
          <button className="flex-1 px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center">
            <MessageSquare className="w-4 h-4 mr-2" /> Contact Now
          </button>
          <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            View Details
          </button>
        </div>
      </>
    )}
  </div>
);

export default MatchCard;
