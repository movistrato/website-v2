import { HTMLAttributes } from 'react';

export function Grid({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={['grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 lg:gap-6', className].filter(Boolean).join(' ')} 
      {...props}
    >
      {children}
    </div>
  );
}
