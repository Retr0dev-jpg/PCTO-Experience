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

export default function FacilitatoriPage() {
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
            Facilitatori
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 4, fontWeight: 400 }}
          >
            L'ambiente di lavoro, i colleghi e i tutor che hanno supportato il mio apprendimento
          </Typography>
        </Box>

        {/* Facilitatori Content */}
        <Box sx={{ mb: 8 }}>
          {/* Il Team */}
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
              Il Team di MTech Solutions
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Se questa esperienza è stata così formativa, il merito va soprattutto alle persone che 
              mi hanno accolto e guidato. Sin dal primo giorno ho capito di aver avuto una fortuna incredibile: 
              non solo erano competenti, ma erano anche veri insegnanti.
            </Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4, mb: 4 }}>
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                  Marco - Il Mentore
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
                  Marco è il proprietario del negozio, ma anche un insegnante nato. Ha questa capacità 
                  incredibile di spiegare concetti complessi in modo semplice. Non si è mai spazientito 
                  quando gli facevo la stessa domanda per la quinta volta.
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                  Mi ha insegnato che nel nostro lavoro l'umiltà è fondamentale: "Non fingere mai di 
                  sapere qualcosa che non sai", mi ripeteva sempre.
                </Typography>
              </Box>
              
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'secondary.main' }}>
                  Sara - L'Esperta di Rete
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
                  Sara mi ha aperto il mondo del networking. All'inizio per me una rete era solo 
                  "WiFi che funziona o non funziona", lei mi ha fatto capire tutta la complessità 
                  che c'è dietro.
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                  Ma soprattutto mi ha insegnato a gestire lo stress: quando tutto va storto, 
                  mantieni la calma e procedi step by step.
                </Typography>
              </Box>
              
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'success.main' }}>
                  Paolo - Il Problem Solver
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
                  Paolo è quello che chiami quando hai un problema impossibile. Mi ha mostrato 
                  che in questo lavoro la creatività è importante quanto la competenza tecnica.
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                  "Ogni problema ha una soluzione, basta trovarla", era il suo motto. 
                  E aveva sempre ragione.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* L'Ambiente di Lavoro */}
          <Box
            sx={{
              p: 6,
              mb: 6,
              backgroundColor: 'success.50',
              borderRadius: '16px',
              border: '1px solid',
              borderColor: 'success.100',
            }}
          >
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: 'success.main' }}>
              Un Ambiente che Stimola l'Apprendimento
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              MTech Solutions non è il classico negozio di informatica dove ti fanno solo guardare. 
              Dal primo giorno mi hanno fatto mettere le mani su tutto. L'approccio era: "Prova, 
              sbaglia, impara". Un ambiente perfetto per chi, come me, impara facendo.
            </Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4, mb: 4 }}>
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Strumenti e Risorse
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Laboratorio attrezzato con tutti gli strumenti necessari
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Magazzino ricco di componenti per test e riparazioni
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Software professionali per diagnosi e riparazione
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Documentazione tecnica sempre aggiornata
                </Typography>
              </Box>
              
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Metodologia di Lavoro
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Briefing quotidiani sui casi del giorno
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Affiancamento graduale fino all'autonomia
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Debriefing settimanali sui progressi
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Libertà di fare domande in qualsiasi momento
                </Typography>
              </Box>
            </Box>
            
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              La cosa che più mi ha colpito è che mi hanno sempre trattato come un collega, non come uno stagista. 
              Le mie opinioni venivano ascoltate, i miei errori venivano usati come momenti di apprendimento, 
              e i miei piccoli successi venivano celebrati dal team.
            </Typography>
          </Box>

          {/* I Clienti Come Insegnanti */}
          <Box
            sx={{
              p: 6,
              backgroundColor: 'secondary.50',
              borderRadius: '16px',
              border: '1px solid',
              borderColor: 'secondary.100',
            }}
          >
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: 'secondary.main' }}>
              I Clienti: Insegnanti Inconsapevoli
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Una cosa che non mi aspettavo è quanto avrei imparato dai clienti stessi. Ogni persona 
              che entrava nel negozio portava con sé una storia, un problema unico, un modo diverso 
              di rapportarsi alla tecnologia.
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              C'era il professore universitario che conosceva Linux meglio di me ma non sapeva perché 
              la sua stampante non funzionava. C'era la nonna che aveva paura di "rompere tutto" 
              toccando il mouse. C'era l'imprenditore che voleva soluzioni immediate senza spiegazioni tecniche.
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Ognuno di loro mi ha insegnato qualcosa: pazienza, empatia, capacità di adattare il mio 
              linguaggio al mio interlocutore. Ho capito che essere un buon tecnico non significa solo 
              saper riparare i computer, ma anche saper comunicare con le persone.
            </Typography>
            
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Ora quando qualcuno mi chiede cosa fa un tecnico informatico, non dico più "ripara computer". 
              Dico "aiuta le persone a risolvere problemi usando la tecnologia". È tutta un'altra cosa.
            </Typography>
          </Box>
        </Box>

        {/* Navigation */}
        <PageNavigation
          previousPage={{ href: "/difficolta", label: "← Difficoltà" }}
          nextPage={{ href: "/motivazione", label: "Motivazione →" }}
        />
      </Container>
    </Layout>
  );
} 