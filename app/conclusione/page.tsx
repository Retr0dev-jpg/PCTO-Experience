'use client';
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  Divider,
} from '@mui/material';
import {
  EmojiEvents,
  Psychology,
  TrendingUp,
} from '@mui/icons-material';
import Link from 'next/link';
import Layout from '../components/Layout';
import PageNavigation from '../components/PageNavigation';

export default function ConclusionePage() {
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
            Conclusioni
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 4, fontWeight: 400 }}
          >
            Riflessioni finali sul percorso PCTO
          </Typography>
        </Box>

        {/* Main Content */}
        <Paper
          elevation={0}
          sx={{
            p: 6,
            mb: 6,
            backgroundColor: 'grey.50',
            borderRadius: '16px',
            border: '1px solid',
            borderColor: 'grey.200',
          }}
        >
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
            Tre Mesi che Mi Hanno Cambiato
          </Typography>
          


          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Questa esperienza mi ha aiutato a comprendere come orientarmi nel mondo del lavoro quando avrò finito il percorso di studi e cioè che lavorare nel campo della tecnologia mi interessa molto e spero di poter proseguire su questa strada.
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Ho appreso molte competenze tecniche ed ho avuto la possibilità di imparare a lavorare insieme agli altri, competenze che spero mi saranno utili quando riuscirò ad entrare nel mondo del lavoro.
          </Typography>



          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            La cosa più bella che ho imparato da questa esperienza è che quando fai qualcosa che ti piace non ti pesa mai anche se si tratta di un lavoro.
          </Typography>
        </Paper>





        {/* Final Thoughts */}
        <Paper
          elevation={0}
          sx={{
            p: 6,
            mb: 6,
            backgroundColor: 'primary.50',
            borderRadius: '16px',
            border: '1px solid',
            borderColor: 'primary.100',
            textAlign: 'center',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3, color: 'primary.main' }}>
            <EmojiEvents sx={{ fontSize: 48 }} />
          </Box>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
            Il Futuro Inizia Ora
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: 'italic', mb: 2 }}>
            "L'importante non è sapere tutto, ma sapere dove trovare quello che non sai. 
            E soprattutto, non aver mai paura di ammettere quando non sai qualcosa."
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
            — Marco (il mio mentore), frase che porterò sempre con me
          </Typography>
        </Paper>

        {/* Navigation */}
        <PageNavigation
          previousPage={{ href: "/motivazione", label: "← Motivazione" }}
          nextPage={{ href: "/", label: "Torna alla Home" }}
        />
      </Container>
    </Layout>
  );
} 