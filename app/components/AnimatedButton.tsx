'use client';

import { motion } from 'framer-motion';
import { Button, ButtonProps } from '@mui/material';
import { buttonVariants } from '../animations';

interface AnimatedButtonProps extends ButtonProps {
  gradient?: boolean;
}

export default function AnimatedButton({ 
  children, 
  gradient = false,
  sx,
  ...props 
}: AnimatedButtonProps) {
  const gradientStyle = gradient ? {
    background: 'linear-gradient(135deg, #0070f3 0%, #7c3aed 100%)',
    '&:hover': {
      background: 'linear-gradient(135deg, #0051cc 0%, #6d28d9 100%)',
    }
  } : {};

  return (
    <motion.div
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      style={{ display: 'inline-block' }}
    >
      <Button
        {...props}
        sx={{
          borderRadius: 2,
          textTransform: 'none',
          fontWeight: 600,
          px: 3,
          py: 1.5,
          ...gradientStyle,
          ...sx
        }}
      >
        {children}
      </Button>
    </motion.div>
  );
} 