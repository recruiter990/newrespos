export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Servizi" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "Chi Siamo" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contatti" },
];

export const SERVICES = [
  {
    id: "social-media",
    title: "Social Media Management",
    description: "Gestione completa dei tuoi profili social con contenuti coinvolgenti e strategia mirata",
    icon: "Instagram",
    features: [
      "Content calendar personalizzato",
      "Creazione post e storie",
      "Reels e TikTok",
      "Community management",
      "Analytics e report mensili",
    ],
  },
  {
    id: "cold-email",
    title: "Cold Email Marketing",
    description: "Campagne email che convertono sconosciuti in clienti fedeli",
    icon: "Mail",
    features: [
      "Lead generation",
      "Sequenze email personalizzate",
      "A/B testing",
      "Analytics e tracking",
      "40% open rate medio",
    ],
  },
  {
    id: "delivery",
    title: "Setup Delivery Online",
    description: "Porta il tuo ristorante su tutte le app di delivery",
    icon: "ShoppingBag",
    features: [
      "Integrazione Glovo, Deliveroo, JustEat",
      "Ottimizzazione menu",
      "Foto professionali",
      "Strategia pricing",
      "Negoziazione commissioni",
    ],
  },
  {
    id: "gmb",
    title: "Google My Business",
    description: "Ottimizzazione per la visibilità locale su Google",
    icon: "MapPin",
    features: [
      "Profilo ottimizzato",
      "Gestione recensioni",
      "Local SEO",
      "Visibilità su Google Maps",
    ],
  },
  {
    id: "content",
    title: "Content Creation",
    description: "Foto e video professionali per il tuo brand",
    icon: "Camera",
    features: [
      "Fotografia professionale",
      "Video production",
      "Reels e TikTok",
      "Graphic design",
    ],
  },
  {
    id: "consulting",
    title: "Business Consulting",
    description: "Strategie di crescita personalizzate per il tuo business",
    icon: "TrendingUp",
    features: [
      "Idee startup",
      "Strategie di crescita",
      "Analisi di mercato",
      "Ricerca competitor",
    ],
  },
];

export const STATS = [
  { value: 150, suffix: "+", label: "Clienti Soddisfatti" },
  { value: 300, suffix: "%", label: "Crescita Media Vendite" },
  { value: 50, suffix: "M+", label: "Impressioni Social" },
  { value: 10, suffix: "K+", label: "Email Inviate" },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Analisi Gratuita",
    description: "Analizziamo il tuo business e identifichiamo le opportunità di crescita",
  },
  {
    step: 2,
    title: "Strategia Personalizzata",
    description: "Creiamo un piano su misura per i tuoi obiettivi e budget",
  },
  {
    step: 3,
    title: "Implementazione",
    description: "Mettiamo in pratica la strategia con contenuti e campagne mirate",
  },
  {
    step: 4,
    title: "Monitoraggio & Ottimizzazione",
    description: "Monitoriamo i risultati e ottimizziamo continuamente le performance",
  },
  {
    step: 5,
    title: "Crescita Continua",
    description: "Scaliamo i successi e troviamo nuove opportunità di crescita",
  },
];

export const PRICING_PLANS = {
  socialMedia: [
    {
      name: "Starter",
      price: 299,
      period: "mese",
      features: [
        "12 post/mese",
        "1 piattaforma",
        "Stories settimanali",
        "Report mensile",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: 499,
      period: "mese",
      features: [
        "20 post/mese",
        "2 piattaforme",
        "Stories giornaliere",
        "Reels settimanali",
        "Community management",
        "Report settimanale",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: 799,
      period: "mese",
      features: [
        "30 post/mese",
        "3 piattaforme",
        "Contenuti giornalieri",
        "Reels + TikTok",
        "Ads management",
        "Consulenza strategica",
        "Report in tempo reale",
      ],
      popular: false,
    },
  ],
  emailMarketing: [
    {
      name: "Basic",
      price: 199,
      period: "mese",
      features: [
        "1000 email/mese",
        "1 campagna",
        "Template base",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: 399,
      period: "mese",
      features: [
        "5000 email/mese",
        "4 campagne",
        "A/B testing",
        "Automazioni",
      ],
      popular: true,
    },
  ],
  oneTime: [
    {
      name: "Delivery Setup",
      price: 499,
      period: "una tantum",
      features: [
        "Setup completo",
        "Ottimizzazione menu",
        "Foto professionali",
      ],
    },
    {
      name: "GMB Optimization",
      price: 199,
      period: "una tantum",
      features: [
        "Profilo ottimizzato",
        "Local SEO",
        "Gestione recensioni",
      ],
    },
    {
      name: "Brand Identity",
      price: 699,
      period: "una tantum",
      features: [
        "Logo design",
        "Brand guidelines",
        "Materiali brand",
      ],
    },
  ],
};

