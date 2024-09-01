import { FaceHappyIcon, GamepadIcon, HomeIcon, PrizeIcon, RouteIcon } from '@/components';
import { cn } from '@/helpers/cn';
import Image from 'next/image';
import { NavbarListItemLink } from './NavbarListItemLink';
import { Navbarlist } from './Navbarlist';
import { NavbarProps } from './types';

export const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <nav
      {...props}
      className={cn(
        'flex flex-col gap-4 bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300 h-screen',
        className,
      )}>
      <div className="flex justify-center items-center">
        <Image
          src="/1725151679480.png"
          alt="Logo"
          className="max-w-full p-2"
          width={200}
          height={200}
        />
      </div>

      <Navbarlist className="flex-1">
        <NavbarListItemLink href="/">
          <HomeIcon className="w-4 h-4" /> Home
        </NavbarListItemLink>
        <NavbarListItemLink href="/games">
          <GamepadIcon className="w-4 h-4" /> Games
        </NavbarListItemLink>
        <NavbarListItemLink href="/top-10">
          <PrizeIcon className="w-4 h4" /> Top 10
        </NavbarListItemLink>
        <NavbarListItemLink href="/walkthroughs">
          <RouteIcon className="w-4 h4" /> Walkthroughs
        </NavbarListItemLink>
      </Navbarlist>

      <Navbarlist>
        <NavbarListItemLink href="/user">
          <FaceHappyIcon className="w-4 h4" /> User
        </NavbarListItemLink>
      </Navbarlist>
    </nav>
  );
};
