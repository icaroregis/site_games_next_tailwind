'use client';

import { cn } from '@/helpers/cn';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { ELLIPSIS_LEFT, ELLIPSIS_RIGHT, generatePages } from './generatePages';

export interface IPaginationProps {
  currentPage: number;
  totalPages: number;
}

export const Pagination = ({ currentPage, totalPages }: IPaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pages = generatePages(currentPage, totalPages);
  //const { replace } = useRouter();

  return (
    <ul className="inline-flex h-10 overflow-hidden rounded-md text-base border border-green-master/40">
      {pages.map((page) => {
        //! Maneira 1 => Construa a URL manualmente quando você precisa de uma URL para passar como href ou para manipular um link estático, como no caso do componente de paginação.
        const isEllipsis = page === ELLIPSIS_LEFT || page === ELLIPSIS_RIGHT;
        const params = new URLSearchParams(searchParams);
        params.set('page', page.toString());
        const url = `${pathname}?${params.toString()}`;
        const isCurrentPage = page === currentPage;

        //! Maneira 2 => Use replace quando você quiser navegar para uma nova URL programaticamente, substituindo a URL atual no navegador. Geralmente utilizado em filtros em query parameters.
        // const params = new URLSearchParams();
        // params.set('page', page.toString());
        // const url = replace(`${pathname}?${params}`);

        if (isEllipsis) {
          return (
            <li
              key={page}
              className="border-x border-green-master/60 first:rounded-l last-rounded-r first:border-0 last:border-0">
              <span className="flex h-10 items-center justify-center bg-green-master/20 hover:bg-green-master/50 px-4 hover:text-slate-300">
                ...
              </span>
            </li>
          );
        }

        return (
          <li
            key={page}
            className="border-x border-green-master/60 first:rounded-l last-rounded-r first:border-0 last:border-0">
            <Link
              href={url}
              className={cn(
                'flex h-10 items-center justify-center bg-green-master/20 hover:bg-green-master/50 px-4 hover:text-slate-300',
                {
                  'bg-green-master/50 text-slate-300': isCurrentPage,
                },
              )}>
              {page}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
