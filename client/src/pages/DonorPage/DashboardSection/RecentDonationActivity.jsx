import { Droplet, CheckCircle, Info } from "lucide-react";
import { useState, useEffect } from "react";
import { fetchWithAuth } from "../../../utils/api";

const RecentDonationActivity = () => {
  const [donationHistory, setDonationHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await fetchWithAuth("/details/history");
        // Take top 3 recent
        const recent = Array.isArray(data) ? data.slice(0, 3) : [];
        setDonationHistory(recent);
      } catch (error) {
        console.error("Error fetching recent activity:", error);
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

  if (loading) return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-8 animate-pulse">
      <div className="h-40 bg-gray-200 rounded"></div>
    </div>
  );

  const haveDonated = donationHistory.length > 0;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Donation Activity</h2>
      {haveDonated ? (
        <ul className="space-y-4">
          {donationHistory.map((activity, index) => (
            <li key={activity._id || index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start">
                <Droplet className="w-5 h-5 text-red-600 flex-shrink-0 mt-1 mr-3" />
                <div>
                  <p className="font-semibold text-gray-900">{activity.place || activity.donatedTo?.name || "Blood Bank"}</p>
                  <p className="text-sm text-gray-600">{activity.reason || `Type: ${activity.bloodType}`}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-700">{formatDate(activity.donationDate)}</p>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                  <CheckCircle className="w-3 h-3 inline-block mr-1" />{activity.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="min-w-full bg-yellow-50 border border-yellow-300 p-4 rounded-lg flex items-start">
          <Info className="w-5 h-5 mr-6" />
          <p className="text-sm">
            Could not find your <span className="font-semibold">donation history</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default RecentDonationActivity;