import { cn } from '@/helpers/cn';
import { NavbarListItemProps } from './types';

export const NavbarListItem = ({ children, className, ...props }: NavbarListItemProps) => {
  return (
    <li
      {...props}
      className={cn(
        'my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 hover:text-slate-100 cursor-pointer flex items-center gap-2',
        className,
      )}>
      {children}
    </li>
  );
};
