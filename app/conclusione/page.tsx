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
            Cosa ho imparato
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            L'esperienza PCTO è stata molto più di un semplice stage: è stata un'opportunità 
            di crescita personale e professionale che mi ha permesso di sviluppare competenze 
            fondamentali per il mio futuro.
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Attraverso questo percorso ho imparato non solo competenze tecniche specifiche, 
            ma soprattutto soft skills che saranno preziose in qualsiasi contesto lavorativo: 
            la capacità di lavorare in team, di gestire il tempo, di comunicare efficacemente 
            e di adattarmi a situazioni nuove.
          </Typography>
        </Paper>

        {/* Competenze Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, textAlign: 'center' }}>
            Competenze Specifiche e Trasversali
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            {/* Competenze Specifiche */}
            <Paper
              elevation={0}
              sx={{
                flex: 1,
                p: 4,
                borderRadius: '12px',
                border: '1px solid',
                borderColor: 'grey.200',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, color: 'primary.main' }}>
                <Psychology />
                <Typography variant="h6" sx={{ ml: 1, fontWeight: 600 }}>
                  Competenze Specifiche
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                Le competenze tecniche e operative apprese durante il PCTO, 
                direttamente applicabili nel settore di riferimento e nel mio 
                percorso di studi.
              </Typography>
            </Paper>

            {/* Soft Skills */}
            <Paper
              elevation={0}
              sx={{
                flex: 1,
                p: 4,
                borderRadius: '12px',
                border: '1px solid',
                borderColor: 'grey.200',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, color: 'secondary.main' }}>
                <TrendingUp />
                <Typography variant="h6" sx={{ ml: 1, fontWeight: 600 }}>
                  Soft Skills
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                Le competenze trasversali che mi accompagneranno in ogni ambito: 
                comunicazione, problem solving, lavoro di squadra e adattabilità.
              </Typography>
            </Paper>
          </Box>
        </Box>

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
            Un'esperienza trasformativa
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Il PCTO mi ha insegnato che l'apprendimento non avviene solo sui libri, 
            ma soprattutto attraverso l'esperienza diretta. Ogni sfida superata, 
            ogni collaborazione e ogni momento di difficoltà sono stati opportunità 
            di crescita che porterò con me nel mio futuro.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: 'italic', mb: 2 }}>
            "Non è ciò che ti succede, ma come reagisci a ciò che ti succede che conta."
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
            — Marco Simone
          </Typography>
        </Paper>

        {/* Navigation */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 8 }}>
          <Button
            variant="outlined"
            component={Link}
            href="/motivazione"
            sx={{ px: 4, py: 1.5 }}
          >
            ← Motivazione
          </Button>
          <Button
            variant="contained"
            component={Link}
            href="/"
            sx={{ px: 4, py: 1.5 }}
          >
            Torna alla Home
          </Button>
        </Box>
      </Container>
    </Layout>
  );
} 