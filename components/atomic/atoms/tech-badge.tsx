import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type TechBadgeProps = React.ComponentPropsWithoutRef<typeof Badge> & {
  hover?: boolean;
};

export function TechBadge({ className, hover = false, children, ...props }: TechBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={cn(
        'bg-surface text-foreground cursor-default',
        hover && 'hover:bg-surface-elevated',
        className,
      )}
      {...props}
    >
      <div className="text-sm font-medium">{children}</div>
    </Badge>
  );
}
