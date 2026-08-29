import { HTMLAttributes } from 'react';

export function Container({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mx-auto max-w-[1440px] px-4 md:px-8 ${className}`} {...props}>
      {children}
    </div>
  );
}
