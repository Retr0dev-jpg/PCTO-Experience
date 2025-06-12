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
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 4, fontWeight: 400 }}
          >
            Le sfide superate durante il percorso
          </Typography>
        </Box>

        {/* Difficoltà Content */}
        <Box sx={{ mb: 8 }}>
          {/* Difficoltà Relazionali */}
          <Box
            sx={{
              p: 6,
              mb: 6,
              backgroundColor: 'warning.50',
              borderRadius: '16px',
              border: '1px solid',
              borderColor: 'warning.100',
            }}
          >
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: 'warning.main' }}>
              Gestire i Clienti Difficili
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Un'altra sfida è stata quella di riuscire a gestire un cliente abbituale del negozio che ha l'abbitudine di portare il pc in riparazione e
              pretenedeva che noi lo riparassimo a modo suo pur lui non avendo competenze hardware e software per effettuare la riparazione.
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              In questo caso sono riuscito con la gentilezza ed un po di persuasione a convincerlo di affidarsi a noi ed a ritornare nel pomeriggio per
              ritirare il suo pc perfettamente funzionante come desiderava lui. 
            </Typography>
            

          </Box>

          {/* Superare le Difficoltà */}
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
              Come Ho Superato Le Difficoltà
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              La chiave è stata capire che fare errori fa parte del processo. Marco me lo ripeteva sempre: 
              "Chi non sbaglia, non impara". Ogni errore è diventato una lezione. Ogni cliente difficile 
              un'opportunità per migliorare le mie capacità relazionali.
            </Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4, mb: 4 }}>
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Strategie Tecniche
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Creare sempre una checklist per le diagnosi
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Documentare ogni intervento per futura riferimento
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Non aver paura di chiedere aiuto quando serve
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Testare sempre le soluzioni prima di consegnare
                </Typography>
              </Box>
              
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Strategie Relazionali
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Ascoltare prima di parlare
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Spiegare i problemi in termini semplici
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Essere sempre onesti sui tempi di riparazione
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Mantenere la calma anche quando il cliente è agitato
                </Typography>
              </Box>
            </Box>
            
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Ora, a fine esperienza, posso dire che quelle difficoltà sono state la parte più formativa 
              di tutto il percorso. Mi hanno insegnato la resilienza, la pazienza e l'importanza di 
              non mollare mai davanti ai problemi. Competenze che mi serviranno per tutta la vita.
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