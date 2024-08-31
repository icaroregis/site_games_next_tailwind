import { FaceHappyIcon, GamepadIcon, HomeIcon, PrizeIcon, RouteIcon } from '@/components';
import Image from 'next/image';

const Navbarlist = ({ children, className }: any) => {
  return <ul className={`my-4 border-t border-indigo-400/20 hover:border-indigo-400/40 ${className}`}>{children}</ul>;
};

const NavbarListItem = ({ children, className }: any) => {
  return (
    <li
      className={`my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 hover:text-slate-100 cursor-pointer flex items-center gap-2 ${className}`}>
      {children}
    </li>
  );
};

export const Navbar = () => {
  return (
    <nav className="flex flex-col gap-4 bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300 h-screen">
      <div className="flex justify-center items-center">
        <Image
          src="/IMG_20240504_155217.svg"
          alt="Logo"
          className="max-w-full p-2"
          width={200}
          height={200}
        />
      </div>
      <Navbarlist className="flex-1">
        <NavbarListItem>
          <HomeIcon className="w-4 h-4" /> Home
        </NavbarListItem>
        <NavbarListItem>
          <GamepadIcon className="w-4 h-4" /> Games
        </NavbarListItem>
        <NavbarListItem>
          <PrizeIcon className="w-4 h4" /> Top 10
        </NavbarListItem>
        <NavbarListItem>
          <RouteIcon className="w-4 h4" /> Walkthroughs
        </NavbarListItem>
      </Navbarlist>

      <Navbarlist>
        <NavbarListItem>
          <FaceHappyIcon className="w-4 h4" /> User
        </NavbarListItem>
      </Navbarlist>
    </nav>
  );
};
