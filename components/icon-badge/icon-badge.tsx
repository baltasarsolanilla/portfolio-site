import { LucideIcon } from 'lucide-react';

type IconBadge = {
  icon: LucideIcon;
  size?: number;
  className?: string;
};

export default function IconBadge({
  icon,
  size = 32,
  className = '',
}: IconBadge) {
  const Icon = icon;

  return (
    <div
      className={`w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 ${className}`}
    >
      <Icon size={size} />
    </div>
  );
}
