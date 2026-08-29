import { HTMLAttributes } from 'react';

export function Stack({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex flex-col gap-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
