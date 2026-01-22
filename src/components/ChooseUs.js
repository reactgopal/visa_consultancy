import { useEffect, useState } from "react";
import { motion } from "motion/react";
import axios from "axios";
import { ArrowRight } from "lucide-react";

import SectionTitle from "./Common/SectionTitle";
import { COMPANY_ADVANTAGES_API } from "../utils/constants";
import { cardVariants, containerVariants } from "../utils/animation";

const ChooseUs = () => {
  const [companyList, setCompanyList] = useState(null);
  const getCompanyData = async () => {
    const response = await axios.get(COMPANY_ADVANTAGES_API);
    setCompanyList(response.data.data);
  };
  useEffect(() => {
    getCompanyData();
  }, []);

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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-10"
          >
            {companyList?.map((card, index) => (
              <motion.div
                key={card?.id}
                variants={cardVariants}
                className="group p-6 rounded-lg"
              >
                <img src={card?.image} alt={card?.title} className="mb-4" />
                <h3 className="text-2xl font-semibold text-brand mb-4">
                  {card?.title}
                </h3>
                <p className="text-base text-gray-500 font-medium">
                  {card?.description}
                </p>
                {/* right arrow  */}
                {/* <div className="flex justify-start mt-4 hover:">
                  <ArrowRight />
                </div> */}
                {/* <div className="relative w-64 py-4 overflow-hidden cursor-pointer">
                  <span
                    className="flex items-center text-gray-700 transition-all duration-300
    group-hover:translate-x-[-100%] group-hover:opacity-0"
                  >
                    <ArrowRight />
                  </span>

                  <span
                    className="absolute inset-0 flex items-center justify-start
    text-black font-medium
    opacity-0 translate-x-4
    transition-all duration-300
    group-hover:opacity-100 group-hover:translate-x-0"
                  >
                    Read More <ArrowRight />
                  </span>
                </div> */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default ChooseUs;
