import AuthPage from "./pages/LoginPage/AuthPage";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing_Page/LandingPage.jsx";
import DonorPage from "./pages/DonorPage/DonorPage.jsx";
import DashboardSection from "./pages/DonorPage/DashboardSection/DashboardSection.jsx";
import Requests from "./pages/DonorPage/RequestSection/Requests.jsx";
import HistorySection from "./pages/DonorPage/DonationHistory./HistorySection.jsx";
import Receiver_Page from "./pages/Receiver_Page/Receiver_Page.jsx";
import Recepient_Dashboatd from "./pages/Receiver_Page/Dashboard_Section/Recepient_Dashboatd.jsx";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/pages/donor" element={<DonorPage />}>
          <Route index element={<DashboardSection />} />
          <Route path="matched-requests" element={<Requests />} />
          <Route path="history" element={<HistorySection />} />
        </Route>

        <Route path="/authPage" element={<AuthPage />} />
        <Route path="/" element={<LandingPage />} />

        <Route path="/pages/receiver" element={<Receiver_Page />}>
          <Route index element={<Recepient_Dashboatd />} />
          <Route path="requests" element={<Requests />} />
          <Route path="history" element={<HistorySection />} />
        </Route>

      </Routes>
    </div>
  );
}
