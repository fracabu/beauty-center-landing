# Beauty Center Landing Page

Una moderna landing page per un centro estetico, realizzata con React, TypeScript, e Tailwind CSS. L'applicazione include animazioni fluide, routing dinamico, e un design responsivo.

## 🚀 Tecnologie Utilizzate

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (per le animazioni)
- React Router DOM (per il routing)
- Lucide React (per le icone)

## 📦 Installazione

1. Clona il repository:
```bash
git clone [url-del-tuo-repository]
```

2. Installa le dipendenze:
```bash
npm install
```

3. Avvia il server di sviluppo:
```bash
npm run dev
```

L'applicazione sarà disponibile all'indirizzo `http://localhost:5173`

## 🏗️ Struttura del Progetto

```
src/
├── components/
│   ├── Navigation/
│   │   ├── Navigation.tsx
│   │   ├── NavLink.tsx
│   │   ├── Logo.tsx
│   │   ├── MobileMenu.tsx
│   │   └── BookButton.tsx
│   ├── Hero/
│   ├── Services/
│   ├── Contact/
│   └── Footer/
├── pages/
│   ├── ServicesPage.tsx
│   ├── TreatmentsPage.tsx
│   ├── PricingPage.tsx
│   └── ContactPage.tsx
├── hooks/
│   └── useScrollPosition.ts
└── App.tsx
```

## 📱 Funzionalità

- **Design Responsivo**: Ottimizzato per mobile, tablet e desktop
- **Navigazione Fluida**: Routing client-side con React Router
- **Animazioni**: Transizioni ed effetti animati con Framer Motion
- **Form di Contatto**: Modulo per richieste e prenotazioni
- **Mappa Interattiva**: Integrazione con Google Maps
- **Menu Mobile**: Interfaccia ottimizzata per dispositivi mobili

## 🛠️ Scripts Disponibili

- `npm run dev`: Avvia il server di sviluppo
- `npm run build`: Crea la build di produzione
- `npm run preview`: Visualizza in anteprima la build di produzione
- `npm run lint`: Esegue il linting del codice

## 🖼️ Sezioni

- **Home**: Landing page principale con hero section
- **Servizi**: Panoramica dei servizi offerti
- **Trattamenti**: Lista dettagliata dei trattamenti disponibili
- **Prezzi**: Listino prezzi completo
- **Contatti**: Form di contatto e informazioni

## 🔧 Personalizzazione

Per modificare i contenuti, puoi editare i file nelle rispettive cartelle:
- Modifica i testi in `src/pages/`
- Aggiorna le immagini sostituendo gli URL da Unsplash
- Personalizza i colori nel file `tailwind.config.js`
- Modifica le animazioni nei componenti che utilizzano Framer Motion

## 📝 Note

- L'applicazione utilizza TypeScript per un codice più robusto e manutenibile
- Le animazioni sono ottimizzate per prestazioni fluide
- Il design segue le best practice moderne di UI/UX

## 📄 Licenza

MIT License - vedi il file LICENSE per i dettagli.