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
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 4, fontWeight: 400 }}
          >
            Le ragioni che mi hanno spinto a intraprendere questo percorso
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
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
              Perché Ho Scelto Questo Percorso
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Sinceramente, all'inizio non ero entusiasta dell'idea del PCTO. Come molti miei compagni, 
              lo vedevo come una cosa da fare per forza, un obbligo scolastico che avrebbe solo sottratto 
              tempo alle vacanze estive. Ma mio padre, che lavora in un ufficio e usa il computer tutto il giorno, 
              mi ha sempre detto: "Se impari a riparare i computer, avrai sempre lavoro".
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              La verità è che mi sono sempre piaciuti i computer. Da piccolo smontavo tutto quello che trovavo 
              in casa (con grande disappunto di mia madre), e al liceo ero sempre quello che i compagni chiamavano 
              quando il loro PC faceva le bizze. Però una cosa è aiutare un amico con Windows che si è bloccato, 
              un'altra è farlo diventare un lavoro vero.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Quando ho visto l'annuncio di MTech Solutions che cercava uno stagista, ho pensato: "Perché no?". 
              Era l'occasione perfetta per capire se quella passione per la tecnologia poteva diventare qualcosa di più. 
              E poi, essere pagato per imparare non era male come idea!
            </Typography>
          </Box>

          <Box
            sx={{
              p: 6,
              backgroundColor: 'primary.50',
              borderRadius: '16px',
              border: '1px solid',
              borderColor: 'primary.100',
            }}
          >
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: 'primary.main' }}>
              Le Mie Aspirazioni
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Quel che mi ha colpito di più è stata la varietà del lavoro. Pensavo che riparare computer fosse sempre 
              la stessa routine, invece ogni giorno portava sfide diverse: dal laptop di uno studente pieno di virus, 
              alla rete aziendale che non funzionava, fino al server di un ristorante che aveva problemi proprio 
              nel weekend più affollato dell'anno.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Ho capito che questo mondo mi piace perché combina la parte tecnica (che mi ha sempre affascinato) 
              con il rapporto umano. Ogni cliente ha una storia, un problema urgente da risolvere, e tu sei lì 
              per aiutarlo. È gratificante vedere il sollievo sul volto di una persona quando gli risolvi 
              un problema che la stava mandando in panico.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Ora so che voglio continuare in questo settore. Non so ancora se punto all'università di informatica 
              o preferisco specializzarmi subito, ma una cosa è certa: questa esperienza mi ha fatto capire 
              che la tecnologia è il mio futuro.
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