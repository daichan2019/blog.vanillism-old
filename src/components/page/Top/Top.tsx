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
      <div className='py-12'>
        <div className='container m-auto flex max-w-5xl flex-1'>
          <main>
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
        </div>
      </div>
    </div>
  );
};
