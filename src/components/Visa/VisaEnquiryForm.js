import React from "react";

const VisaEnquiryForm = () => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md sticky top-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Enquiry Form</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone (optional)
          </label>
          <input
            type="number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Visa Type
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option>Select visa type</option>
            <option>Student Visa</option>
            <option>Work Visa</option>
            <option>Tourist Visa</option>
            <option>Business Visa</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand text-white py-2 rounded-md font-semibold hover:bg-brand-700 transition"
        >
          Submit Enquiry
        </button>
      </form>
    </div>
  );
};

export default VisaEnquiryForm;
