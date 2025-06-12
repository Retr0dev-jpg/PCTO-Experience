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

export default function CompetenzePage() {
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
            Competenze Specifiche
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 4, fontWeight: 400 }}
          >
            Le competenze tecniche sviluppate durante il percorso
          </Typography>
        </Box>

        {/* Competenze Content */}
        <Box sx={{ mb: 8 }}>
          {/* Competenze Tecniche */}
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
              Competenze Tecniche Acquisite
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              In questo mese e mezzo da MTech Solutions ho migliorato le mie competenze molto di più di quanto immaginassi. All'inizio il mio compito era della gestione software. Poi, passo dopo passo, ho iniziato anche con dell'hardware, fino a creare e configurare PC completi.
            </Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4, mb: 4 }}>
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                  Hardware e Riparazioni
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Sostituzione componenti (RAM, HD, SSD, schede video)
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Diagnosi guasti e strumenti di test
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Pulizia e manutenzione preventiva PC e laptop
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Riparazione alimentatori e dissipatori
                </Typography>
              </Box>
              
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'secondary.main' }}>
                  Software e Sistemi
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Installazione e configurazione Windows/Linux
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Rimozione virus e malware con strumenti professionali
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Backup e recovery dati
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Ottimizzazione prestazioni e troubleshooting
                </Typography>
              </Box>
            </Box>
            
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              La cosa che mi ha colpito di più è quanto sia importante la metodologia. Non si tratta solo di sapere come fare le cose, ma di saperle fare bene, velocemente.
            </Typography>
          </Box>

          {/* Competenze di Rete */}
          <Box
            sx={{
              p: 6,
              mb: 6,
              backgroundColor: 'primary.50',
              borderRadius: '16px',
              border: '1px solid',
              borderColor: 'primary.100',
            }}
          >
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: 'primary.main' }}>
              Networking e Installazioni
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Una delle parti più interessanti è stata imparare a gestire le reti. Ad esempio uno di questi giorni siamo andati presso un cliente che doveva
              installare le nuove stampanti e metterle in rete. Questo mi ha permesso di imparare a gestire le reti in modo più approfondito, e di poter
            </Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4, mb: 4 }}>
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Installazioni presso Clienti
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Setup reti WiFi domestiche e aziendali
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Configurazione router e access point
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Cablaggio strutturato (Cat6, fibra)
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Installazione sistemi di backup automatici
                </Typography>
              </Box>
              
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Supporto Aziendale
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Manutenzione server Windows Server
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Gestione domini e Active Directory (basic)
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Configurazione stampanti di rete
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Supporto remoto via RustDesk
                </Typography>
              </Box>
            </Box>
            
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Durante la mia permanenza all'interno di MTech Solutions, ho avuto l'opportunità di portare dell'innovazione, implementando un sistema di 
              automazione delle installazioni durante il le installazioni dei programmi base dei pc appena formattati. Questa procedura è stata molto
              apprezzata dal titolare, in quanto consentirà di automatizzare i processi.
            </Typography>
          </Box>

          {/* Competenze Relazionali */}
          <Box
            sx={{
              p: 6,
              backgroundColor: 'success.50',
              borderRadius: '16px',
              border: '1px solid',
              borderColor: 'success.100',
            }}
          >
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: 'success.main' }}>
              Gestione Clienti e Comunicazione
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Sicuramente la competenza più importante che ho potuto sperimentare e quindi affinare è stata quella di essere in grado di comunicare con
              i clienti.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              All'inizio ero timido e lasciavo parlare sempre il titolare, ma poi ho capito che era fondamentale saper spiegare i problemi in modo semplice
              e rassicure le persone. ho imparato anche a fare domande precise per capire di cosa aveva bisogno il cliente, a dare tempi realistici per le
              riparazioni e sopratutto a non promettere miracoli
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Ho capito che questa competenza è molto importante, perchè va ben oltre la tecnologia, riguarda il saper relazionarso ccon le persone,
              cosa che serve ricuramente in qualsiasi lavoro.
            </Typography>
          </Box>
        </Box>

        {/* Navigation */}
        <PageNavigation
          previousPage={{ href: "/obiettivi", label: "← Obiettivi" }}
          nextPage={{ href: "/difficolta", label: "Difficoltà →" }}
        />
      </Container>
    </Layout>
  );
} 