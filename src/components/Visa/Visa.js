import VisaEnquiryForm from "./VisaEnquiryForm";
import PageBanner from "../PageBanner/PageBanner";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Visa = () => {
  const { id } = useParams();
  const [visaDetails, setVisaDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://192.168.100.11:8008/api/visa-category-details/${id}`
      );
      setVisaDetails(response?.data.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="">
      <div className="max-w-full">
        <PageBanner title={visaDetails?.title} />
      </div>
      <div className="max-w-8xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Visa Content */}
          <div className="w-full lg:w-9/12">
            <div className="bg-white p-6 rounded-lg  ">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-3">
                  {visaDetails?.title}
                </h1>
                <p
                  className="text-lg text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: visaDetails.description,
                  }}
                ></p>
                {/* image */}
                <div className="my-6">
                  <img
                    src={visaDetails?.image}
                    alt={visaDetails?.title}
                    className="w-full h-64 object-cover rounded"
                  />
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-8">
                {/* section title list show */}
                {visaDetails.sub_category.length > 0 && (
                  <div className="mb-12 bg-gradient-to-br from-brand-50 to-white border border-brand-200 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">
                      Most Common Types of {visaDetails?.title}
                    </h2>

                    <div className="space-y-6">
                      {visaDetails.sub_category.map((section, index) => (
                        <Link
                          key={section.id}
                          to={`/visa/${section.id}`}
                          className="group flex items-start gap-4"
                        >
                          {/* Step circle */}
                          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-600 text-white font-semibold shadow">
                            {index + 1}
                          </span>

                          <div className="pb-6 border-b border-gray-200 group-hover:border-brand-600 transition">
                            <p className="text-lg font-medium text-gray-800 group-hover:text-brand-600">
                              {section.title}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* {visaDetails?.sub_category?.map((section) => (
                  <div
                    key={section.id}
                    className="border-l-2 border-blue-500 pl-6 pb-8"
                  >
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                      {section?.title}
                    </h2>
                    <p className="text-gray-700 mb-4">{section?.description}</p> */}

                {/* Points List */}
                {/* {section?.points && (
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
                    )} */}

                {/* Steps List */}
                {/* {section?.steps && (
                      <ol className="space-y-2 ml-4 list-decimal list-inside">
                        {section.steps.map((step, idx) => (
                          <li key={idx} className="text-gray-700">
                            {step}
                          </li>
                        ))}
                      </ol>
                    )} */}

                {/* Details Table */}
                {/* {section?.details && (
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
                    )} */}
                {/* </div>
                ))} */}
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
