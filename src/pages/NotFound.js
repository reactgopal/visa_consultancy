import { Link } from "react-router-dom";
import errorImage from "../images/error-1.png";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-3xl w-full text-center">
        {/* 404 Block */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 mb-8">
          {/* 4 */}
          <span className="text-[120px] sm:text-[160px] lg:text-[200px] font-extrabold text-gray-800 leading-none">
            4
          </span>

          {/* Image */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44">
            <img
              src={errorImage}
              alt="error"
              className="w-full h-full object-contain"
            />
          </div>

          {/* 4 */}
          <span className="text-[120px] sm:text-[160px] lg:text-[200px] font-extrabold text-gray-800 leading-none">
            4
          </span>
        </div>

        {/* Not Found */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
          Not Found
        </h2>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Sorry, Something Went Wrong
        </h1>

        {/* Description */}
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Oops! The page you are looking for does not exist. Please return to
          the site’s homepage.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-3 text-white text-sm font-semibold shadow-md hover:bg-indigo-700 transition"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
