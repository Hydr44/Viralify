import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2026-02-25.clover',
  typescript: true,
});

// Piani di pricing
export const PLANS = {
  FREE: {
    name: 'Free',
    price: 0,
    priceId: null,
    features: [
      '5 video al mese',
      'Max 5 minuti per video',
      '3 clip per video',
      'Watermark SnappClip',
      'Qualità standard',
    ],
    limits: {
      videosPerMonth: 5,
      maxVideoDuration: 300, // 5 minuti in secondi
      clipsPerVideo: 3,
    },
  },
  PRO: {
    name: 'Pro',
    price: 29,
    priceId: 'price_pro_monthly', // Creeremo questo su Stripe
    features: [
      'Video illimitati',
      'Max 30 minuti per video',
      '10 clip per video',
      'Nessun watermark',
      'Qualità HD',
      'Priorità processing',
      'Export in batch',
    ],
    limits: {
      videosPerMonth: -1, // illimitato
      maxVideoDuration: 1800, // 30 minuti
      clipsPerVideo: 10,
    },
  },
  ENTERPRISE: {
    name: 'Enterprise',
    price: 99,
    priceId: 'price_enterprise_monthly',
    features: [
      'Tutto di Pro +',
      'Video fino a 2 ore',
      'Clip illimitati',
      'API access',
      'White label',
      'Supporto prioritario',
      'Custom branding',
      'Team collaboration',
    ],
    limits: {
      videosPerMonth: -1,
      maxVideoDuration: 7200, // 2 ore
      clipsPerVideo: -1, // illimitato
    },
  },
} as const;

export type PlanType = keyof typeof PLANS;
