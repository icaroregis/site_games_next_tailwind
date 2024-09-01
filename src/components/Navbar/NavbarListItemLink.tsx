import { cn } from '@/helpers/cn';
import Link from 'next/link';
import { NavbarListItem } from './NavbarListItem';
import { NavbarListItemLinkProps } from './types';

export const NavbarListItemLink = ({ href, children, className, ...props }: NavbarListItemLinkProps) => {
  return (
    <NavbarListItem className={`${cn('p-0', className)}`}>
      <Link
        {...props}
        className="flex items-center gap-2 p-2 rounded-lg w-full"
        href={href}>
        {children}
      </Link>
    </NavbarListItem>
  );
};
