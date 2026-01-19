import { AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { fetchWithAuth } from "../../../utils/api";

const EligibilityCard = () => {
  const [stats, setStats] = useState({
    progress: 0,
    nextEligibleDate: null,
    lastDonationDate: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWithAuth("/details/calculate-progress", { method: "GET" });
        console.log("Backend data:", data); // Debugging
        if (data) {
          // Ensure lastDonationDate exists
          setStats({
            progress: data.progress ?? 0,
            nextEligibleDate: data.nextEligibleDate ?? null,
            lastDonationDate: data.lastDonationDate ?? null,
          });
        }
      } catch (error) {
        console.error("Error fetching eligibility data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const calculateDaysRemaining = (nextDate) => {
    if (!nextDate) return 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0); // normalize to start of day
    const target = new Date(nextDate);
    target.setHours(0, 0, 0, 0); // normalize to start of day

    const diffTime = target - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const daysRemaining = calculateDaysRemaining(stats.nextEligibleDate);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-200 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-3 bg-gray-200 rounded-3xl w-full"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Donation Eligibility</h3>

      <div className="flex justify-between items-center text-gray-700 text-sm mb-4">
        <span>
          Last Donation: <span className="font-medium">{formatDate(stats.lastDonationDate)}</span>
        </span>
        <span>
          Next eligible: <span className="font-medium">{formatDate(stats.nextEligibleDate)}</span>
        </span>
      </div>

  <div className="progress-bar w-full h-3 bg-gray-300 rounded-3xl relative overflow-hidden">
  {/* Filled portion */}
  <div
    className="bg-red-500 h-full rounded-3xl transition-all duration-1000 ease-out relative"
    style={{ width: `${stats.progress}%` }}
  >
    {/* Percentage text moves with the filled bar */}
    <span
      className="text-white text-xs font-bold absolute right-4 top-1/2 transform translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
    >
      {stats.progress}%
    </span>
  </div>
</div>



      {stats.progress < 100 ? (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-lg flex items-start mt-4">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 mr-3" />
          <p className="text-sm">
            Please wait <span className="font-semibold">{daysRemaining} more days</span> before your next donation (90 days between whole blood donations).
          </p>
        </div>
      ) : (
        <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg flex items-start mt-4">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 mr-3" />
          <p className="text-sm">You are eligible to donate now!</p>
        </div>
      )}
    </div>
  );
};

export default EligibilityCard;
