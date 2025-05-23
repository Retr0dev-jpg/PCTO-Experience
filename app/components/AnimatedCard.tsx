'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@mui/material';
import { cardVariants } from '../animations';

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  elevation?: number;
  onClick?: () => void;
}

export default function AnimatedCard({ 
  children, 
  delay = 0, 
  className = '',
  elevation = 2,
  onClick 
}: AnimatedCardProps) {
  const cardVariantsWithDelay = {
    ...cardVariants,
    visible: {
      ...cardVariants.visible,
      transition: {
        ...cardVariants.visible.transition,
        delay
      }
    }
  };

  return (
    <motion.div
      variants={cardVariantsWithDelay}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className={className}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <Card 
        elevation={elevation}
        sx={{
          height: '100%',
          borderRadius: 3,
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          border: '1px solid #e2e8f0',
          '&:hover': {
            borderColor: '#0070f3'
          }
        }}
      >
        <CardContent sx={{ height: '100%', p: 3 }}>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
} 