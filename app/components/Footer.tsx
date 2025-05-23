'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Divider,
  IconButton,
  Tooltip,
  Button,
} from '@mui/material';
import { GitHub, Email, Instagram } from '@mui/icons-material';

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
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 2fr 1fr' },
            gap: 4,
            alignItems: 'center',
          }}
        >
          {/* Sezione Principale */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'primary.main' }}>
              PCTO Experience
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: '300px' }}>
              Documentazione del percorso di apprendimento e crescita professionale 
              di Marco Simone durante l'esperienza PCTO.
            </Typography>
          </Box>

          {/* Sezione Contatti */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
              Contatti
            </Typography>
            
            {/* GitHub - Prima riga centrato */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
              <Button
                variant="outlined"
                startIcon={<GitHub />}
                component="a"
                href="https://github.com/Retr0dev-jpg"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textTransform: 'none',
                  borderRadius: 2,
                  px: 3,
                  py: 1,
                  minWidth: '160px',
                  '&:hover': {
                    backgroundColor: '#24292e',
                    borderColor: '#24292e',
                    color: 'white',
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                @Retr0dev-jpg
              </Button>
            </Box>

            {/* Email e Instagram - Seconda riga affiancati e centrati */}
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
              <Button
                variant="outlined"
                startIcon={<Email />}
                component="a"
                href="mailto:marco_simone@svago.online"
                sx={{
                  textTransform: 'none',
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                  minWidth: '120px',
                  '&:hover': {
                    backgroundColor: '#ea4335',
                    borderColor: '#ea4335',
                    color: 'white',
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                Email
              </Button>

              <Button
                variant="outlined"
                startIcon={<Instagram />}
                component="a"
                href="https://instagram.com/_.marco_simone._"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textTransform: 'none',
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                  minWidth: '120px',
                  '&:hover': {
                    backgroundColor: '#E4405F',
                    borderColor: '#E4405F',
                    color: 'white',
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                Instagram
              </Button>
            </Box>
          </Box>

          {/* Sezione Copyright */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              © {currentYear} Marco Simone Cannizzaro
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
              Elaborato per l'Esame di Stato 2025
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Next.js • Material UI • TypeScript
            </Typography>
          </Box>
        </Box>

        {/* Divider e licenza */}
        <Divider sx={{ my: 3 }} />
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            Questo progetto è distribuito sotto licenza{' '}
            <Box component="span" sx={{ fontWeight: 600 }}>
              CC BY-NC-SA 4.0
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
} 