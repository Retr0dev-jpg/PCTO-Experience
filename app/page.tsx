'use client';
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  IconButton,
  Tooltip,
  Paper,
} from '@mui/material';
import {
  School,
  TrendingUp,
  Group,
  EmojiEvents,
  Psychology,
  Assignment,
  GitHub,
  Code,
} from '@mui/icons-material';
import Link from 'next/link';
import Layout from './components/Layout';

const featureCards = [
  {
    icon: <Assignment />,
    title: 'Descrizione',
    description: 'Panoramica completa delle esperienze vissute da Marco Simone durante il PCTO',
    href: '/descrizione',
  },
  {
    icon: <EmojiEvents />,
    title: 'Obiettivi',
    description: 'Gli obiettivi formativi raggiunti durante il percorso',
    href: '/obiettivi',
  },
  {
    icon: <Psychology />,
    title: 'Competenze',
    description: 'Le competenze specifiche sviluppate e acquisite',
    href: '/competenze',
  },
  {
    icon: <TrendingUp />,
    title: 'Crescita',
    description: 'Difficoltà superate e facilitatori che hanno supportato l\'apprendimento',
    href: '/difficolta',
  },
  {
    icon: <Group />,
    title: 'Facilitatori',
    description: 'Le persone e l\'ambiente che hanno supportato l\'apprendimento',
    href: '/facilitatori',
  },
  {
    icon: <School />,
    title: 'Conclusioni',
    description: 'Riflessioni finali su competenze trasversali e soft skills apprese',
    href: '/conclusione',
  },
];

export default function Home() {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h1"
            sx={{
              mb: 3,
              background: 'linear-gradient(135deg, #0070f3 0%, #7c3aed 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 800,
            }}
          >
            La Mia Esperienza PCTO
          </Typography>
          <Typography
            variant="h4"
            color="text.secondary"
            sx={{ mb: 2, fontWeight: 400 }}
          >
            Marco Simone
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 4, fontWeight: 300 }}
          >
            Un percorso di crescita professionale e personale
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: '600px', mx: 'auto', fontSize: '1.125rem' }}
          >
            Esplora il mio viaggio attraverso il PCTO, dalle competenze acquisite 
            alle sfide superate, fino alle riflessioni finali su questo importante 
            percorso formativo.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/descrizione"
              sx={{ px: 4, py: 1.5 }}
            >
              Inizia l\'esplorazione
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="/conclusione"
              sx={{ px: 4, py: 1.5 }}
            >
              Vai alle conclusioni
            </Button>
          </Box>
        </Box>

        {/* Feature Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {featureCards.map((card, index) => (
            <Card
              key={index}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                    color: 'primary.main',
                  }}
                >
                  {card.icon}
                  <Typography variant="h6" sx={{ ml: 1, fontWeight: 600 }}>
                    {card.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  component={Link}
                  href={card.href}
                  sx={{ ml: 1 }}
                >
                  Scopri di più →
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>

        {/* Portfolio & Contatti Section */}
        <Paper
          elevation={0}
          sx={{
            mt: 12,
            p: 6,
            backgroundColor: 'grey.50',
            borderRadius: '16px',
            border: '1px solid',
            borderColor: 'grey.200',
            textAlign: 'center',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3, color: 'primary.main' }}>
            <Code sx={{ fontSize: 48 }} />
          </Box>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
            Portfolio & Progetti
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '500px', mx: 'auto' }}>
            Scopri i miei progetti e il mio percorso di sviluppo su GitHub. 
            Ogni repository racconta una parte della mia evoluzione come developer.
          </Typography>
          
          <Button
            variant="contained"
            size="large"
            component="a"
            href="https://github.com/Retr0dev-jpg"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHub />}
            sx={{
              px: 4,
              py: 1.5,
              background: 'linear-gradient(135deg, #24292e 0%, #1a1e23 100%)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(135deg, #1a1e23 0%, #0d1117 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            Visita il mio GitHub
          </Button>
          
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            @Retr0dev-jpg
          </Typography>
        </Paper>

        {/* CTA Section */}
        <Box
          sx={{
            mt: 8,
            py: 8,
            px: 4,
            textAlign: 'center',
            backgroundColor: 'grey.50',
            borderRadius: '16px',
            border: '1px solid',
            borderColor: 'grey.200',
          }}
        >
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
            Pronto per esplorare?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Naviga attraverso le diverse sezioni per scoprire il percorso 
            di crescita e apprendimento durante l\'esperienza PCTO.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/motivazione"
            sx={{ px: 4, py: 1.5 }}
          >
            Scopri la motivazione
          </Button>
        </Box>
      </Container>
    </Layout>
  );
}
