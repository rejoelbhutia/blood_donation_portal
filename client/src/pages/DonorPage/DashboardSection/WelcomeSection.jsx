import { Bell, Calendar, Droplet } from "lucide-react";
import { useState, useEffect } from "react";

const WelcomeSection = () => {
  const [accountData, setAccountData] = useState({});

 

  useEffect(() => {
    const getAccountData = async () => {
      
       const token = localStorage.getItem("token")
      
     
      try {
        const response = await fetch("http://localhost:8000/api/details/account", {
          method: "GET",
          headers: {
            "Content-Type" : "application/json",
            "Authorization": `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Data ", data);
          setAccountData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    console.log(accountData)
    getAccountData();
  }, []);

  return (
    <div className="bg-white shadow-sm rounded-lg p-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="flex">
        <div className="flex items-center justify-center w-30 h-30 rounded-full bg-red-100 text-red-600 font-semibold text-3xl">
          {accountData?.userDetails?.name?.charAt(0)} 
        </div>
        <div className="mt-6 ml-3">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{`Welcome back, ${accountData?.userDetails?.name}`}</h1>
          <div className="flex items-center space-x-3 text-gray-600">
            <span className="flex items-center justify-center w-15 h-7 rounded text-red-600 border border-red-600 font-semibold text-sm">
              <Droplet className="h-4 w-4 text-red-600 fill-current mr-3" />
              {accountData?.userDetails?.bloodGroup}
            </span>
            <span>{accountData?.userDetails?.address || 'No address available'}</span> 
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mt-6 md:mt-0">
        <button className="flex items-center text-red-600 px-4 py-2 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
          <Bell className="w-5 h-5 mr-2" />
          Notifications
        </button>
        <div className="flex items-center text-gray-600 text-sm">
          <Calendar className="w-4 h-4 mr-2" />
          <span>Next donation in 38 days</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
