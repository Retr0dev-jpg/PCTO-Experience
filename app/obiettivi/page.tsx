'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Chip,
} from '@mui/material';
import {
  SelfImprovement,
  Groups,
  Assignment,
  CheckCircle,
} from '@mui/icons-material';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Layout from '../components/Layout';
import ScrollAnimation from '../components/ScrollAnimation';
import PageNavigation from '../components/PageNavigation';

const obiettivi = [
  {
    icon: <SelfImprovement />,
    title: 'Lavorare in autonomia',
    description: 'Ho acquisito la capacità di gestire i compiti che mi venivano assegnati in modo indipendente.',
    skills: ['Problem solving', 'Iniziativa personale', 'Gestione del tempo', 'Responsabilità'],
    progress: 85,
    color: 'primary',
  },
  {
    icon: <Groups />,
    title: 'Confrontarsi con gli altri',
    description: 'Durante l\'esperienza ho imparato a collaborare positivamente con il titolare, ascoltando con attenzione i suoi consigli e proponendo il mio parere in maniera costruttiva.',
    skills: ['Comunicazione', 'Ascolto attivo', 'Empatia', 'Collaborazione'],
    progress: 65,
    color: 'secondary',
  },
  {
    icon: <Assignment />,
    title: 'Comprendere le consegne',
    description: 'Ho sviluppato la capacità di analizzare e interpretare correttamente istruzioni e obiettivi, ponendo domande appropriate quando necessario.',
    skills: ['Analisi', 'Comprensione', 'Attenzione ai dettagli', 'Chiarificazione'],
    progress: 100,
    color: 'success',
  },
  {
    icon: <CheckCircle />,
    title: 'Rispettare le consegne',
    description: 'Ho imparato a gestire le scadenze sviluppando affidabilità e precisione nel lavoro.',
    skills: ['Puntualità', 'Organizzazione', 'Qualità', 'Affidabilità'],
    progress: 100,
    color: 'warning',
  },
];

// Componente per progress bar animate
const AnimatedProgressBar = ({ value, color, delay = 0 }: { value: number; color: string; delay?: number }) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= value) {
              clearInterval(interval);
              return value;
            }
            return prev + 1;
          });
        }, 15);
        
        return () => clearInterval(interval);
      }, delay * 100);

      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <Box ref={ref}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
          Livello di padronanza
        </Typography>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: delay * 0.1 + 0.3 }}
        >
          <Typography variant="subtitle2" color="text.secondary">
            {progress}%
          </Typography>
        </motion.div>
      </Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: 'grey.200',
          '& .MuiLinearProgress-bar': {
            borderRadius: 4,
            transition: 'transform 0.3s ease',
          },
        }}
      />
    </Box>
  );
};

export default function ObiettiviPage() {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Header */}
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
                fontWeight: 700,
              }}
            >
              Obiettivi Formativi
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4, fontWeight: 400 }}
            >
              Le competenze che ho sviluppato durante il percorso
            </Typography>
          </Box>
        </ScrollAnimation>

        {/* Obiettivi Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
            },
            gap: 4,
            mb: 8,
          }}
        >
          {obiettivi.map((obiettivo, index) => (
            <ScrollAnimation 
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.1}
            >
              <Card
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
                <CardContent sx={{ 
                  flexGrow: 1, 
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                        color: `${obiettivo.color}.main`,
                      }}
                    >
                      {obiettivo.icon}
                      <Typography variant="h5" sx={{ ml: 1, fontWeight: 600 }}>
                        {obiettivo.title}
                      </Typography>
                    </Box>
                    
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                      {obiettivo.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                        Competenze sviluppate:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {obiettivo.skills.map((skill, skillIndex) => (
                          <Chip
                            key={skillIndex}
                            label={skill}
                            size="small"
                            color={obiettivo.color as any}
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ mt: 'auto' }}>
                    <AnimatedProgressBar value={obiettivo.progress} color={obiettivo.color} delay={index} />
                  </Box>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </Box>



        {/* Navigation */}
        <ScrollAnimation direction="up" delay={0.6}>
          <PageNavigation
            previousPage={{ href: "/descrizione", label: "← Descrizione" }}
            nextPage={{ href: "/competenze", label: "Competenze Specifiche →" }}
          />
        </ScrollAnimation>
      </Container>
    </Layout>
  );
} 