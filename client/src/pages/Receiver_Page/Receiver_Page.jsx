import React from "react";
import DashboardHeader from "../../component/DashboardHeader";
import DashboardNav from "../../component/DashboardNav";
import Footer from "../../component/Footer";
import { Outlet } from "react-router-dom";

export default function Receiver_Page() {
  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <DashboardHeader portalName={"Recipient"} />
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
