import type { FC } from 'react';

import { DefaultLayout } from '@/components/layout/DefaultLayout';
import { BlogCard } from '@/components/model/blog/BlogCard';
import { Pagination } from '@/components/ui/ui-parts/Pagination/Pagination';
import type { EndPoints } from '@/lib/cms/types';

type Props = {
  blogs: EndPoints['get']['blogs'][];
  totalCount: number;
};

export const Articles: FC<Props> = ({ blogs, totalCount }) => {
  return (
    <DefaultLayout>
      <ul className='divide-y divide-gray-200'>
        {blogs.map((blog) => {
          return (
            <li key={blog.id}>
              <BlogCard blog={blog} />
            </li>
          );
        })}
      </ul>
      <Pagination totalCount={totalCount} />
    </DefaultLayout>
  );
};
