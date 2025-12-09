import React from 'react'

export default function NearDonor() {
  return (
      <div className="mb-8">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-900">Compatable Donors Nearby</h2>
      <a href="#" className="text-red-600 font-medium flex items-center hover:underline">
        View All Matches (2) <ChevronRight className="w-4 h-4 ml-1" />
      </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <MatchCard
        type="C+"
        name="David Kim"
        hospital="Bronx Medical Center"
        reason="Major trauma - urgent blood loss"
        units="1 Unit needed"
        location="Bronx, NY - 8.2 miles"
        time="1 hour ago"
        status="Critical"
      />
      <MatchCard
        type="O-"
        name="Robert Martinez"
        hospital="NYU Langone Health"
        reason="Surgical procedure - blood transfusion needed"
        units="2 units needed"
        location="Manhattan, NY - 2.5 miles"
        time="4 hours ago"
        status="Urgent"
      />
      <MatchCard isPlaceholder={true} />
    </div>
  </div>
  )
}
