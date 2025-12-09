import StatCard from './StartCard'
import {Droplet, Heart, Users, Calendar} from "lucide-react"
import { useState, useEffect } from 'react';
const StatsGrid = () => {

  const [accountData, setAccountData] = useState({});

 

  useEffect(() => {
    const getAccountData = async () => {

      
       const token = localStorage.getItem("token")
     
      try {
        const response = await fetch("http://localhost:8000/api/donor/account", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Data", data);
          setAccountData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getAccountData();
  }, []);

  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <StatCard
      title="Total Donations"
      value={`${accountData?.totalDonation}`}
      icon={Droplet}
      iconBgClass="bg-red-100"
      iconColorClass="text-red-600"
    />
    <StatCard
      title="Lives Impacted"
      value="36"
      icon={Heart}
      iconBgClass="bg-green-100"
      iconColorClass="text-green-600"
    />
    <StatCard
      title="Matched Requests"
      value="2"
      icon={Users}
      iconBgClass="bg-blue-100"
      iconColorClass="text-blue-600"
    />
    <StatCard
      title="Member Since"
      value={`${accountData?.userDetails?.joiningDate ? `${accountData?.userDetails?.joiningDate?.month} ${accountData?.userDetails?.joiningDate?.year}` : 'N/A'}`}
      icon={Calendar}
      iconBgClass="bg-purple-100"
      iconColorClass="text-purple-600"
    />
  </div>
  )
};

export default StatsGrid;