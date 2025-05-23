'use client';
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  useScrollTrigger,
  Slide,
  IconButton,
  Tooltip,
} from '@mui/material';
import { GitHub } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Descrizione', href: '/descrizione' },
  { label: 'Obiettivi', href: '/obiettivi' },
  { label: 'Competenze', href: '/competenze' },
  { label: 'Difficoltà', href: '/difficolta' },
  { label: 'Facilitatori', href: '/facilitatori' },
  { label: 'Motivazione', href: '/motivazione' },
  { label: 'Conclusione', href: '/conclusione' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <HideOnScroll>
      <AppBar position="fixed" color="inherit" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar sx={{ px: 0 }}>
            <Typography
              variant="h6"
              component={Link}
              href="/"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                color: 'text.primary',
                fontWeight: 700,
                fontSize: '1.25rem',
              }}
            >
              PCTO Experience
            </Typography>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: pathname === item.href ? 'primary.main' : 'text.secondary',
                    fontWeight: pathname === item.href ? 600 : 400,
                    textTransform: 'none',
                    px: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 112, 243, 0.04)',
                      color: 'primary.main',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* GitHub Link */}
            <Box sx={{ ml: 2 }}>
              <Tooltip title="Vai al profilo GitHub di Marco Simone">
                <IconButton
                  component="a"
                  href="https://github.com/Retr0dev-jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'rgba(0, 112, 243, 0.04)',
                    },
                  }}
                >
                  <GitHub />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
} 