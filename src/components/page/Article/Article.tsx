import type { FC } from 'react';

import { Header } from '@/components/ui/layouts/Header';
import type { EndPoints } from '@/lib/cms/types';

type Props = {
  blog: EndPoints['get']['blogs'];
};

export const Article: FC<Props> = ({ blog }) => {
  console.log(blog);

  return (
    <div className='bg-neutral-50'>
      <Header />
      <div className='py-12'>
        <div className='container m-auto flex max-w-5xl flex-1'>
          <main>
            <h2 className='text-2xl font-extrabold leading-9 tracking-tight sm:text-3xl sm:leading-10 md:text-4xl md:leading-14'>
              {blog.title}
            </h2>
            <div
              className='prose pt-7 text-black'
              dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
            ></div>
          </main>
        </div>
      </div>
    </div>
  );
};
