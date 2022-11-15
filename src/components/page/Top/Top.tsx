import type { FC } from 'react';

import { DefaultLayout } from '@/components/layout/DefaultLayout';
import { BlogCard } from '@/components/model/blog/BlogCard';
import type { EndPoints } from '@/lib/cms/types';

type Props = {
  blogs: EndPoints['get']['blogs'][];
};

export const Top: FC<Props> = ({ blogs }) => {
  return (
    <DefaultLayout>
      <ul>
        {blogs.map((blog) => {
          return (
            <li key={blog.id}>
              <BlogCard blog={blog} />
            </li>
          );
        })}
      </ul>
    </DefaultLayout>
  );
};
