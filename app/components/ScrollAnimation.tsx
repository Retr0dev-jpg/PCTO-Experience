'use client';

import { motion } from 'framer-motion';
import { slideInVariants, textVariants } from '../animations';

interface ScrollAnimationProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up';
  delay?: number;
  className?: string;
}

export default function ScrollAnimation({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}: ScrollAnimationProps) {
  const variants = direction === 'up' ? textVariants : slideInVariants[direction];
  
  const variantsWithDelay = {
    hidden: variants.hidden,
    visible: {
      ...variants.visible,
      transition: {
        ...variants.visible.transition,
        delay
      }
    }
  };

  return (
    <motion.div
      variants={variantsWithDelay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 