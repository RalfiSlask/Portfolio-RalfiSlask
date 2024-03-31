import { Variants } from 'framer-motion';

export const chatSpotifyVariant: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 25,
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.8,
    },
  },
};

export const TechnicalSkillsVariant: Variants = {
  offscreen: {
    x: 100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'ease',
      bounce: 0,
      duration: 0.8,
    },
  },
};

export const projectVariant: Variants = {
  offscreen: {
    y: 150,
    opacity: 0,
  },
  onscreen: {
    y: 15,
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 1,
    },
  },
};

export const LargeTextVariant: Variants = {
  offscreen: {
    x: -50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'ease',
      bounce: 0,
      duration: 0.4,
    },
  },
};

export const MediumTextVariant: Variants = {
  offscreen: {
    x: -50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: 0,

    transition: {
      type: 'ease',
      bounce: 0,
      duration: 0.4,
      delay: 0.2,
    },
  },
};

export const FadeInFromRight: Variants = {
  offscreen: {
    x: 50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: 0,

    transition: {
      type: 'ease',
      bounce: 0,
      duration: 0.6,
    },
  },
};

export const FadeInFromRightDelayed: Variants = {
  offscreen: {
    x: 50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: 0,

    transition: {
      type: 'ease',
      bounce: 0,
      duration: 0.6,
      delay: 0,
    },
  },
};

export const FadeInFromRightLast: Variants = {
  offscreen: {
    x: 50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: 0,

    transition: {
      type: 'ease',
      bounce: 0,
      duration: 0.6,
      delay: 0.2,
    },
  },
};
