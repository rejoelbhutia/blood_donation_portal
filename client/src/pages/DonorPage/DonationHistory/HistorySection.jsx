import React, { useState, useEffect } from "react";
import HistoryComponent from "../../../component/HistoryComponent";
import CouldNotFound from "../../../component/CouldNotFound";
import { fetchWithAuth } from "../../../utils/api";

export default function HistorySection() {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("HistorySection mounted"); // <-- new
    const fetchHistory = async () => {
      try {
        const data = await fetchWithAuth("/details/history", { method: "GET" });
        console.log("History: ", data);
        setHistoryData(data);
      } catch (error) {
        console.error("Error fetching donation history:", error);
        setError(error.message);
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
      <div className=" bg-white p-6 rounded-xl animate-pulse">
        <div className="h-20 bg-gray-200 rounded mb-4"></div>
        <div className="h-20 bg-gray-200 rounded mb-4"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-xl border border-red-200">
        <p className="text-red-500 font-medium">
          Error loading history: {error}
        </p>
      </div>
    );
  }

  return (
    <div className=" bg-white p-6 rounded-xl">
      {historyData.length > 0 ? (
        historyData.map((donation) => (
          <HistoryComponent
            key={donation._id}
            place={donation.place || "Blood Bank"} // Use actual donation location
            date={
              donation.donationDate ? formatDate(donation.donationDate) : "N/A"
            }
            cause={donation.reason || `Blood Type: ${donation.bloodType}`}
            unitsDonated={donation.units}
          />
        ))
      ) : (
        <CouldNotFound />
      )}
    </div>
  );
}
