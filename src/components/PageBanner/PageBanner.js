import { motion } from "motion/react";

import Breadcrumb from "../Common/Breadcrumb";

const PageBanner = ({ title }) => {
  return (
    <section className="banner-main relative pt-[174px] pb-[156px]">
      {/* Background Image - Bottom Layer */}
      <div className="banner-bg-image absolute inset-0 z-0" />

      {/* Overlay Pattern (wave + color) */}
      <div className="banner-bg-layer absolute z-30" />

      {/* Content - Top Layer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-40 max-w-7xl mx-auto text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white capitalize"
        >
          {title}
        </motion.h1>

        {/* Breadcrumb */}
        <Breadcrumb />
      </motion.div>
    </section>
  );
};

export default PageBanner;
