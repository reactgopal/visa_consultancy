import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import CategoriesData from "./CategoriesData";
import SectionTitle from "../Common/SectionTitle";

const VisaCategories = () => {
  const [visaCategory, setVisaCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://192.168.100.11:8008/api/visa-category-list"
      );
      setVisaCategory(response.data?.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

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
          // autoplay={{ delay: 2500 }}
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
