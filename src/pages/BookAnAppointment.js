import { useEffect, useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import axios from "axios";
import {
  APPOINTMENT_API,
  APPOINTMENT_TIME_API,
  CONSULTATION_METHOD_API,
} from "../utils/constants";
import PageBanner from "../components/PageBanner/PageBanner";
import SectionTitle from "../components/Common/SectionTitle";

const BookAnAppointment = () => {
  const [listOfPreferredTimes, setListOfPreferredTimes] = useState([]);
  const [listOfConsultationMethods, setListOfConsultationMethods] = useState(
    []
  );

  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const preferredDate = useRef(null);
  const message = useRef(null);
  const [preferredTimeId, setPreferredTimeId] = useState("");
  const [consultationMethodId, setConsultationMethodId] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPreferredTimes = async () => {
    try {
      const response = await axios.get(APPOINTMENT_TIME_API);
      setListOfPreferredTimes(response.data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchConsultationMethods = async () => {
    try {
      const response = await axios.get(CONSULTATION_METHOD_API);
      setListOfConsultationMethods(response.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

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

    // Check if name is filled
    if (!preferredDate.current.value.trim()) {
      setErrorMessage("Please enter your preferred date");
      return;
    }

    // Check if preferred time is selected
    if (!preferredTimeId) {
      setErrorMessage("Please select a preferred time");
      return;
    }
    // Check if consultation method is selected
    if (!consultationMethodId) {
      setErrorMessage("Please select a consultation method");
      return;
    }

    // Check if message is filled
    if (!message.current.value.trim()) {
      setErrorMessage("Please enter your message");
      return;
    }

    try {
      setLoading(true);

      // Prepare form data
      const formData = {
        name: name.current.value,
        email: email.current.value,
        phone: phone.current.value || null,
        preferred_date: preferredDate.current.value,
        preferred_time_id: preferredTimeId,
        consultation_method_id: consultationMethodId,
        message: message.current.value,
      };

      // Call API endpoint
      const response = await axios.post(APPOINTMENT_API, formData);

      // Handle success
      if (response.status === 200 || response.status === 201) {
        setSuccessMessage("submitted successfully! We'll contact you soon.");

        // Reset form fields
        name.current.value = "";
        email.current.value = "";
        phone.current.value = "";
        message.current.value = "";
        preferredDate.current.value = "";
        setPreferredTimeId("");
        setConsultationMethodId("");

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

  useEffect(() => {
    fetchPreferredTimes();
    fetchConsultationMethods();
  }, []);
  return (
    <>
      {/* Banner */}
      <PageBanner title="Book An Appointment" />

      {/* Page Section */}

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT CONTENT */}
          <div>
            <div className="text-left">
              <SectionTitle
                title="Schedule Your Consultation"
                subtitle={
                  <>
                    Have Questions ? <br />
                    Don't Hesitate to Contact Us
                  </>
                }
                isCenter={false}
              />
            </div>

            <p className="mt-4 max-w-md text-base font-medium text-gray-500">
              Book a one-on-one consultation with our experienced immigration
              experts. We will guide you through visa options, documentation,
              eligibility, and next steps.
            </p>

            <ul className=" mt-8 space-y-4 text-gray-600 font-medium">
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✔</span>
                Expert visa & immigration guidance
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✔</span>
                Personalized consultation based on your profile
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✔</span>
                Online & in-person consultation available
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✔</span>
                Fast response from our team
              </li>
            </ul>

            {/* Optional contact box */}
            <div className="mt-8 bg-white rounded-xl shadow p-6">
              <p className="font-semibold text-brand mb-1">
                Need immediate help?
              </p>
              <p className="text-gray-600">
                Call us at{" "}
                <span className="font-semibold text-brand">
                  +91 93164 39356
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="">
            {/* Form Header */}

            <div className="text-left">
              <SectionTitle
                title="Book An Appointment"
                subtitle="Fill the form and we’ll get back to you"
                isCenter={false}
              />
            </div>

            {/* Form */}
            <form className="mt-10 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {/* First Field Set */}
                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      ref={name}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand/40"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      ref={email}
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand/40"
                    />
                  </div>
                </div>

                {/* Second Field Set */}
                <div className="space-y-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Phone (Optional)
                    </label>
                    <input
                      ref={phone}
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand/40"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      ref={preferredDate}
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand/40"
                    />
                  </div>
                </div>
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Preferred Time
                </label>
                <select
                  value={preferredTimeId}
                  onChange={(e) => setPreferredTimeId(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand/40 capitalize"
                >
                  <option value="" disabled>
                    Select preferred time
                  </option>
                  {listOfPreferredTimes.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Consultation Method */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Consultation Method
                </label>
                <select
                  value={consultationMethodId}
                  onChange={(e) => setConsultationMethodId(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand/40 capitalize"
                >
                  <option value="" disabled>
                    Select consultation method
                  </option>
                  {listOfConsultationMethods.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  ref={message}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand/40 resize-none"
                />
              </div>

              {/* Messages */}
              {errorMessage && (
                <p className="text-red-500 text-sm font-medium">
                  {errorMessage}
                </p>
              )}

              {successMessage && (
                <p className="text-green-600 text-sm font-medium">
                  {successMessage}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                onClick={handleSubmitClick}
                className="w-full bg-brand text-white py-3 rounded-lg font-semibold text-lg hover:bg-brand-700 transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAnAppointment;
