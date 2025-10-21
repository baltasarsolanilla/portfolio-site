import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export function SectionHeader({ title, highlight, subtitle, align = 'center', className }: SectionHeaderProps) {
  return (
    <div className={cn('space-y-4', align === 'center' ? 'text-center' : 'text-left', className)}>
      <h2 className="text-4xl md:text-5xl font-bold">
        {title} {highlight ? <span className="gradient-text">{highlight}</span> : null}
      </h2>
      {subtitle ? (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
