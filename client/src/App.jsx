import AuthLayout from "./pages/LoginPage/AuthLayout";
import LoginForm from "./pages/LoginPage/LoginForm";
import SignUp from "./pages/LoginPage/SignUp";
import ForgotPassword from "./pages/LoginPage/ForgotPassword";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/landing_Page/LandingPage.jsx";
import DonorPage from "./pages/DonorPage/DonorPage.jsx";
import DashboardSection from "./pages/DonorPage/DashboardSection/DashboardSection.jsx";
import Requests from './pages/DonorPage/RequestSection/Requests.jsx'
import Request_Page from "./pages/Receiver_Page/Requests_Section/Request_Page.jsx";
import HistorySection from "./pages/DonorPage/DonationHistory/HistorySection.jsx";
import Receiver_Page from "./pages/Receiver_Page/Receiver_Page.jsx";
import Recepient_Dashboatd from "./pages/Receiver_Page/Dashboard_Section/Recepient_Dashboatd.jsx";
import FindDonor from "./pages/Receiver_Page/FindDonor_Section/FindDonor.jsx";
import Contact from "./pages/Receiver_Page/Contact_Section/Contact.jsx";
import ResetPassword from "./pages/LoginPage/ResetPass.jsx";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/pages/donor" element={<DonorPage />}>
          <Route index element={<DashboardSection />} />
          <Route path="matched-requests" element={<Requests />} />
          <Route path="history" element={<HistorySection />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Route>

        {/* Redirect old authPage or root to login if needed, or keep root as landing */}
        <Route path="/authPage" element={<Navigate to="/login" replace />} />

        <Route path="/" element={<LandingPage />} />

        <Route path="/pages/receiver" element={<Receiver_Page />}>
          <Route index element={<Recepient_Dashboatd />} />
          <Route path="requests" element={<Request_Page />} />
          <Route path="find-donors" element={<FindDonor />} />
          <Route path="contacted" element={<Contact />} />
        </Route>

      </Routes>
    </div>
  );
}
