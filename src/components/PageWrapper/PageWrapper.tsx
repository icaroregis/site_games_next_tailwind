import { ReactNode } from 'react';

type PageWrapperProps = {
  children: ReactNode;
};

export const PageWrapper = ({ children }: Readonly<PageWrapperProps>) => {
  return <div className="ml-72">{children}</div>;
};
