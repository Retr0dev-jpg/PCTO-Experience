'use client';
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import {
  Business,
  Computer,
  Group,
  Assignment,
} from '@mui/icons-material';
import Link from 'next/link';
import Layout from '../components/Layout';
import ScrollAnimation from '../components/ScrollAnimation';
import PageNavigation from '../components/PageNavigation';

export default function DescrizionePage() {
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
              Descrizione dell'Esperienza
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4, fontWeight: 400 }}
            >
              Il percorso PCTO di Marco Simone nel dettaglio
            </Typography>
          </Box>
        </ScrollAnimation>

        {/* Overview */}
        <ScrollAnimation direction="left" delay={0.2}>
          <Paper
            elevation={0}
            sx={{
              p: 6,
              mb: 8,
              backgroundColor: 'grey.50',
              borderRadius: '16px',
              border: '1px solid',
              borderColor: 'grey.200',
            }}
          >
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
              Panoramica Generale
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Il mio percorso di PCTO (Percorsi per le Competenze Trasversali e l'Orientamento) 
              è stato un'esperienza fondamentale che mi ha permesso di entrare in contatto 
              diretto con il mondo del lavoro, sviluppando competenze pratiche e trasversali 
              essenziali per il mio futuro professionale.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Durante questo periodo ho avuto l'opportunità di applicare le conoscenze 
              teoriche acquisite a scuola in un contesto lavorativo reale, confrontandomi 
              con sfide concrete e sviluppando una maggiore consapevolezza delle mie 
              capacità e dei miei interessi professionali.
            </Typography>
          </Paper>
        </ScrollAnimation>

        {/* Timeline */}
        <ScrollAnimation direction="right" delay={0.3}>
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, textAlign: 'center' }}>
              Fasi dell'Esperienza
            </Typography>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ backgroundColor: 'primary.main' }}>
                    <Assignment />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography 
                    variant="h6" 
                    component="span" 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '0.9rem', md: '1.25rem' }
                    }}
                  >
                    Fase Preparatoria
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
                  >
                    Formazione iniziale e briefing sui compiti da svolgere
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ backgroundColor: 'secondary.main' }}>
                    <Computer />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography 
                    variant="h6" 
                    component="span" 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '0.9rem', md: '1.25rem' }
                    }}
                  >
                    Attività Pratiche
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
                  >
                    Svolgimento delle mansioni operative e progetti assegnati
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ backgroundColor: 'success.main' }}>
                    <Group />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography 
                    variant="h6" 
                    component="span" 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '0.9rem', md: '1.25rem' }
                    }}
                  >
                    Collaborazione
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
                  >
                    Lavoro di squadra e interazione con colleghi e tutor
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ backgroundColor: 'warning.main' }}>
                    <Business />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography 
                    variant="h6" 
                    component="span" 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '0.9rem', md: '1.25rem' }
                    }}
                  >
                    Valutazione Finale
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
                  >
                    Analisi dei risultati e riflessioni sull'esperienza
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>
        </ScrollAnimation>

        {/* Navigation */}
        <ScrollAnimation direction="up" delay={0.4}>
          <PageNavigation
            previousPage={{ href: "/", label: "← Torna alla Home" }}
            nextPage={{ href: "/obiettivi", label: "Obiettivi Formativi →" }}
          />
        </ScrollAnimation>
      </Container>
    </Layout>
  );
} 