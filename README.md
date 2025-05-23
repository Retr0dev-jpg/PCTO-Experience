# 🎓 PCTO Experience - Elaborato Marco Simone Cannizzaro

Un sito web moderno e professionale per documentare l'esperienza PCTO (Percorsi per le Competenze Trasversali e l'Orientamento), realizzato con Next.js e Material UI.

![Next.js](https://img.shields.io/badge/Next.js-15.1.8-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Material-UI](https://img.shields.io/badge/Material--UI-7.1.0-007FFF?style=for-the-badge&logo=mui)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey?style=for-the-badge)

## 📋 Indice

- [Panoramica](#-panoramica)
- [Caratteristiche](#-caratteristiche)
- [Struttura del Progetto](#-struttura-del-progetto)
- [Tecnologie Utilizzate](#-tecnologie-utilizzate)
- [Installazione e Avvio](#-installazione-e-avvio)
- [Pagine del Sito](#-pagine-del-sito)
- [Design e UI/UX](#-design-e-uiux)
- [Personalizzazione](#-personalizzazione)
- [Licenza](#-licenza)
- [Contatti](#-contatti)

## 🎯 Panoramica

Questo progetto rappresenta la documentazione digitale dell'esperienza PCTO di **Marco Simone Cannizzaro**. Il sito è stato progettato per presentare in modo professionale e interattivo il percorso formativo, gli obiettivi raggiunti, le competenze acquisite e le riflessioni finali.

### 🎨 Design Philosophy

Il design si ispira ai siti moderni come Next.js, React.dev e Vercel, con:
- **Minimalismo elegante**: interfaccia pulita e focalizzata sui contenuti
- **Tipografia moderna**: font Inter per massima leggibilità
- **Palette coerente**: colori ispirati all'ecosistema Next.js/Vercel
- **Responsive design**: ottimizzato per tutti i dispositivi

## ✨ Caratteristiche

- ✅ **Design Moderno** - Interfaccia ispirata a Next.js e Vercel
- ✅ **Responsive** - Ottimizzato per tutti i dispositivi
- ✅ **Performance** - Server-side rendering con Next.js
- ✅ **SEO Ottimizzato** - Meta tags e struttura semantica
- ✅ **TypeScript** - Type safety completa
- ✅ **Material UI** - Componenti professionali

## 📁 Struttura del Progetto

```
app/                          # App Router di Next.js
├── components/              # Componenti riutilizzabili
│   ├── Layout.tsx          # Layout wrapper principale
│   ├── Navbar.tsx          # Barra di navigazione
│   └── Footer.tsx          # Footer del sito
├── descrizione/            # Pagina descrizione PCTO
├── obiettivi/              # Pagina obiettivi formativi
├── competenze/             # Pagina competenze specifiche
├── difficolta/             # Pagina difficoltà incontrate
├── facilitatori/           # Pagina facilitatori
├── motivazione/            # Pagina motivazione
├── conclusione/            # Pagina conclusioni
├── globals.css             # Stili globali
├── layout.tsx              # Layout root con providers
├── page.tsx                # Homepage principale
└── theme.ts                # Tema Material UI personalizzato
public/                      # Asset statici
package.json                # Dipendenze del progetto
README.md                   # Documentazione
```

## 🛠 Tecnologie Utilizzate

### **Frontend Framework**
- **[Next.js 15.1.8](https://nextjs.org/)** - Framework React con App Router
- **[React 18](https://react.dev/)** - Libreria UI component-based
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety e migliore DX

### **UI/UX Libraries**
- **[Material UI](https://mui.com/)** - Component library professionale
- **[Material Icons](https://mui.com/material-ui/material-icons/)** - Set di icone coerente
- **[Emotion](https://emotion.sh/)** - CSS-in-JS per styling dinamico

### **Styling & Design**
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Inter Font](https://fonts.google.com/specimen/Inter)** - Tipografia moderna
- **CSS Grid & Flexbox** - Layout responsive moderno

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
- **Hero Section** - Titolo principale e introduzione
- **Feature Cards** - Panoramica delle sezioni principali
- **Portfolio Section** - Link al profilo GitHub
- **Call-to-Action** - Invito all'esplorazione

### 📖 **Descrizione** (`/descrizione`)
Panoramica completa dell'esperienza PCTO con:
- Timeline delle fasi dell'esperienza
- Contesto e obiettivi generali
- Metodologia di lavoro

### 🎯 **Obiettivi** (`/obiettivi`)
I quattro obiettivi formativi principali:
- **Autonomia** - Capacità di lavorare indipendentemente
- **Confronto** - Competenze relazionali e comunicative
- **Comprensione** - Analisi e interpretazione delle consegne
- **Rispetto** - Gestione scadenze e standard qualitativi

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
- **Text Primary**: `#171717` (quasi nero)
- **Text Secondary**: `#737373` (grigio neutro)
- **Background**: `#ffffff` / `#fafafa`

### **Tipografia**
- **Font**: Inter (ottimizzato per leggibilità)
- **Heading 1**: 2.5rem, weight 700
- **Heading 2**: 2rem, weight 600
- **Body**: 1rem, line-height 1.6

### **Componenti Personalizzati**
- **Cards**: Border radius 12px, hover effects
- **Buttons**: Gradient backgrounds, smooth transitions
- **Navbar**: Glass morphism effect, hide-on-scroll
- **Timeline**: Material UI Lab con icone tematiche

### **Responsive Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎛 Personalizzazione

### **Contenuti**
Le pagine con placeholder possono essere personalizzate:
- `app/competenze/page.tsx` - Competenze specifiche
- `app/difficolta/page.tsx` - Difficoltà incontrate
- `app/facilitatori/page.tsx` - Facilitatori
- `app/motivazione/page.tsx` - Motivazione personale

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
- 🐙 **GitHub**: [@Retr0dev-jpg](https://github.com/Retr0dev-jpg)
- 📧 **Email**: [marco_simone@svago.online](mailto:marco_simone@svago.online)

---

**Fatto con ❤️ da Marco Simone per il progetto PCTO**
