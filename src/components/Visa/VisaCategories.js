import { GraduationCap, Building2, Briefcase } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import visa1 from "../../images/cards/visa-1.jpg";
import visa2 from "../../images/cards/visa-2.jpg";
import visa3 from "../../images/cards/visa-3.jpg";
import CategoriesData from "./CategoriesData";

const visaData = [
  {
    title: "Student Visa",
    image: visa1,
    icon: GraduationCap,
    points: [
      "Nulla nulla erat, gravida at leo",
      "Amet minim mollit no duis deserunt",
      "Dolor do amet sint velit officia",
    ],
  },
  {
    title: "Residence Visa",
    image: visa2,
    icon: Building2,
    overlay: true,
    points: [
      "Quisque tincidunt porta libero",
      "Donec magna sem, consectetur",
      "Pellentesque consequat dignissim velit",
    ],
  },
  {
    title: "Business Visa",
    image: visa3,
    icon: Briefcase,
    points: [
      "Aliquam molestie risus sit amet",
      "Vitae varius quam consequat",
      "Praesent in aliquam felis",
    ],
  },
  {
    title: "Business Visa",
    image: visa3,
    icon: Briefcase,
    points: [
      "Aliquam molestie risus sit amet",
      "Vitae varius quam consequat",
      "Praesent in aliquam felis",
    ],
  },
  {
    title: "Business Visa",
    image: visa3,
    icon: Briefcase,
    points: [
      "Aliquam molestie risus sit amet",
      "Vitae varius quam consequat",
      "Praesent in aliquam felis",
    ],
  },
];

const VisaCategories = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="visa-category-layer absolute inset-0"></div>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="text-center">
            <p className="text-base font-semibold tracking-wide text-brand uppercase">
              Visa Categories
            </p>
            <div className="mt-1 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-brand"></span>

              <span className="text-brand text-sm">★</span>

              <span className="h-px w-12 bg-brand"></span>
            </div>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-brand">
            Assisting you in fulfilling your eligibility{" "}
            <br className="hidden sm:block" />
            for immigrant registration.
          </h2>
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
          {visaData.map((visa, index) => (
            <SwiperSlide key={index}>
              <CategoriesData visa={visa} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VisaCategories;
