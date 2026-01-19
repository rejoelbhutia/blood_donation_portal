import StatCard from "../../../component/StatCard";
import { Droplet, Heart, Users, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { fetchWithAuth } from "../../../utils/api";
const StatsGrid = () => {
  const [accountData, setAccountData] = useState({});

  useEffect(() => {
    const getAccountData = async () => {
      try {
        const data = await fetchWithAuth("/details/account", { method: "GET" });
        setAccountData(data);
        console.log("Data fetched successfully", data);
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
        value={`${accountData?.totalDonation ?? 0}`}
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
        value={accountData?.userDetails?.joiningDate ? `${accountData?.userDetails?.joiningDate?.month} ${accountData?.userDetails?.joiningDate.year}` : 'Not found'}
        icon={Calendar}
        iconBgClass="bg-purple-100"
        iconColorClass="text-purple-600"
      />
    </div>
  );
};

export default StatsGrid;
