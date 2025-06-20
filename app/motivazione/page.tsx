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

        </Box>

        {/* Motivazione Content */}
        <Box sx={{ mb: 8 }}>
          <Box
            sx={{
              p: 6,
              mb: 6,
              backgroundColor: 'grey.50',
              borderRadius: '16px',
              border: '1px solid',
              borderColor: 'grey.200',
            }}
          >
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Ho affrontato questo percorso con una grande motivazione perché sin da piccolo ho sempre avuto una grande passione per i dispositivi elettronici e per i programmi software e hardware. Questa curiosità innata mi ha sempre spinto a smontare e rimontare oggetti per capire come funzionassero.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Aver avuto la possibilità di trasformare questa passione in un'esperienza lavorativa concreta è stato per me motivo di grande entusiasmo. Sapevo che avrei finalmente potuto mettere in pratica quello che avevo sempre studiato e sperimentato come hobby, apprendendo al contempo le dinamiche professionali del settore tecnologico.
            </Typography>
          </Box>

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