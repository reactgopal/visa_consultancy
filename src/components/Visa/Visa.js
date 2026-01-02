import React from "react";
import VisaEnquiryForm from "./VisaEnquiryForm";
import PageBanner from "../PageBanner/PageBanner";

const Visa = () => {
  const visaData = {
    title: "Student Visa Guide",
    overview:
      "Comprehensive guide to obtaining a student visa for international education.",
    sections: [
      {
        id: 1,
        title: "Eligibility Requirements",
        content:
          "To be eligible for a student visa, you must have an acceptance letter from a recognized educational institution, proof of financial support, and a valid passport.To be eligible for a student visa, you must have an acceptance letter from a recognized educational institution, proof of financial support, and a valid passport.To be eligible for a student visa, you must have an acceptance letter from a recognized educational institution, proof of financial support, and a valid passport.",
        points: [
          "Valid acceptance from accredited institution",
          "Proof of financial capacity",
          "Valid passport (minimum 6 months validity)",
          "Health insurance coverage",
          "No criminal records",
        ],
      },
      {
        id: 2,
        title: "Required Documents",
        content: "Prepare the following documents for your visa application:",
        points: [
          "Completed visa application form",
          "Passport and copies",
          "Acceptance letter from institution",
          "Bank statements (last 6 months)",
          "Proof of accommodation",
          "Travel insurance certificate",
          "Medical examination report",
        ],
      },
      {
        id: 3,
        title: "Application Process",
        content: "Follow these steps to apply for your student visa:",
        steps: [
          "Gather all required documents",
          "Schedule a visa interview appointment",
          "Attend biometric appointment",
          "Submit complete application",
          "Attend visa interview",
          "Await visa decision",
          "Collect visa upon approval",
        ],
      },
      {
        id: 4,
        title: "Processing Time & Fees",
        content: "Standard processing time and associated fees:",
        details: {
          processing: "15-30 business days",
          expedited: "5-10 business days",
          fee: "$150 - $300 USD",
          refundable: "No",
        },
      },
      {
        id: 5,
        title: "Visa Validity & Conditions",
        content: "Important information about visa validity period:",
        points: [
          "Visa validity: 1-5 years (varies by country)",
          "Must maintain full-time enrollment",
          "Allowed to work part-time (20 hrs/week during studies)",
          "Full-time work allowed during breaks",
          "Must exit country before expiration",
        ],
      },
    ],
  };

  return (
    <div className="">
      <div className="max-w-full">
        <PageBanner title={"Kickstart Your Visa ApprovalWith 4 Easy Steps"} />
      </div>
      <div className="max-w-8xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Visa Content */}
          <div className="w-full lg:w-9/12">
            <div className="bg-white p-6 rounded-lg  ">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-3">
                  {visaData.title}
                </h1>
                <p className="text-lg text-gray-600">{visaData.overview}</p>
              </div>

              {/* Sections */}
              <div className="space-y-8">
                {visaData.sections.map((section) => (
                  <div
                    key={section.id}
                    className="border-l-2 border-blue-500 pl-6 pb-8"
                  >
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                      {section.title}
                    </h2>
                    <p className="text-gray-700 mb-4">{section.content}</p>

                    {/* Points List */}
                    {section.points && (
                      <ul className="space-y-2 ml-4">
                        {section.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-gray-700"
                          >
                            <span className="text-blue-500 mr-3 mt-1">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Steps List */}
                    {section.steps && (
                      <ol className="space-y-2 ml-4 list-decimal list-inside">
                        {section.steps.map((step, idx) => (
                          <li key={idx} className="text-gray-700">
                            {step}
                          </li>
                        ))}
                      </ol>
                    )}

                    {/* Details Table */}
                    {section.details && (
                      <div className="bg-gray-50 rounded p-4 mt-4">
                        {Object.entries(section.details).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between py-2 border-b border-gray-200 last:border-b-0"
                          >
                            <span className="font-semibold text-gray-700 capitalize">
                              {key}:
                            </span>
                            <span className="text-gray-600">{value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visa Form */}
          <div className="w-full lg:w-3/12">
            <VisaEnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Visa;
