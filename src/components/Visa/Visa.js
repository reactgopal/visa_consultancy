import { useParams, useMatch, Link } from "react-router-dom";

// Components
import VisaEnquiryForm from "./VisaEnquiryForm";
import PageBanner from "../PageBanner/PageBanner";
import Loaders from "../Common/Loader";
import NotFound from "../../pages/NotFound";
import TableOfContents from "./TableOfContents";

// Custom hooks
import useVisaData from "../../utils/useVisaData";

/**
 * Main Visa component for displaying visa details.
 * Handles routing, data fetching, and layout for both main categories and subcategories.
 */
const Visa = () => {
  const { id } = useParams();
  const isSubCategory = useMatch("/visa/subcategory/:id");
  const { visaDetails, loading, error } = useVisaData(id, !!isSubCategory);

  // Early returns for loading and error states
  if (loading) return <Loaders />;
  if (error) return <NotFound />;

  return (
    <div>
      <PageBanner title={visaDetails?.title} />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content Area */}
          <div className="w-full lg:w-9/12">
            <div className="bg-white p-6 rounded-lg">
              {/* Header Section */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-brand mb-3 capitalize">
                  {visaDetails?.title}
                </h1>
                <div className="h-[2px] w-20 bg-brand mb-5"></div>
                <p
                  className="text-lg text-gray-500 font-medium"
                  dangerouslySetInnerHTML={{ __html: visaDetails?.description }}
                />
                {/* Image - only show for main categories */}
                {!isSubCategory && (
                  <div className="my-6">
                    <img
                      src={visaDetails?.image}
                      alt={visaDetails?.title}
                      className="w-full h-64 object-cover rounded"
                    />
                  </div>
                )}
              </div>

              {/* Content Sections */}
              <div className="space-y-8">
                {/* Table of Contents - both main and regular */}
                <TableOfContents
                  contents={visaDetails?.main_table_of_content}
                />
                <TableOfContents contents={visaDetails?.table_of_content} />

                {/* Subcategories List */}
                {visaDetails?.sub_category?.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-brand mb-5">
                      Most Common Types of {visaDetails?.title}
                    </h2>
                    <div className="space-y-3">
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

                {/* Main Table Content Sections */}
                {visaDetails?.main_table_of_content?.map((content) => (
                  <div
                    key={content?.id}
                    className="mb-12"
                    id={`section-${content.id}`}
                  >
                    <h2 className="text-2xl font-bold text-brand mb-5">
                      {content?.title}
                    </h2>
                    <p
                      className="text-base text-gray-500 font-medium mb-4"
                      dangerouslySetInnerHTML={{ __html: content?.description }}
                    />
                  </div>
                ))}

                {/* Regular Table Content Sections */}
                {visaDetails?.table_of_content?.map((content) => (
                  <div
                    key={content?.id}
                    className="mb-12"
                    id={`section-${content.id}`}
                  >
                    <h2 className="text-2xl font-bold text-brand mb-5">
                      {content?.title}
                    </h2>
                    <p
                      className="text-base text-gray-500 font-medium mb-4"
                      dangerouslySetInnerHTML={{ __html: content?.description }}
                    />
                    {/* Bullets List */}
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

          {/* Sidebar - Enquiry Form */}
          <div className="w-full lg:w-3/12">
            <VisaEnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visa;
