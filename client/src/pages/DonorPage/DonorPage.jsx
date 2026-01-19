import DashboardHeader from "../../component/DashboardHeader";
import DashboardNav from "../../component/DashboardNav";
import Footer from "../../component/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchWithAuth } from "../../utils/api";

export default function Home() {
  const [accountData, setAccountData] = useState({});

  useEffect(() => {
    const getAccountData = async () => {

      
          try {
               const data = await fetchWithAuth("/details/account", {
              method: "GET",
            })
            setAccountData(data)
            console.log("Data fetched successfully", data);
            } catch (error) {
              console.error(error);
            }
          }
    getAccountData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <DashboardHeader
        portalName={"Donor"}
        bloogGroup={accountData?.userDetails?.bloodGroup}
        initial={accountData?.userDetails?.name?.charAt(0)}
        Name={accountData?.userDetails?.name?.split(" ")[0]}
      />
      <DashboardNav
        navitem1={"Dashboard"}
        navitem2={"Matched Request"}
        navitem3={"My Donations"}
        navitem4={"Appointments"}
        navitem5={"Find Centers"}
        navpath1={"/"}
        navpath2={"matched-requests"}
        navpath3={"history"}
        navpath4={"appointment"}
        navpath5={"findCenters"}
      />
      <main className="container mx-auto px-6 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
