import AuthPage from "./pages/LoginPage/AuthPage"
import {Routes, Route} from "react-router-dom"
import LandingPage from "./pages/landing_Page/LandingPage.jsx"
import DonorPage from "./pages/DonorPage/DonorPage.jsx"
import DashboardSection from "./pages/DonorPage/DashboardSection/DashboardSection.jsx"
import Requests from "./pages/DonorPage/RequestSection/Requests.jsx"
import HistorySection from "./pages/DonorPage/DonationHistory./HistorySection.jsx"




export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/pages/donor" element ={<DonorPage />}> 
          <Route index element={< DashboardSection/>} />
          <Route path = "matched-requests" element={< Requests/>} />
          <Route path = "history" element={<HistorySection />} />
        </Route>
        <Route path = "/authPage" element={<AuthPage />} />
        
      </Routes>
       
   

   
    </div>
  )
}
