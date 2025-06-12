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
            Se dovessi riassumere questi tre mesi in una parola, direi: rivelazione. Non avevo mai 
            pensato che un lavoro estivo potesse insegnarmi così tanto su me stesso, sui miei talenti 
            e su cosa voglio fare da grande. MTech Solutions non è stato solo un posto dove imparare 
            a riparare computer, è stato il posto dove ho scoperto la mia strada.
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            All'inizio ero solo "il ragazzo delle superiori che sa smanettare con i computer". 
            Alla fine mi sono trasformato in un vero tecnico, capace di gestire clienti, risolvere 
            problemi complessi e lavorare in autonomia. Ma la cosa più importante è che ho capito 
            che questo è quello che voglio fare nella vita.
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Ho imparato che dietro ogni lavoro, anche quello che ti sembra più semplice, c'è un mondo 
            di competenze, responsabilità e rapporti umani. Ho imparato che l'esperienza pratica vale 
            quanto (se non più) dello studio teorico. E ho imparato che quando fai qualcosa che ti piace, 
            non pesa mai.
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
                  Competenze Tecniche
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                Riparazione hardware, networking, troubleshooting software, gestione server... 
                Competenze concrete che posso già mettere sul curriculum e che mi danno una base 
                solida per il futuro nell'IT.
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
                  Competenze Umane
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                Gestione clienti, problem solving sotto pressione, lavoro in team, comunicazione... 
                Competenze che valgono in qualsiasi lavoro e che nessun libro può insegnare meglio 
                dell'esperienza sul campo.
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
            Il Futuro Inizia Ora
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Marco mi ha offerto di continuare part-time durante l'anno scolastico. Ho accettato subito. 
            Non solo per i soldi (anche se non guastano!), ma perché ho capito che questo è il mio mondo. 
            Ogni giorno imparo qualcosa di nuovo, ogni problema risolto mi dà soddisfazione.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Ora so che dopo il diploma voglio specializzarmi nel networking e nella cybersecurity. 
            So che l'esperienza pratica vale quanto lo studio teorico. E so che quando trovi la tua 
            strada, tutto diventa più facile e più bello.
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