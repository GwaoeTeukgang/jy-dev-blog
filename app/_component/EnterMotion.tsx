'use client';
import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function EnterMotion({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode={'wait'}>
      <motion.div
        initial={animate.initial}
        animate={animate.animate}
        exit={animate.exit}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

const animate = {
  initial: {
    translateY: 50,
    opacity: 0,
    transition: { duration: 0.3 },
  },
  animate: {
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    translateY: 50,
    opacity: 0,
    transition: { duration: 0.3 },
  },
};
