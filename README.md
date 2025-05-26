# 🎓 PCTO Experience - Elaborato Marco Simone Cannizzaro

> [!WARNING]
> **🚧 PROGETTO IN SVILUPPO 🚧**
> 
> Questo sito web è attualmente **in fase di sviluppo attivo**. Alcune funzionalità potrebbero non essere complete o subire modifiche. Stiamo lavorando per migliorare costantemente l'esperienza utente e aggiungere nuove funzionalità.
> 
> **Stato attuale**: ✅ Homepage, Descrizione, Obiettivi | 🔄 Competenze, Difficoltà, Facilitatori, Motivazione, Conclusione

---

Un sito web moderno e interattivo per documentare l'esperienza PCTO (Percorsi per le Competenze Trasversali e l'Orientamento), realizzato con Next.js, Material UI e Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-15.1.8-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Material-UI](https://img.shields.io/badge/Material--UI-7.1.0-007FFF?style=for-the-badge&logo=mui)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.12.2-pink?style=for-the-badge&logo=framer)
![License](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey?style=for-the-badge)

## 📋 Indice

- [Panoramica](#-panoramica)
- [Caratteristiche](#-caratteristiche)
- [Sistema Animazioni](#-sistema-animazioni)
- [Struttura del Progetto](#-struttura-del-progetto)
- [Tecnologie Utilizzate](#-tecnologie-utilizzate)
- [Installazione e Avvio](#-installazione-e-avvio)
- [Pagine del Sito](#-pagine-del-sito)
- [Design e UI/UX](#-design-e-uiux)
- [Personalizzazione](#-personalizzazione)
- [Licenza](#-licenza)
- [Contatti](#-contatti)

## 🎯 Panoramica

Questo progetto rappresenta la documentazione digitale dell'esperienza PCTO di **Marco Simone Cannizzaro**, sviluppato come elaborato per l'**Esame di Stato 2025**. Il sito è stato progettato per presentare in modo professionale e interattivo il percorso formativo, gli obiettivi raggiunti, le competenze acquisite e le riflessioni finali.

### 🎓 Contesto Accademico

Questo elaborato è stato realizzato per l'**Esame di Stato 2025** e documenta l'intero percorso PCTO (Percorsi per le Competenze Trasversali e l'Orientamento), rappresentando sia le competenze acquisite durante l'esperienza formativa che quelle tecniche sviluppate nella realizzazione del sito web stesso.

### 🎨 Design Philosophy

Il design si ispira ai siti moderni come Next.js, React.dev e Vercel, con:
- **Minimalismo elegante**: interfaccia pulita e focalizzata sui contenuti
- **Animazioni fluide**: transizioni e micro-interazioni con Framer Motion
- **Tipografia moderna**: font Inter per massima leggibilità
- **Palette coerente**: colori ispirati all'ecosistema Next.js/Vercel
- **Responsive design**: ottimizzato per tutti i dispositivi

## ✨ Caratteristiche

- ✅ **Design Moderno** - Interfaccia ispirata a Next.js e Vercel
- ✅ **Animazioni Fluide** - Transizioni pagina e scroll animations
- ✅ **Responsive** - Ottimizzato per tutti i dispositivi
- ✅ **TypeScript** - Type safety completa
- ✅ **Material UI** - Componenti professionali

## 🎬 Sistema Animazioni

### **Transizioni di Pagina**
- **Fade-to-White Effect**: Il contenuto svanisce nel bianco e riappare colorato
- **Header/Footer Statici**: Solo il contenuto principale viene animato
- **Durata Ottimizzata**: 0.8s per l'uscita, 0.4s per l'entrata

### **Scroll Animations**
- **ScrollAnimation Component**: Trigger automatico quando gli elementi entrano in vista
- **Direzioni Multiple**: `up`, `left`, `right` con delays personalizzabili
- **Stagger Effects**: Animazioni sequenziali per grid e liste

### **Micro-Interactions**
- **Card Hover**: Effetti di elevazione e scala
- **Button Animations**: Hover states con colori brand-specific
- **Progress Bars**: Riempimento graduale con contatori animati



## 📁 Struttura del Progetto

```
app/                          # App Router di Next.js
├── components/              # Componenti riutilizzabili
│   ├── Layout.tsx          # Layout wrapper con animazioni
│   ├── Navbar.tsx          # Barra di navigazione
│   ├── Footer.tsx          # Footer con contatti social (responsive)
│   ├── PageNavigation.tsx  # Navigazione responsive tra pagine
│   ├── ScrollAnimation.tsx # Componente per animazioni scroll
│   ├── AnimatedCard.tsx    # Card con hover effects
│   └── AnimatedButton.tsx  # Button con micro-interactions
├── descrizione/            # Pagina descrizione PCTO
├── obiettivi/              # Pagina obiettivi con progress animate
├── competenze/             # Pagina competenze specifiche
├── difficolta/             # Pagina difficoltà incontrate
├── facilitatori/           # Pagina facilitatori
├── motivazione/            # Pagina motivazione
├── conclusione/            # Pagina conclusioni
├── animations.ts           # Varianti Framer Motion
├── globals.css             # Stili globali
├── layout.tsx              # Layout root con providers
├── page.tsx                # Homepage con scroll animations
├── template.tsx            # Template per transizioni
└── theme.ts                # Tema Material UI personalizzato
public/                      # Asset statici
package.json                # Dipendenze del progetto
README.md                   # Documentazione
```

## 🛠 Tecnologie Utilizzate

### **Frontend Framework**
- **[Next.js 15.1.8](https://nextjs.org/)** - Framework React con App Router
- **[React 19](https://react.dev/)** - Libreria UI component-based
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety e migliore DX

### **Animazioni & Interactions**
- **[Framer Motion 12.12.2](https://www.framer.com/motion/)** - Libreria animazioni React
- **CSS Transitions** - Transizioni native per performance
- **Intersection Observer** - Trigger animations on scroll

### **UI/UX Libraries**
- **[Material UI 7.1.0](https://mui.com/)** - Component library professionale
- **[Material Icons](https://mui.com/material-ui/material-icons/)** - Set di icone coerente
- **[Emotion](https://emotion.sh/)** - CSS-in-JS per styling dinamico

### **Styling & Design**
- **[CSS Grid & Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)** - Layout responsive moderno
- **[Inter Font](https://fonts.google.com/specimen/Inter)** - Tipografia moderna
- **Custom CSS Variables** - Theming consistente

### **Development Tools**
- **[ESLint](https://eslint.org/)** - Linting del codice
- **[PostCSS](https://postcss.org/)** - Processing CSS avanzato

## 🚀 Installazione e Avvio

### **Prerequisiti**
- Node.js 18+ installato

### **Installazione e Avvio**
```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser per vedere il sito.

## 📄 Pagine del Sito

### 🏠 **Homepage** (`/`)
La pagina principale introduce l'elaborato PCTO con:
- **Hero Section Animata** - Titolo principale con gradient e introduzione
- **Feature Cards** - Grid responsive con hover effects
- **Scroll Animations** - Elementi che appaiono durante lo scroll
- **Call-to-Action** - Sezione finale con button animated

### 📖 **Descrizione** (`/descrizione`)
Panoramica completa dell'esperienza PCTO con:
- **Timeline Interattiva** - Fasi dell'esperienza con icone
- **Scroll Animations** - Sezioni che appaiono da diverse direzioni
- **Card Informative** - Overview con design material

### 🎯 **Obiettivi** (`/obiettivi`)
I quattro obiettivi formativi principali con:
- **Progress Bar Animate** - Livelli di padronanza animati
- **Competenze Chips** - Tag colorati per skill
- **Grid Responsive** - Layout a 2 colonne su desktop
- **Stagger Animations** - Cards che appaiono sequenzialmente

### 🧠 **Competenze** (`/competenze`)
Competenze specifiche acquisite durante il percorso (da personalizzare)

### ⚡ **Difficoltà** (`/difficolta`)
Sfide incontrate e strategie di superamento (da personalizzare)

### 🤝 **Facilitatori** (`/facilitatori`)
Persone e ambiente che hanno supportato l'apprendimento (da personalizzare)

### 💪 **Motivazione** (`/motivazione`)
Ragioni personali e obiettivi del percorso (da personalizzare)

### 🎓 **Conclusione** (`/conclusione`)
Riflessioni finali su:
- Competenze specifiche apprese
- Soft skills sviluppate
- Impatto sulla crescita personale
- Prospettive future

## 🎨 Design e UI/UX

### **Palette Colori**
- **Primary Blue**: `#0070f3` (ispirato a Next.js)
- **Secondary Purple**: `#7c3aed` (accent Vercel-style)
- **GitHub Dark**: `#24292e` (button GitHub)
- **Gmail Red**: `#ea4335` (button Email)
- **Instagram Pink**: `#E4405F` (button Instagram)
- **Text Primary**: `#171717` (quasi nero)
- **Text Secondary**: `#737373` (grigio neutro)
- **Background**: `#ffffff` / `#fafafa`

### **Tipografia**
- **Font**: Inter (ottimizzato per leggibilità)
- **Heading 1**: 2.5rem, weight 700
- **Heading 2**: 2rem, weight 600
- **Body**: 1rem, line-height 1.6

### **Animazioni**
- **Page Transitions**: Fade-to-white, 0.8s/0.4s
- **Scroll Animations**: Trigger at 30% viewport
- **Hover Effects**: Scale, translateY, box-shadow
- **Progress Bars**: 1% incrementi ogni 15ms

### **Componenti Personalizzati**
- **ScrollAnimation**: Wrapper per animazioni on-scroll
- **AnimatedProgressBar**: Progress bar con contatore
- **Cards**: Border radius 12px, hover effects
- **Buttons**: Gradient backgrounds, smooth transitions
- **Navbar**: Fixed con backdrop blur
- **Footer**: Layout grid 3 colonne con contatti social

### **Responsive Breakpoints**
- **Mobile (xs)**: < 600px - Layout centrato, font ridotti, navigazione verticale
- **Small (sm)**: 600px+ - Transizione verso layout desktop
- **Medium (md)**: 900px+ - Layout desktop completo
- **Large (lg)**: 1200px+ - Container max-width

### **Footer Contacts**
Layout a piramide con:
- **GitHub** [@Retr0dev-jpg](https://github.com/Retr0dev-jpg)
- **Email** [marco_simone@svago.online](mailto:marco_simone@svago.online)
- **Instagram** [@_.marco_simone._](https://instagram.com/_.marco_simone._)

## 🎛 Personalizzazione

### **Contenuti**
Le pagine con placeholder possono essere personalizzate:
- `app/competenze/page.tsx` - Competenze specifiche
- `app/difficolta/page.tsx` - Difficoltà incontrate
- `app/facilitatori/page.tsx` - Facilitatori
- `app/motivazione/page.tsx` - Motivazione personale

### **Animazioni**
- Modifica `app/animations.ts` per varianti Framer Motion
- Personalizza delays e durate in `ScrollAnimation`
- Aggiorna curve di easing per effetti diversi

### **Styling**
- Modifica `app/theme.ts` per colori e componenti
- Aggiorna `app/globals.css` per stili globali
- Personalizza componenti in `app/components/`

### **Metadata**
Aggiorna `app/layout.tsx` per:
- Titolo del sito
- Descrizione SEO
- Lingua e meta tags

## 📜 Licenza

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
  <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
</a>

Questo progetto è distribuito sotto licenza **[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/)**.

### Cosa significa:
- ✅ **Condividere** - Puoi riprodurre e ridistribuire il materiale
- ✅ **Adattare** - Puoi remixare, trasformare e costruire sul materiale
- ❌ **Non Commerciale** - Non puoi usare il materiale per scopi commerciali
- 📝 **Attribuzione** - Devi fornire credito appropriato
- 🔄 **Condividi allo stesso modo** - Se remixi, devi distribuire sotto la stessa licenza

## 👨‍💻 Contatti

**Marco Simone Cannizzaro**

### 🌐 Sviluppo
- 🐙 **GitHub**: [@Retr0dev-jpg](https://github.com/Retr0dev-jpg)

### 📱 Contatti Personali  
- 📧 **Email**: [marco_simone@svago.online](mailto:marco_simone@svago.online)
- 📸 **Instagram**: [@_.marco_simone._](https://instagram.com/_.marco_simone._)

---

**Fatto con ❤️ e ⚡ da Marco Simone per l'Esame di Stato 2025**

*Elaborato PCTO • Powered by Next.js • Material UI • Framer Motion • TypeScript*
