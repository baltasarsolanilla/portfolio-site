'use client';

import NavLink from './nav-link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function HeaderNavBar() {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item) => {
        const isActive = pathname === item.path;

        return (
          <NavLink key={item.path} href={item.path} isActive={isActive}>
            {item.name}
          </NavLink>
        );
      })}
    </>
  );
}
