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

export default function DifficoltaPage() {
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
            Difficoltà Incontrate
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 4, fontWeight: 400 }}
          >
            Le sfide superate durante il percorso
          </Typography>
        </Box>

        {/* Content Placeholder */}
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Questa sezione conterrà il dettaglio delle difficoltà incontrate e come sono state superate.
            <br />
            Da personalizzare in base alla tua esperienza PCTO.
          </Typography>
        </Box>

        {/* Navigation */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 8 }}>
          <Button
            variant="outlined"
            component={Link}
            href="/competenze"
            sx={{ px: 4, py: 1.5 }}
          >
            ← Competenze
          </Button>
          <Button
            variant="contained"
            component={Link}
            href="/facilitatori"
            sx={{ px: 4, py: 1.5 }}
          >
            Facilitatori →
          </Button>
        </Box>
      </Container>
    </Layout>
  );
} 