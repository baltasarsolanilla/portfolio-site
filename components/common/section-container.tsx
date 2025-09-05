import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const SectionContainer = ({ children, className, id }: SectionContainerProps) => {
  return (
    <section id={id} className={cn('py-20', className)}>
      <div className="section-container">
        {children}
      </div>
    </section>
  );
};