import type { FC, ReactNode } from 'react';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

type Props = {
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <div className='bg-neutral-50 flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 overflow-x-hidden'>
        <div className='py-12 mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>{children}</div>
      </main>
      <Footer />
    </div>
  );
};
