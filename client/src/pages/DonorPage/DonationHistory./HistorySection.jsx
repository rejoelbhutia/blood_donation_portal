import React, { useState, useEffect } from "react";
import HistoryComponent from "../../../component/HistoryComponent";
import CouldNotFound from "../../../component/CouldNotFound";
import { fetchWithAuth } from "../../../utils/api";

export default function HistorySection() {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await fetchWithAuth("/details/history", { method: "GET" });
        if (Array.isArray(data)) {
          setHistoryData(data);
        }
      } catch (error) {
        console.error("Error fetching donation history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className=' bg-white p-6 rounded-xl animate-pulse'>
        <div className="h-20 bg-gray-200 rounded mb-4"></div>
        <div className="h-20 bg-gray-200 rounded mb-4"></div>
      </div>
    )
  }

  return (
    <div className=" bg-white p-6 rounded-xl">
      {historyData.length > 0 ? (
        historyData.map((donation) => (
          <HistoryComponent
            key={donation._id}
            place={donation.donatedTo?.name || "Blood Bank"} // Fallback if populated data is missing
            date={formatDate(donation.donationDate)}
            cause={donation.bloodType ? `Blood Type: ${donation.bloodType}` : "Donation"} // Using blood type as cause/description for now
            unitDontated={donation.units}
          />
        ))
      ) : (
        <CouldNotFound />
      )}
    </div>
  );
}
