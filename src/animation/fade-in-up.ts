import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: [20, -5, 0] as number[], // <-- Fix here
    transition: {
      duration: 1.5,
      ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number], // <-- Fix here
    },
  },
};
