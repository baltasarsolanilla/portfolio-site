import { Github, Linkedin, Mail, LucideIcon } from 'lucide-react';

export type SocialIconName = 'Github' | 'Linkedin' | 'Mail';

const ICONS: Record<SocialIconName, LucideIcon> = {
  Github,
  Linkedin,
  Mail,
};

export function SocialIcon({ name, size = 24 }: { name: SocialIconName; size?: number }) {
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon size={size} />;
}
