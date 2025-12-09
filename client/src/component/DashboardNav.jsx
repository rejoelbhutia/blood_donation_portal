import { NavLink } from "react-router-dom";

const DashboardNav = () => {
  
 
  // NavLink passes an object { isActive } to this function automatically
  const getLinkClass = ({ isActive }) => {
    const baseClasses = "inline-flex items-center justify-center p-3 border-b-2 rounded-t-lg group transition-colors duration-200";
    const activeClasses = "text-red-600 border-red-600";
    const inactiveClasses = "text-gray-600 border-transparent hover:text-gray-800 hover:border-gray-300";

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-3">
        <ul className="flex flex-wrap text-sm font-medium text-gray-600 -mb-px">
          
          <li className="mr-6">
            <NavLink to="" end className={getLinkClass}>
              Dashboard
            </NavLink>
          </li>

          <li className="mr-6">
            
            <NavLink to="matched-requests" className={getLinkClass}>
              Matched Requests
              <span className="ml-2 bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                3
              </span>
            </NavLink>
          </li>

          <li className="mr-6">
            <NavLink to="history" className={getLinkClass}>
              My Donations
            </NavLink>
          </li>

          <li className="mr-6">
            <NavLink to="appointment" className={getLinkClass}>
              Appointments
            </NavLink>
          </li>

          <li className="mr-6">
            <NavLink to="findCenters" className={getLinkClass}>
              Find Centers
            </NavLink>
          </li>
          
        </ul>
      </div>
      
    </nav>
  );
};

export default DashboardNav;
