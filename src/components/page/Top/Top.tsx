import type { FC } from 'react';

import { Header } from '@/components/ui/layouts/Header';

export const Top: FC = () => {
  return (
    <div className='bg-neutral-50'>
      <Header />
      <div className='flex'>
        <main className='max-w-2xl'></main>
        <aside></aside>
      </div>
    </div>
  );
};
