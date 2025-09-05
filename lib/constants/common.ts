import type { SocialLink } from '@/types';

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/baltasarsolanilla',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/baltasarsolanilla',
    icon: 'Linkedin',
  },
] as const satisfies readonly SocialLink[];
