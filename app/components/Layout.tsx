'use client';
import React from 'react';
import { Box, Toolbar } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

// Animazione solo per il contenuto principale
const contentVariants = {
  initial: {
    opacity: 0,
    filter: 'brightness(5)',
  },
  in: {
    opacity: 1,
    filter: 'brightness(1)',
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    }
  },
  out: {
    opacity: 0,
    filter: 'brightness(5)',
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.6, 1],
    }
  }
};

const contentTransition = {
  type: 'tween',
  ease: [0.4, 0, 0.2, 1],
  duration: 0.8
};

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header - SEMPRE STATICO */}
      <Navbar />
      <Toolbar />
      
      {/* Main Content - SOLO QUESTO VIENE ANIMATO */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={contentVariants}
            style={{ width: '100%', height: '100%' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </Box>
      
      {/* Footer - SEMPRE STATICO */}
      <Footer />
    </Box>
  );
} 