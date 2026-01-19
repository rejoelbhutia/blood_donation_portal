import { Outlet, useLocation, Link } from "react-router-dom"; // Import Outlet
import TaglineSidebar from "../../component/TaglineSidebar";

import Button from "../../component/Button";
import { Link as RouterLink } from "react-router-dom"; 

// Note: I will reuse TaglineSidebar. If TaglineSidebar2 exists, user can verify. 
// For now, based on previous code, there was conditional rendering.
// I will implement a responsive layout wrapper.

export default function AuthLayout() {
  const location = useLocation();
  const isSignup = location.pathname === "/signup";
  const isLogin = location.pathname === "/login";
  
  // Decide sidebar content based on route
  const sidebarProps = isSignup 
    ? { tagline: "Join Our Mission", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }
    : { tagline: "Donate Blood, Save Lives", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." };

  return (
    <div className="login-con max-w-[100vw] h-screen flex overflow-hidden">
        <div className="sidebar hidden md:block w-[45%] h-full bg-red-600">
            <TaglineSidebar {...sidebarProps} />
        </div> 
        <div className="content w-full md:w-[55%] h-full flex flex-col items-center justify-center overflow-y-auto py-10">
          
          {/* Navigation Tabs - Only show on login/signup pages */}
          {(isLogin || isSignup) && (
             <div className="buttons flex gap-x-3.5 mb-10">
                <Link to="/login">
                  <Button 
                    btnName={"Sign In"} 
                    btnColor={isLogin ? "bg-btn" : "bg-white"} 
                    textColor={isLogin ? "text-white" : "text-black"}
                    // Prevent default button behavior if using Button component as div/button
                  />
                </Link>
                <Link to="/signup">
                  <Button 
                    btnName={"Sign Up"} 
                    btnColor={isSignup ? "bg-btn" : "bg-white"} 
                    textColor={isSignup ? "text-white" : "text-black"}
                  />
                </Link>
             </div>
          )}

            {/* Render the specific page content */}
            <Outlet />
        </div>
    </div>
  )
}
