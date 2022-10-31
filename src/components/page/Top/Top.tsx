import useAspidaSWR from '@aspida/swr';
import type { FC } from 'react';

import { Header } from '@/components/ui/layouts/Header';
import { client } from '@/lib/cms/utils/index';

export const Top: FC = () => {
  const { data, error } = useAspidaSWR(client.blogs, { query: { limit: 10 } });

  console.log(data);

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
