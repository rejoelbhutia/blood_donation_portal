import React, { useState } from 'react';
import { X } from 'lucide-react';

const CreateRequestForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: '',
    condition: '',
    hospitalName: '',
    reason: '',
    quantity: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800">Create Blood Request</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
              placeholder="Full Name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Blood Group Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Blood Group</label>
              <select
                name="bloodGroup"
                required
                value={formData.bloodGroup}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="">Select Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            {/* Condition Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
              <select
                name="condition"
                required
                value={formData.condition}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="">Select Condition</option>
                <option value="critical">Critical</option>
                <option value="urgent">Urgent</option>
                <option value="stable">Stable</option>
              </select>
            </div>
          </div>

          {/* Hospital Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hospital Name</label>
            <input
              type="text"
              name="hospitalName"
              required
              value={formData.hospitalName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
              placeholder="Hospital Name"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quantity Needed (Units)</label>
            <input
              type="number"
              name="quantity"
              required
              min="1"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
              placeholder="e.g. 2"
            />
          </div>

          {/* Reason */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Reason</label>
            <textarea
              name="reason"
              required
              rows="2"
              value={formData.reason}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
              placeholder="Why is this blood needed?"
            ></textarea>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location Address</label>
            <textarea
              name="address"
              required
              rows="3"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
              placeholder="Hospital address or location details"
            ></textarea>
          </div>

          <div className="pt-4 flex gap-3">
             <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRequestForm;
