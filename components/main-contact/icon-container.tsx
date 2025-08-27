import { LucideIcon } from 'lucide-react';

type IconContainerProps = {
  icon: LucideIcon;
  size?: number;
  className?: string;
};

export default function IconContainer({
  icon,
  size = 32,
  className = '',
}: IconContainerProps) {
  const Icon = icon;

  return (
    <div
      className={`w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 ${className}`}
    >
      <Icon size={size} />
    </div>
  );
}
