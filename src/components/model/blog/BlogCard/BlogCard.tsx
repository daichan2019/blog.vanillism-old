import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import type { EndPoints } from '@/lib/cms/types';

type Props = {
  blog: EndPoints['get']['blogs'];
};

export const BlogCard: FC<Props> = ({ blog }) => {
  return (
    <div className='flex flex-col items-center rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row'>
      <Link href={`/articles/${blog.id}`}>
        <div className='relative aspect-video rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'>
          <Image src={blog.eyecatch.url} alt='' layout='fill' />
        </div>
      </Link>
      <div className='flex flex-1 flex-col justify-between p-4 leading-normal'>
        <h5 className='font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl'>
          {blog.title}
        </h5>
        <p className='mt-3 font-normal text-gray-700 dark:text-gray-400'>
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
          chronological order.
        </p>
      </div>
    </div>
  );
};
