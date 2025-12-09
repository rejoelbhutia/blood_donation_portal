import React from 'react';


import { Heart, Bell } from 'lucide-react';
import ActionCard from '../../component/ActionCard';





export default function DonorReceiverSection() {
  const donorList = [
    "Browse urgent blood requests in your area",
    "Get matched with compatible receivers",
    "Connect directly and schedule donations",
  ];

  const receiverList = [
    "Post urgent blood requests instantly",
    "Reach thousands of active donors",
    "Get help when you need it most",
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-24 font-inter">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Donor Card */}
          <ActionCard
            Icon={Heart}
            iconBgClass="bg-red-600"
            iconColorClass="text-white"
            title="Are you a Donor?"
            subtitle="Register now and be the hero someone is looking for. Your donation can save up to three lives."
            listItems={donorList}
            listMarkerClass="marker:text-red-600"
            buttonText="Register as Donor"
            buttonClass="bg-red-600 hover:bg-red-700"
            buttonHref='/authPage'
            borderColor={"border-orange-200"}
          />

          {/* Receiver Card */}
          <ActionCard
            Icon={Bell}
            iconBgClass="bg-orange-500"
            iconColorClass="text-white"
            title="Need Blood?"
            subtitle="Post your request and connect with verified donors ready to help in your time of need."
            listItems={receiverList}
            listMarkerClass="marker:text-orange-500"
            buttonText="Post Blood Request"
            buttonClass="bg-orange-500 hover:bg-orange-600"
            buttonHref='/authPage'
            borderColor={"border-orange-200"}
          />

        </div>
      </div>
    </section>
  );
}