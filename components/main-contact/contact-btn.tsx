import { LucideIcon } from 'lucide-react';

type ContactBtnProps = {
  icon: LucideIcon;
  url: string;
};

export default function ContactBtn({ icon, url }: ContactBtnProps) {
  const Icon = icon;

  return (
    <a
      href={url}
      className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={24} />
    </a>
  );
}
