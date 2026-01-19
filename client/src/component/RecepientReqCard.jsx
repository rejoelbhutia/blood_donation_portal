import React from 'react'
import { Droplet, MapPin, Clock, Eye, Mail, Search, Edit2, RefreshCw, MessageCircle } from 'lucide-react'

export default function RecipientReqCard() {
  const requests = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Brooklyn Methodist Hospital, Brooklyn, NY",
      posted: "2 hours ago",
      description: "Emergency surgery - severe blood loss",
      donorCount: 12,
      status: "urgent"
    },
    {
      id: 2,
      name: "Michael Johnson",
      location: "NYU Brooklyn, Brooklyn, NY",
      posted: "1 day ago",
      description: "Scheduled procedure",
      donorCount: 8,
      status: "active"
    }
  ]

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6" aria-label="Blood donation requests">
      {requests.map((request) => (
        <article 
          key={request.id} 
          className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
          aria-labelledby={`request-${request.id}-title`}
        >
          {/* Card Header */}
          <header className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center"
                  role="img"
                  aria-label={`Avatar for ${request.name}`}
                >
                  <Droplet className="w-6 h-6 text-red-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 
                    id={`request-${request.id}-title`}
                    className="text-xl font-bold text-gray-800"
                  >
                    {request.name}
                  </h3>
                  <div className="flex items-center text-gray-600 mt-1">
                    <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
                    <span className="text-sm">{request.location}</span>
                  </div>
                </div>
              </div>
              {request.status === 'urgent' && (
                <span 
                  className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full"
                  aria-label="Urgent request"
                >
                  URGENT
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-4">{request.description}</p>

            {/* Posted Time */}
            <div className="flex items-center text-gray-500 text-sm mb-6">
              <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
              <time dateTime="PT2H" aria-label={`Posted ${request.posted}`}>
                Posted {request.posted}
              </time>
            </div>

            {/* Donor Responses */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-800">Donor Responses</h4>
                  <p 
                    className="text-2xl font-bold text-red-600 mt-1"
                    aria-label={`${request.donorCount} donor responses`}
                  >
                    {request.donorCount}
                  </p>
                </div>
                <button 
                  className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                  aria-label={`View ${request.donorCount} donor responses for ${request.name}`}
                >
                  <Eye className="w-4 h-4" aria-hidden="true" />
                  <span>View Responses</span>
                </button>
              </div>
            </div>
          </header>

          {/* Card Footer */}
          <footer className="bg-gray-50 px-6 py-4 border-t border-gray-100">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <button 
                  className="flex items-center text-gray-600 hover:text-red-600 transition duration-200"
                  aria-label={`Edit request for ${request.name}`}
                >
                  <Edit2 className="w-4 h-4 mr-2" aria-hidden="true" />
                  <span className="text-sm font-medium">Edit</span>
                </button>
                <button 
                  className="flex items-center text-gray-600 hover:text-red-600 transition duration-200"
                  aria-label={`Update status for ${request.name}'s request`}
                >
                  <RefreshCw className="w-4 h-4 mr-2" aria-hidden="true" />
                  <span className="text-sm font-medium">Update Status</span>
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-red-600"
                  aria-label="Share via message"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                </button>
                <button 
                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-red-600"
                  aria-label="Email request"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </button>
                <button 
                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-red-600"
                  aria-label="Search related requests"
                >
                  <Search className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </footer>
        </article>
      ))}
    </section>
  )
}