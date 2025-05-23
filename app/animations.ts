// Varianti per le transizioni delle pagine (ottimizzate)
export const pageVariants = {
  initial: {
    opacity: 0,
    x: 100,
    rotateY: -15,
    transformPerspective: 1200,
  },
  in: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transformPerspective: 1200,
  },
  out: {
    opacity: 0,
    x: -100,
    rotateY: 15,
    transformPerspective: 1200,
  }
};

export const pageTransition = {
  type: 'tween',
  ease: [0.22, 1, 0.36, 1],
  duration: 0.6
};

// Varianti per le cards (ottimizzate)
export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  hover: {
    y: -4,
    transition: {
      duration: 0.15,
      ease: "easeOut"
    }
  }
};

// Varianti per i container con figli multipli (ottimizzate)
export const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.05
    }
  }
};

// Varianti per elementi che appaiono dal lato (ottimizzate)
export const slideInVariants = {
  left: {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  },
  right: {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  },
  up: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }
};

// Varianti per animazioni di caricamento (ottimizzate)
export const loadingVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

// Varianti per hover sui bottoni (ottimizzate)
export const buttonVariants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.15,
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

// Varianti per animazioni di testo (ottimizzate)
export const textVariants = {
  hidden: {
    opacity: 0,
    y: 10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Varianti per timeline (ottimizzate)
export const timelineVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

// Varianti per progress bars (ottimizzate)
export const progressVariants = {
  hidden: {
    width: 0
  },
  visible: (progress: number) => ({
    width: `${progress}%`,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2
    }
  })
}; 