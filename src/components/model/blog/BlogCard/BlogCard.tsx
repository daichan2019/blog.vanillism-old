import type { FC } from 'react';
import { formatDate } from 'src/utils/formatDate';

import { Tag } from '@/components/model/tag/Tag';
import { Anchor } from '@/components/ui/ui-elements/Anchor';
import type { EndPoints } from '@/lib/cms/types';

type Props = {
  blog: EndPoints['get']['blogs'];
};

export const BlogCard: FC<Props> = ({ blog }) => {
  return (
    <article>
      <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 py-12'>
        <dl>
          <dt className='sr-only'>Published on</dt>
          <dd className='text-base font-medium leading-6 text-gray-500'>
            <time dateTime={blog.createdAt}>{formatDate(blog.createdAt)}</time>
          </dd>
        </dl>
        <div className='space-y-5 xl:col-span-3'>
          <div className='space-y-6'>
            <div>
              <h2 className='text-2xl font-bold leading-8 tracking-tight text-black'>
                <Anchor as='internal' href={`/articles/${blog.id}`}>
                  {blog.title}
                </Anchor>
              </h2>
              <ul className='my-2 flex gap-2 sm:gap-3 md:gap-4 flex-wrap'>
                {blog.tags.map((tag) => {
                  return (
                    <li key={tag.id}>
                      <Tag tag={tag} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className='prose max-w-none text-gray-500 line-clamp-3'>{blog.summary}</p>
          </div>
          <div className='text-base font-medium leading-6'>
            <div className=''>
              <Anchor
                as='internal'
                href={`/articles/${blog.id}`}
                className='hover:text-orange-500 transition-colors'
              >
                Read more &rarr;
              </Anchor>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
