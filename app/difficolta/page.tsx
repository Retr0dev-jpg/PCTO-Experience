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

        </Box>

        {/* Difficoltà Content */}
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
              Durante i primi giorni di PCTO ho incontrato alcune difficoltà che mi hanno aiutato a crescere professionalmente. La principale è stata l'iniziale difficoltà nel relazionarmi con i clienti: ero timido e non sapevo come approcciarmi, specialmente quando dovevo spiegare problemi tecnici in modo semplice.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Un'altra sfida significativa è stata muovermi efficacemente nel laboratorio a causa del disordine delle attrezzature e dei componenti. All'inizio perdevo molto tempo a cercare gli strumenti giusti, ma col tempo ho imparato ad organizzarmi meglio e a conoscere la disposizione di tutto il materiale.
            </Typography>
          </Box>
        </Box>

        {/* Navigation */}
        <PageNavigation
          previousPage={{ href: "/competenze", label: "← Competenze" }}
          nextPage={{ href: "/facilitatori", label: "Facilitatori →" }}
        />
      </Container>
    </Layout>
  );
} 