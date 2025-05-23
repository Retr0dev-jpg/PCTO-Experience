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
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 4, fontWeight: 400 }}
          >
            L'ambiente di lavoro, i colleghi e i tutor che hanno supportato il mio apprendimento
          </Typography>
        </Box>

        {/* Content Placeholder */}
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Questa sezione conterrà il dettaglio delle persone e dell'ambiente che hanno facilitato il tuo apprendimento.
            <br />
            Da personalizzare in base alla tua esperienza PCTO.
          </Typography>
        </Box>

        {/* Navigation */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 8 }}>
          <Button
            variant="outlined"
            component={Link}
            href="/difficolta"
            sx={{ px: 4, py: 1.5 }}
          >
            ← Difficoltà
          </Button>
          <Button
            variant="contained"
            component={Link}
            href="/motivazione"
            sx={{ px: 4, py: 1.5 }}
          >
            Motivazione →
          </Button>
        </Box>
      </Container>
    </Layout>
  );
} 