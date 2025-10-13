import { LucideIcon } from 'lucide-react';

type MyWorkLinkProps = React.ComponentPropsWithoutRef<'a'> & {
  url: string;
  label: string;
  icon: LucideIcon;
};

export function MyWorkLink({
  url,
  label,
  icon,
  className,
  ...props
}: MyWorkLinkProps) {
  const LinkIcon = icon;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      <LinkIcon size={16} className="mr-1" />
      {label}
    </a>
  );
}
