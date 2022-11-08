import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import type { EndPoints } from '@/lib/cms/types';

type Props = {
  blog: EndPoints['get']['blogs'];
};

export const BlogCard: FC<Props> = ({ blog }) => {
  return (
    <div className='max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800'>
      <Link
        className='flex flex-col items-center rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row'
        href={`/articles/${blog.id}`}
      >
        <Image src={blog.eyecatch.url} alt='' width={30} height={20} />
      </Link>
    </div>
  );
};
