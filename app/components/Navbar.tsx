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
import { motion, AnimatePresence } from 'framer-motion';

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

const navButtonVariants = {
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  }
};

const logoVariants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

const githubIconVariants = {
  hover: {
    scale: 1.1,
    rotate: 360,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.9,
    transition: {
      duration: 0.1
    }
  }
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        color="inherit" 
        elevation={0}
        sx={{
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ px: 0 }}>
            <motion.div
              variants={logoVariants}
              whileHover="hover"
              style={{ flexGrow: 1 }}
            >
              <Typography
                variant="h6"
                component={Link}
                href="/"
                sx={{
                  textDecoration: 'none',
                  color: 'text.primary',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  background: 'linear-gradient(135deg, #0070f3 0%, #7c3aed 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                PCTO Experience
              </Typography>
            </motion.div>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <AnimatePresence>
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={navButtonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    style={{ position: 'relative' }}
                  >
                    <Button
                      component={Link}
                      href={item.href}
                      sx={{
                        color: pathname === item.href ? 'primary.main' : 'text.secondary',
                        fontWeight: pathname === item.href ? 600 : 400,
                        textTransform: 'none',
                        px: 2,
                        position: 'relative',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 112, 243, 0.04)',
                          color: 'primary.main',
                        },
                      }}
                    >
                      {item.label}
                      {pathname === item.href && (
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '80%',
                            height: '2px',
                            backgroundColor: 'primary.main',
                            borderRadius: '1px',
                          }}
                        />
                      )}
                    </Button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </Box>

            {/* GitHub Link */}
            <Box sx={{ ml: 2 }}>
              <Tooltip title="Vai al profilo GitHub di Marco Simone">
                <motion.div
                  variants={githubIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
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
                </motion.div>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
} 