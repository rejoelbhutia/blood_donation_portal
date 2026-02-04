import React, { useEffect, useState } from 'react'
import { Cross, Droplet, Bell } from 'lucide-react'
import { fetchWithAuth } from "../../../utils/api.js";
import CreateRequestForm from './CreateRequestForm';

export default function WelcomeSection() {

  const [recepientDetils, setRecepientDetails] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {

    const fetchRecpientData = async () => {

      try {
        const data = await fetchWithAuth("/details/account", {
          method: "GET",
        })
        setRecepientDetails(data)
        console.log("Data fetched successfully", data);
      } catch (error) {
        console.error(error);
      }



    }
    fetchRecpientData();
  }, [])

  const handleCreateRequest = async (formData) => {

    // Map frontend fields to backend expected fields
    const requestData = {
      patientName: formData.name,
      bloodGroup: formData.bloodGroup,
      condition: formData.condition,
      hospitalName: formData.hospitalName,
      unit: formData.quantity,
      reason: formData.reason,
      address: formData.address
    };

    try {
      const response = await fetchWithAuth("/request/bloodrequest", {
        method: "POST",
        body: JSON.stringify(requestData)
      });

      if (response && response.success) {
        console.log("Request created successfully:", response);
        alert("Blood request created successfully!");
        setIsModalOpen(false);
      } else {
        console.error("Failed to create request:", response?.message);
        alert(`Failed to create request: ${response?.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error creating request:", error);
      alert("An error occurred while creating the request.");
    }
  };

  return (
    <div className="bg-white shadow-sm rounded-lg p-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="flex">
        <div className="flex items-center justify-center w-30 h-30 rounded-full bg-red-100 text-red-600 font-semibold text-3xl">
          {recepientDetils.userDetails?.name[0]}
        </div>
        <div className="mt-6 ml-3">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{`Welcome back, ${recepientDetils.userDetails?.name.split(" ", 1)}`}</h1>
          <div className="flex items-center space-x-3 text-gray-600">
            <span className="flex items-center justify-center w-15 h-7 rounded text-red-600 border border-red-600 font-semibold text-sm">
              <Droplet className="h-4 w-4 text-red-600 fill-current mr-3" />
              {recepientDetils.userDetails?.bloodGroup}
            </span>
            <span>{recepientDetils.userDetails?.address || `No address available`}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mt-6 md:mt-0">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center text-red-600 px-4 py-2 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
        >
          <Bell className="w-5 h-5 mr-2" />
          Create Request
        </button>
      </div>

      {isModalOpen && (
        <CreateRequestForm
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleCreateRequest}
        />
      )}
    </div>
  )
}
