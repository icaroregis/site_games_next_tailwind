'use client';

import { cn } from '@/helpers/cn';
import { NavbarListItem } from './NavbarListItem';
import { NavbarListItemButtonProps } from './types';

export const NavbarListItemButton = ({ children, className, ...props }: NavbarListItemButtonProps) => {
  return (
    <NavbarListItem className={`${cn('p-0', className)}`}>
      <button
        {...props}
        className="flex items-center gap-2 p-2 rounded-lg w-full">
        {children}
      </button>
    </NavbarListItem>
  );
};
