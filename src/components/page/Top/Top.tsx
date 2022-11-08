import type { FC } from 'react';

import { Header } from '@/components/ui/layouts/Header';
import type { EndPoints } from '@/lib/cms/types';

type Props = {
  blogs: EndPoints['gets']['blogs'][];
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
                  <div>{blog.title}</div>
                </li>
              );
            })}
            {/* {blogs.map((blog) => {
              return (
                <li key={blog.id}>
                  <BlogCard>
                    <BlogCard.Title>{blog.title}</BlogCard.Title>
                    <BlogCard.CreatedAt>{blog.createdAt}</BlogCard.CreatedAt>
                  </BlogCard>
                </li>
              );
            })} */}
          </ul>
        </main>
        <aside></aside>
      </div>
    </div>
  );
};
