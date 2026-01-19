import React from "react";
import { Search, Funnel, ChevronDown, UserCheck } from "lucide-react";

export default function SearchComponent() {
  return (
    <form role="search" className="flex flex-col sm:flex-row gap-3 bg-white p-4 rounded-2xl shadow-sm">
      
      {/* Search Input - Takes most space */}
      <div className="relative flex-[3]">
        <Search
          className="text-neutral-500 absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          aria-hidden="true"
        />
        <input
          type="text"
          name="search"
          id="search-input"
          aria-label="Search by name or location"
          placeholder="Search by name or location"
          className="border-none bg-gray-100 pl-10 pr-4 py-3 rounded-xl w-full 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white
                   transition-colors duration-200"
        />
      </div>

      {/* Blood Type Filter */}
      <div className="relative flex-1 min-w-[140px]">
        <label htmlFor="blood-filter" className="sr-only">
          Filter by blood type
        </label>
        <Funnel
          className="text-neutral-500 absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          aria-hidden="true"
        />
        <select
          name="bloodGroup"
          id="blood-filter"
          aria-label="Filter by blood group"
          className="border-none bg-gray-100 pl-10 pr-8 py-3 rounded-xl w-full 
                   appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 
                   cursor-pointer hover:bg-gray-200 transition-colors duration-200"
        >
          <option value="">All Blood Types</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
      </div>

      {/* Availability Filter */}
      <div className="relative flex-1 min-w-[160px]">
        <select
          name="availability"
          id="availability-filter"
          aria-label="Filter by donor availability"
          className="border-none bg-gray-100 pl-10 pr-8 py-3 rounded-xl w-full 
                   appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 
                   cursor-pointer hover:bg-gray-200 transition-colors duration-200"
        >
          <option value="all">All Donors</option>
          <option value="available">Available Only</option>
          <option value="compatible">Compatible Only</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
      </div>

    </form>
  );
}