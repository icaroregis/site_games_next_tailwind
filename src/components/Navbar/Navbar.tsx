import { HomeIcon } from '@/components';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className="flex flex-col gap-4 bg-slate-900 border-r border-indigo-400/40 hover:border-indigo-400/80 w-72 p-2 h-screen">
      <div className="flex justify-center items-center">
        <Image
          src="/IMG_20240504_155217.svg"
          alt="Logo"
          className="max-w-full p-2"
          width={200}
          height={200}
        />
      </div>
      <ul className="flex-1 my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer">
          <HomeIcon
            color="#F0F"
            className="w-4 h-4"
          />
          Home
        </li>
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer">Games</li>
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer">Top 10</li>
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer">Walkthroughs</li>
      </ul>
      <ul className="flex-3 my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer">User</li>
      </ul>
    </nav>
  );
};
