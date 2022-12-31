import type { FC } from 'react';

import { DefaultLayout } from '@/components/layout/DefaultLayout';
import { BlogCard } from '@/components/model/blog/BlogCard';
import { DynamicOGP } from '@/components/ui/ui-parts/DynamicOGP';
import type { EndPoints } from '@/lib/cms/types';

type Props = {
  blogs: EndPoints['get']['blogs'][];
};

export const Top: FC<Props> = ({ blogs }) => {
  return (
    <DefaultLayout>
      <DynamicOGP
        baseImageUrl='https://images.microcms-assets.io/assets/f0cbdfe7724f4cb185721af826d532e7/e417df4db11a4a659df2e7de05e9011f/blog.vanillsm-ogp.png'
        title='今更ながら、Next.js + TypeScript + Tailwind.css + MicroCMSを使用したブログを作ってみた'
      />
      <ul className='divide-y divide-gray-200'>
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
