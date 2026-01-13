import Breadcrumb from "../Common/Breadcrumb";

const PageBanner = ({ title }) => {
  return (
    <section className="banner-main relative pt-[174px] pb-[156px]">
      {/* Background Image - Bottom Layer */}
      <div className="banner-bg-image absolute inset-0 z-0" />

      {/* Overlay Pattern (wave + color) */}
      <div className="banner-bg-layer absolute z-30" />

      {/* Content - Top Layer */}
      <div className="relative z-40 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl  md:text-6xl font-bold text-white capitalize">
          {title}
        </h1>
        {/* Breadcrumb */}
        <Breadcrumb />
      </div>
    </section>
  );
};

export default PageBanner;
