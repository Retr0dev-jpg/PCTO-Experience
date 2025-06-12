import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
  // Configurazione per risolvere problemi con Google Fonts
  transpilePackages: ['@mui/material', '@mui/system', '@mui/icons-material'],
};

export default nextConfig;
