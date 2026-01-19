import { useRef, useState } from "react";
import useCategories from "../../utils/useCategories";
import { checkValidData } from "../../utils/validate";
import axios from "axios";
import { ENQUIRY_API } from "../../utils/constants";

const VisaEnquiryForm = () => {
  const categoriesList = useCategories();

  const [visaType, setVisaType] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const message = useRef(null);

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    // Validate form data
    const isValid = checkValidData(
      name.current.value,
      email.current.value,
      phone.current.value
    );
    if (isValid) {
      setErrorMessage(isValid);
      return;
    }

    // Check if visa type is selected
    if (!visaType) {
      setErrorMessage("Please select a visa type");
      return;
    }

    try {
      setLoading(true);

      // Prepare form data
      const formData = {
        name: name.current.value,
        email: email.current.value,
        phone: phone.current.value || null,
        visa_type: visaType,
        message: message.current.value,
      };

      // Call API endpoint
      const response = await axios.post(ENQUIRY_API, formData);

      // Handle success
      if (response.status === 200 || response.status === 201) {
        setSuccessMessage(
          "Enquiry submitted successfully! We'll contact you soon."
        );

        // Reset form fields
        name.current.value = "";
        email.current.value = "";
        phone.current.value = "";
        message.current.value = "";
        setVisaType("");

        // Clear success message after 5 seconds
        setTimeout(() => setSuccessMessage(null), 5000);
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "Failed to submit enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md sticky top-6">
      <h3 className="text-xl font-bold text-brand mb-4">Enquiry Form</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-brand-600 mb-1">
            Your Name
          </label>
          <input
            ref={name}
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-600 mb-1">
            Email address
          </label>
          <input
            ref={email}
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-600 mb-1">
            Phone (optional)
          </label>
          <input
            ref={phone}
            type="tel"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-600 mb-1">
            Visa Type
          </label>
          <select
            value={visaType}
            onChange={(e) => setVisaType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 capitalize"
          >
            <option value="" disabled>
              Select visa type
            </option>
            {categoriesList.map((category) => (
              <option
                key={category.id}
                className="capitalize"
                value={category.id}
              >
                {category.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-600 mb-1">
            Message
          </label>
          <textarea
            ref={message}
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        {errorMessage && (
          <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-green-500 text-sm font-medium">{successMessage}</p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand text-white py-2 rounded-md font-semibold hover:bg-brand-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSubmitClick}
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>
    </div>
  );
};

export default VisaEnquiryForm;
