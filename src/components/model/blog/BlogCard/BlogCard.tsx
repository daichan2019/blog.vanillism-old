import type { FC } from 'react';
import { formatDate } from 'src/utils/formatDate';

import { Anchor } from '@/components/ui/ui-elements/Anchor';
import type { EndPoints } from '@/lib/cms/types';

type Props = {
  blog: EndPoints['get']['blogs'];
};

export const BlogCard: FC<Props> = ({ blog }) => {
  return (
    <article>
      <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
        <dl>
          <dt className='sr-only'>Published on</dt>
          <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
            <time dateTime={blog.createdAt}>{formatDate(blog.createdAt)}</time>
          </dd>
        </dl>
        <div className='space-y-5 xl:col-span-3'>
          <div className='space-y-6'>
            <div>
              <h2 className='text-2xl font-bold leading-8 tracking-tight'>
                <Anchor
                  as='internal'
                  href={`/articles/${blog.id}`}
                  className='text-gray-900 dark:text-gray-100'
                >
                  {blog.title}
                </Anchor>
              </h2>
              <Anchor
                as='internal'
                href={`/categories/${blog.category.id}`}
                className='flex text-sm font-medium text-orange-500 hover:text-orange-600 dark:hover:text-orange-500'
              >
                {blog.category.name}
              </Anchor>
            </div>
            <p className='prose max-w-none text-gray-500 line-clamp-3 dark:text-gray-400'>
              {blog.summary}
            </p>
          </div>
          <div className='text-base font-medium leading-6'>
            <div className=''>
              <Anchor as='internal' href={`/articles/${blog.id}`}>
                Read more &rarr;
              </Anchor>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
