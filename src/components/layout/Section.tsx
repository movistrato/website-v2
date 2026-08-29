import { HTMLAttributes } from 'react';

export function Section({ children, className = '', ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section className={`py-16 md:py-24 ${className}`} {...props}>
      {children}
    </section>
  );
}
