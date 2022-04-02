export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transiton: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const titleAnim = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transiton: { ease: "eastOut", duration: 3 },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transiton: { ease: "easeOut", duration: 0.75 } },
};

export const photoAnim = {
  hidden: { scale: 1.2, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 1 } },
};

export const lineAnim = {
  hidden: { width: "0" },
  show: { width: "100%", transition: { duration: 1 } },
};
