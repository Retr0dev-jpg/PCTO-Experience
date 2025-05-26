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

export default function MotivazionePage() {
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
            Motivazione
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 4, fontWeight: 400 }}
          >
            Le ragioni che mi hanno spinto a intraprendere questo percorso
          </Typography>
        </Box>

        {/* Content Placeholder */}
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Questa sezione conterrà la tua motivazione personale per il percorso PCTO.
            <br />
            Da personalizzare in base alla tua esperienza e ai tuoi obiettivi.
          </Typography>
        </Box>

        {/* Navigation */}
        <PageNavigation
          previousPage={{ href: "/facilitatori", label: "← Facilitatori" }}
          nextPage={{ href: "/conclusione", label: "Conclusione →" }}
        />
      </Container>
    </Layout>
  );
} 