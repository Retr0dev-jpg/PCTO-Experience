'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Divider,
  IconButton,
  Tooltip,
} from '@mui/material';
import { GitHub } from '@mui/icons-material';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 6,
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderTopColor: 'grey.200',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'flex-start' },
            gap: 3,
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              PCTO Experience
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Documentazione del percorso di apprendimento di Marco Simone
            </Typography>
            
            {/* Social Links */}
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
              <Tooltip title="GitHub - Retr0dev-jpg">
                <IconButton
                  component="a"
                  href="https://github.com/Retr0dev-jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  <GitHub />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          <Box sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
            <Typography variant="body2" color="text.secondary">
              © {currentYear} Marco Simone Cannizzaro
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              Creato con Next.js e Material UI
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 