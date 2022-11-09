import Link from 'next/link';
import type { FC } from 'react';
import { formatDate } from 'src/utils/formatDate';

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
                <Link href={`/blog/${blog.id}`} className='text-gray-900 dark:text-gray-100'>
                  {blog.title}
                </Link>
              </h2>
              <p className='flex flex-wrap'>{blog.category.name}</p>
            </div>
            <div className='prose max-w-none text-gray-500 dark:text-gray-400'>hogehogehoge</div>
          </div>
          <div className='text-base font-medium leading-6'>
            <div className=''>
              <Link href={`/blog/${blog.id}`}>Read more &rarr;</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
