import type { FC } from 'react';
import { formatDate } from 'src/utils/formatDate';

import { Header } from '@/components/layout/Header';
import { Tag } from '@/components/model/tag/Tag';
import type { EndPoints } from '@/lib/cms/types';

type Props = {
  blog: EndPoints['get']['blogs'];
};

export const Article: FC<Props> = ({ blog }) => {
  return (
    <div className='bg-neutral-50'>
      <Header />
      <div className='py-12'>
        <div className='container m-auto flex max-w-5xl flex-1'>
          <main>
            <h2 className='my-2 text-2xl font-extrabold leading-9 tracking-tight sm:my-3 sm:text-3xl sm:leading-10 md:my-4 md:text-4xl'>
              {blog.title}
            </h2>
            <time className='text-gray-600' dateTime={blog.createdAt}>
              {formatDate(blog.createdAt)}
            </time>
            <ul className='my-2 flex gap-2'>
              {blog.tags.map((tag) => {
                return (
                  <li key={tag.id}>
                    <Tag tag={tag} />
                  </li>
                );
              })}
            </ul>
            <div
              className='prose pt-7 text-black'
              dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
            ></div>
          </main>
        </div>
      </div>
    </div>
  );
};
