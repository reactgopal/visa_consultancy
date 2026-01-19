import { Link, useLocation, useParams } from "react-router-dom";
import useCategories from "../../utils/useCategories";

const Breadcrumb = () => {
  const { id } = useParams();
  const location = useLocation();
  const categories = useCategories();

  let category = null;
  let subCategory = null;
  let others = null;

  // CASE 1: Main Category Page → /visa/2
  if (
    location.pathname.startsWith("/visa/") &&
    !location.pathname.includes("subcategory")
  ) {
    category = categories?.find((cat) => String(cat.id) === String(id));
  }

  // CASE 2: Sub Category Page → /visa/subcategory/5
  if (location.pathname.includes("subcategory")) {
    categories?.forEach((cat) => {
      const foundSub = cat.sub_category?.find(
        (sub) => String(sub.id) === String(id)
      );

      if (foundSub) {
        category = cat;
        subCategory = foundSub;
      }
    });
  }

  // CASE 3: IN .
  if (location.pathname.includes("appointment")) {
    others = "Book An Appointment";
  }

  return (
    <ul className="inline-flex items-center justify-center text-white border border-white/20 rounded-md mt-9 py-4 px-6 bg-white/5 backdrop-blur-sm">
      {/* Home */}
      <li>
        <Link to="/" className="text-[18px] hover:underline">
          Home
        </Link>
      </li>

      {/* Arrow */}
      {category && (
        <>
          <li className="px-3 text-white/70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          {/* Category */}
          <li>
            <Link
              to={`/visa/${category.id}`}
              className="text-[18px] hover:underline"
            >
              {category.title}
            </Link>
          </li>
        </>
      )}

      {/* Sub Category */}
      {subCategory && (
        <>
          <li className="px-3 text-white/70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <span className="text-[18px] text-white/90">
              {subCategory.title}
            </span>
          </li>
        </>
      )}
      {others && (
        <>
          <li className="px-3 text-white/70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <span className="text-[18px] text-white/90">{others}</span>
          </li>
        </>
      )}
    </ul>
  );
};

export default Breadcrumb;
