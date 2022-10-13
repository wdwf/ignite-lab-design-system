import { ReactNode } from 'react';
import { Slot }  from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'py-3 px-4 bg-cyan-900 rounded font-semibold text-white text-sm w-full transition-colors hover:bg-cyan-700 focus:ring-2 ring-white'
      )}
    >
      {children}
    </Comp>
  )
}