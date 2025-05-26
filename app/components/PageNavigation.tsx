'use client';
import React from 'react';
import { Box, Button } from '@mui/material';
import Link from 'next/link';

interface PageNavigationProps {
  previousPage?: {
    href: string;
    label: string;
  };
  nextPage?: {
    href: string;
    label: string;
  };
}

export default function PageNavigation({ previousPage, nextPage }: PageNavigationProps) {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between', 
        alignItems: { xs: 'stretch', sm: 'center' },
        gap: { xs: 2, sm: 0 },
        mt: 8 
      }}
    >
      {previousPage ? (
        <Button
          variant="outlined"
          component={Link}
          href={previousPage.href}
          sx={{ 
            px: 4, 
            py: 1.5,
            order: { xs: 2, sm: 1 }
          }}
        >
          {previousPage.label}
        </Button>
      ) : (
        <Box sx={{ order: { xs: 2, sm: 1 } }} />
      )}
      
      {nextPage ? (
        <Button
          variant="contained"
          component={Link}
          href={nextPage.href}
          sx={{ 
            px: 4, 
            py: 1.5,
            order: { xs: 1, sm: 2 }
          }}
        >
          {nextPage.label}
        </Button>
      ) : (
        <Box sx={{ order: { xs: 1, sm: 2 } }} />
      )}
    </Box>
  );
} 