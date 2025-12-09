
import DashboardHeader from '../../component/DashboardHeader';
import DashboardNav from '../../component/DashboardNav';
import Footer from '../landing_Page/Footer';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';





export default function Home() {

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
          console.log(data);
          setAccountData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getAccountData();
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <DashboardHeader portalName={"Donor"} bloogGroup={accountData?.userDetails?.bloodGroup} initial={accountData?.userDetails?.name?.charAt(0)} Name={accountData?.userDetails?.name?.split(" ")[0]}/>
      <DashboardNav />
      <main className="container mx-auto px-6 py-8">
        
         
       

        
      
      <Outlet />
        
      </main>
      <Footer />
    </div>
  );
}