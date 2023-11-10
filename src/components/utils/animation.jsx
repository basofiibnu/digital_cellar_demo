export const fadeInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};
export const fadeInFromRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};
export const fadeIn = {
  hidden: { opacity: 0, x: 0 },
  show: { opacity: 1, x: 0 },
};
export const fadeInFromTop = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 1, y: -50 },
};
export const fadeInFromBottom = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};
