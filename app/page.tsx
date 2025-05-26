'use client';
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  Card,
  CardContent,
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
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import ScrollAnimation from './components/ScrollAnimation';
import AnimatedCard from './components/AnimatedCard';
import AnimatedButton from './components/AnimatedButton';
import { containerVariants } from './animations';

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
        {/* Hero Section - Semplificato */}
        <ScrollAnimation direction="up">
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
                sx={{
                  px: 4,
                  py: 1.5,
                  background: 'linear-gradient(135deg, #0070f3 0%, #7c3aed 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #0051cc 0%, #6d28d9 100%)',
                  }
                }}
              >
                Inizia l'esplorazione
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
        </ScrollAnimation>

        {/* Feature Cards - Semplificato */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 4,
            mb: 8
          }}
        >
          {featureCards.map((card, index) => (
            <ScrollAnimation 
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.1}
            >
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
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
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {card.description}
                  </Typography>
                  <Button
                    size="small"
                    component={Link}
                    href={card.href}
                  >
                    Scopri di più →
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </Box>

        {/* CTA Section - Semplificato */}
        <ScrollAnimation direction="up" delay={0.7}>
          <Box
            sx={{
              py: 8,
              px: 4,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #0070f3 0%, #7c3aed 100%)',
              borderRadius: '16px',
              color: 'white',
            }}
          >
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
              Pronto per esplorare?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
              Naviga attraverso le diverse sezioni per scoprire il percorso 
              di crescita e apprendimento durante l'esperienza PCTO.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="/motivazione"
              sx={{
                backgroundColor: 'transparent',
                color: 'white',
                borderColor: 'white',
                borderWidth: '2px',
                px: 4,
                py: 1.5,
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: 'white',
                  color: '#0070f3',
                  borderColor: 'white',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Scopri la motivazione
            </Button>
          </Box>
        </ScrollAnimation>
      </Container>
    </Layout>
  );
}
