import type { FC } from 'react';

import { BlogCard } from '@/components/model/blog/BlogCard';
import { Header } from '@/components/ui/layouts/Header';
import type { EndPoints } from '@/lib/cms/types';

type Props = {
  blogs: EndPoints['get']['blogs'][];
};

export const Top: FC<Props> = ({ blogs }) => {
  return (
    <div className='bg-neutral-50'>
      <Header />
      <div className='flex'>
        <main className='max-w-2xl'>
          <ul>
            {blogs.map((blog) => {
              return (
                <li key={blog.id}>
                  <BlogCard blog={blog} />
                </li>
              );
            })}
          </ul>
        </main>
        <aside></aside>
      </div>
    </div>
  );
};
