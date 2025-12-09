import React from 'react'
import StatCard from '../../../component/StatCard.jsx'
import { CircleAlert, Users, CircleCheckBig, MessageCircle } from 'lucide-react'

export default function Recepient_StatCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <StatCard
      title="Active Requests"
      value='0'
      icon={CircleAlert}
      iconBgClass="bg-red-100"
      iconColorClass="text-red-600"
    />
    <StatCard
      title="Donor Responses"
      value="36"
      icon={Users}
      iconBgClass="bg-green-100"
      iconColorClass="text-green-600"
    />
    <StatCard
      title="Available Donors"
      value="2"
      icon={CircleCheckBig}
      iconBgClass="bg-blue-100"
      iconColorClass="text-blue-600"
    />
    <StatCard
      title="Contacted Donor"
      value="0"
      icon={MessageCircle}
      iconBgClass="bg-purple-100"
      iconColorClass="text-purple-600"
    />
  </div>
  )
}
