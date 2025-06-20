'use client';
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
} from '@mui/material';
import Link from 'next/link';
import Layout from '../components/Layout';
import PageNavigation from '../components/PageNavigation';

export default function FacilitatoriPage() {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h1"
            sx={{
              mb: 3,
              background: 'linear-gradient(135deg, #0070f3 0%, #7c3aed 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            }}
          >
            Facilitatori
          </Typography>
        </Box>

        {/* Content */}
        <Box sx={{ mb: 8 }}>
          <Box
            sx={{
              p: 6,
              backgroundColor: 'grey.50',
              borderRadius: '16px',
              border: '1px solid',
              borderColor: 'grey.200',
            }}
          >
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Il tutor aziendale è stato un elemento fondamentale per il successo della mia esperienza PCTO. Ha mostrato grande disponibilità sia nel trasmettermi le conoscenze tecniche necessarie, sia nel trasmettermi fiducia assegnandomi compiti da svolgere in autonomia.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              La sua pazienza nel spiegarmi ogni processo e la sua capacità di farmi sentire parte del team mi hanno permesso di superare le difficoltà iniziali e di crescere professionalmente. Grazie al suo supporto costante, ho potuto sviluppare sicurezza nelle mie competenze e autonomia nel lavoro.
            </Typography>
          </Box>
        </Box>

        {/* Navigation */}
        <PageNavigation
          previousPage={{ href: "/difficolta", label: "← Difficoltà" }}
          nextPage={{ href: "/motivazione", label: "Motivazione →" }}
        />
      </Container>
    </Layout>
  );
} 