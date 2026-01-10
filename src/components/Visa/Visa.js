import { Link, useParams, useMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import VisaEnquiryForm from "./VisaEnquiryForm";
import PageBanner from "../PageBanner/PageBanner";
import Loaders from "../Common/Loader";
import NotFound from "../../pages/NotFound";

const Visa = () => {
  const { id } = useParams();
  // const salt = Math.random().toString(36).substring(2, 8);
  // const randomId = btoa(id + "|" + salt);
  // console.log(randomId,"randomId")

  const isSubCategory = useMatch("/visa/subcategory/:id");
  console.log(isSubCategory, "isSubCategory");
  const [visaDetails, setVisaDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const url = isSubCategory
        ? `http://192.168.100.11:8008/api/visa-sub-category-details/${id}`
        : `http://192.168.100.11:8008/api/visa-category-details/${id}`;

      const response = await axios.get(url);

      setVisaDetails(response.data.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) return <Loaders />;
  if (error) return <NotFound />;

  return (
    <div className="">
      <div className="max-w-full">
        <PageBanner title={visaDetails?.title} />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Visa Content */}
          <div className="w-full lg:w-9/12">
            <div className="bg-white p-6 rounded-lg  ">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-brand mb-3">
                  {visaDetails?.title}
                </h1>
                <p
                  className="text-lg text-gray-500 font-medium"
                  dangerouslySetInnerHTML={{
                    __html: visaDetails?.description,
                  }}
                ></p>
                {/* image */}
                {isSubCategory ? null : (
                  <div className="my-6">
                    <img
                      src={visaDetails?.image}
                      alt={visaDetails?.title}
                      className="w-full h-64 object-cover rounded"
                    />
                  </div>
                )}
              </div>

              {/* Sections */}
              <div className="space-y-8">
                {/* main table of content section */}
                {visaDetails?.main_table_of_content?.length > 0 && (
                  <div className="">
                    <h2 className="text-2xl font-bold text-brand mb-5">
                      Table of Contents
                    </h2>
                    <ul className="space-y-2 bg-gray-50 p-6  rounded">
                      {visaDetails?.main_table_of_content?.map(
                        (content, index) => (
                          <li
                            key={content?.id}
                            className="flex items-start text-gray-700"
                          >
                            <span className="mr-3 ">⇨</span>
                            <span
                              onClick={() => {
                                document
                                  .getElementById(`section-${content.id}`)
                                  ?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                  });
                              }}
                              className="underline hover:text-brand cursor-pointer"
                            >
                              {content?.title}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
                {/* table of content section */}
                {visaDetails?.table_of_content && (
                  <div className=" ">
                    <h2 className="text-2xl font-bold text-brand mb-5">
                      Table of Contents
                    </h2>
                    <ul className="space-y-2 bg-gray-50 p-6  rounded">
                      {visaDetails?.table_of_content?.map((content, index) => (
                        <li
                          key={content?.id}
                          className="flex items-start text-gray-700"
                        >
                          <span className="mr-3 ">⇨</span>
                          <span
                            onClick={() => {
                              document
                                .getElementById(`section-${content.id}`)
                                ?.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                            }}
                            className="underline hover:text-brand cursor-pointer"
                          >
                            {content?.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* section title list show */}
                {visaDetails?.sub_category?.length > 0 && (
                  <div className="mb-12 ">
                    <h2 className="text-2xl font-bold text-brand mb-5">
                      Most Common Types of {visaDetails?.title}
                    </h2>

                    <div className="space-y-6">
                      {visaDetails?.sub_category?.map((section, index) => (
                        <Link
                          key={section?.id}
                          to={`/visa/subcategory/${section?.id}`}
                          className="group flex items-center text-lg gap-2 border-b border-brand-600 group-hover:border-brand transition"
                        >
                          <span className="text-lg text-brand-600 font-semibold pb-3">
                            {index + 1}.
                          </span>
                          <div className="flex items-center justify-between flex-1 pb-3">
                            <p className="font-medium text-brand-600 group-hover:text-brand transition">
                              {section?.title}
                            </p>
                            <span className="text-brand-600 group-hover:translate-x-1 transition-transform ml-3">
                              →
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {visaDetails?.table_of_content &&
                  visaDetails?.table_of_content.map((content, index) => (
                    <div
                      key={content?.id}
                      className="mb-12"
                      id={`section-${content.id}`}
                    >
                      <h2 className="text-2xl font-bold text-brand mb-5">
                        {content?.title}
                      </h2>
                      <p className="text-base text-gray-500 font-medium mb-4">
                        {content?.description}
                      </p>
                      {/* Points List */}
                      {content?.bullets && (
                        <ul className="space-y-2 list-decimal list-inside">
                          {content?.bullets.map((bullet, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-gray-500 font-medium"
                            >
                              <span className="text-brand-600">▷</span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                {visaDetails?.main_table_of_content?.length > 0 &&
                  visaDetails?.main_table_of_content.map((content, index) => (
                    <div
                      key={content?.id}
                      className="mb-12"
                      id={`section-${content.id}`}
                    >
                      <h2 className="text-2xl font-bold text-brand mb-5">
                        {content?.title}
                      </h2>
                      <p className="text-base text-gray-500 font-medium mb-4">
                        {content?.description}
                      </p>
                      {/* Points List */}
                      {content?.bullets && (
                        <ul className="space-y-2 list-decimal list-inside">
                          {content?.bullets.map((bullet, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-gray-500 font-medium"
                            >
                              <span className="text-brand-600">▷</span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
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
