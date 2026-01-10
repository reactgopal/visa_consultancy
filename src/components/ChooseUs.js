import SectionTitle from "./Common/SectionTitle";
import { ArrowRight } from "lucide-react";

import choose1 from "../images/icons/icon-1.png";
import choose2 from "../images/icons/icon-2.png";
import choose3 from "../images/icons/icon-3.png";
import choose4 from "../images/icons/icon-4.png";

const cardData = [
  {
    image: choose1,
    title: "Fast Delivery",
    description:
      "Where did this incorrect belief that everyone dislikes praising happiness come from?",
  },
  {
    image: choose2,
    title: "24/7 Support",
    description:
      "Where did this incorrect belief that everyone dislikes praising happiness come from?",
  },
  {
    image: choose3,
    title: "Quality Assurance",
    description:
      "Where did this incorrect belief that everyone dislikes praising happiness come from?",
  },
  {
    image: choose4,
    title: "Best Price Guarantee",
    description:
      "Where did this incorrect belief that everyone dislikes praising happiness come from?",
  },
];

const ChooseUs = () => {
  return (
    <>
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <div className="text-center">
              <SectionTitle
                title="Why Choose Us"
                subtitle={
                  <>
                    Offer custom-made services that{" "}
                    <br className="hidden sm:block" />
                    our customer needs.
                  </>
                }
                isCenter={true}
              />
            </div>
          </div>

          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {cardData.map((card, index) => (
              <div key={index} className="group p-6 rounded-lg">
                <img src={card.image} alt={card.title} className="mb-4" />
                <h3 className="text-2xl font-semibold text-brand mb-4">
                  {card.title}
                </h3>
                <p className="text-base text-gray-500 font-medium">
                  {card.description}
                </p>
                {/* right arrow  */}
                {/* <div className="flex justify-start mt-4 hover:">
                  <ArrowRight />
                </div> */}
                <div className="relative w-64 py-4 overflow-hidden cursor-pointer">
                  {/* Icon */}
                  <span
                    className="flex items-center text-gray-700 transition-all duration-300
    group-hover:translate-x-[-100%] group-hover:opacity-0"
                  >
                    <ArrowRight />
                  </span>

                  {/* Hover Text */}
                  <span
                    className="absolute inset-0 flex items-center justify-start
    text-black font-medium
    opacity-0 translate-x-4
    transition-all duration-300
    group-hover:opacity-100 group-hover:translate-x-0"
                  >
                    Read More <ArrowRight />
                  </span>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
};
export default ChooseUs;
