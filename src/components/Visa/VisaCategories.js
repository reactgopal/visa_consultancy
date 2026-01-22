import { Link } from "react-router-dom";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import CategoriesData from "./CategoriesData";
import SectionTitle from "../Common/SectionTitle";
import useCategories from "../../utils/useCategories";
import Shimmer from "../Common/Shimmer";

const VisaCategories = () => {
  const { visaCategory, loading } = useCategories();
  if (loading) return <Shimmer />;

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="visa-category-layer absolute inset-0"></div>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="text-center">
            <SectionTitle
              title="Visa Categories"
              subtitle={
                <>
                  Assisting you in fulfilling your eligibility{" "}
                  <br className="hidden sm:block" />
                  for immigrant registration.
                </>
              }
              isCenter={true}
            />
          </div>
        </div>

        {/* Cards */}

        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          speed={1200}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {visaCategory?.map((visaCategoryData, index) => (
            <SwiperSlide key={visaCategoryData?.id}>
              <Link to={`/visa/${visaCategoryData?.id}`}>
                <CategoriesData visaCategory={visaCategoryData} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VisaCategories;
