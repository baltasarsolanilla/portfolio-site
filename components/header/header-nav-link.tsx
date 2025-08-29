import Link from 'next/link';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
};

export default function NavLink({
  href,
  children,
  isActive = false,
  className = '',
}: NavLinkProps) {
  const baseClasses = 'hover:text-purple-300 transition-colors';
  const activeClasses = isActive ? 'text-purple-400' : '';
  const combinedClasses = `${baseClasses} ${activeClasses} ${className}`.trim();

  return (
    <Link href={href} className={combinedClasses}>
      {children}
    </Link>
  );
}
