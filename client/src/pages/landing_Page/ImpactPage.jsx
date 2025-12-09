import React from 'react'
import Card from '../../component/Card';
import {Users, Droplet, Building, TrendingUp} from 'lucide-react';

export default function ImpactPage() {
  return (
  
    <section className="bg-red-600 py-16 sm:py-24 font-inter text-white">
      <div className="container mx-auto px-4 text-center">
        
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Impact</h2>
        
        {/* Section Subtitle */}
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-12 opacity-90">
          Together, we're making a real difference in saving lives across communities.
        </p>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card
            Icon={Users}
            value="0+"
            label="Active Donors"
            subLabel="+12% this year"
          />
          <Card
            Icon={Droplet}
            value="0+"
            label="Request fullfilled"
            subLabel="+18% this year"
            layout={"center"}
          />
          <Card
            Icon={Building}
            value="0+"
            label="Lives Saved"
            subLabel=""
          />
          <Card
            Icon={TrendingUp}
            value="0%"
            label="Satisfaction Rate"
            subLabel="Donor feedback"
          />
        </div>
      </div>
    </section>
  );
}


