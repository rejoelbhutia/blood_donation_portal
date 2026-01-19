import React, {useEffect, useState} from "react";
import DashboardHeader from "../../component/DashboardHeader";
import DashboardNav from "../../component/DashboardNav";
import Footer from "../../component/Footer";
import { Outlet } from "react-router-dom";
import { fetchWithAuth } from "../../utils/api";

export default function Receiver_Page() {
const [accountDetail, setAccountDetails] = useState({})
  useEffect(() => {
    const getAccountData = async () => {
      try {
             const data = await fetchWithAuth("/details/account", {
            method: "GET",
          })
          setAccountDetails(data)
          console.log("Data fetched successfully", data);
          } catch (error) {
            console.error(error);
          }
    }
          getAccountData();
         
  }, [])
  
  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <DashboardHeader portalName={"Recipient"} 
      bloogGroup={accountDetail?.userDetails?.bloodGroup} 
      initial={accountDetail?.userDetails?.name.charAt(0)}
      Name={accountDetail?.userDetails?.name}/>

      <DashboardNav
        navitem1={"Dashboard"}
        navitem2={"My Requests"}
        navitem3={"Find Donors"}
        navitem4={"Contacted"}
        navpath1={""}
        navpath2={"requests"}
        navpath3={"find-donors"}
        navpath4={"contacted"}
      />

      <main className="container mx-auto px-6 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
