import { Link, useLocation } from "react-router-dom";

const PageBanner = ({ title }) => {
  const location = useLocation();

  return (
    <section className="banner-main relative pt-[174px] pb-[156px]">
      {/* Background Image - Bottom Layer */}
      <div className="banner-bg-image absolute inset-0 z-0" />

      {/* Overlay Pattern (wave + color) */}
      <div className="banner-bg-layer absolute z-30" />

      {/* Content - Top Layer */}
      <div className="relative z-20 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-[54px] font-bold text-white  ">
          {title}
        </h1>
        <ul className="inline-flex items-center justify-center text-white border border-white/20 rounded-md mt-9 py-4 px-6 bg-white/5 backdrop-blur-sm">
          <li>
            <Link to="/" className="text-[18px] hover:underline">
              Home
            </Link>
          </li>

          <li className="px-3 text-white/70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <span className="text-[18px] text-white/90">{title}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PageBanner;
