import { LucideIcon } from 'lucide-react';

export type IconLinkProps = React.ComponentPropsWithoutRef<'a'> & {
  url: string;
  label: string;
  icon: LucideIcon;
};

export function IconLink({ url, label, icon, className, ...props }: IconLinkProps) {
  const LinkIcon = icon;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={className} {...props}>
      <LinkIcon size={16} className="mr-1" />
      {label}
    </a>
  );
}
