export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35, // delay between cards
    },
  },
};

export const cardVariants = {
  hidden: {
    opacity: 0, 
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 14,
    },
  },
};
