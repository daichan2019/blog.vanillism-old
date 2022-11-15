import type { FC } from 'react';

import { DefaultLayout } from '@/components/layout/DefaultLayout';
import { Anchor } from '@/components/ui/ui-elements/Anchor';
import type { EndPoints } from '@/lib/cms/types';

type Props = {
  tags: EndPoints['get']['tags'][];
};

export const Tags: FC<Props> = ({ tags }) => {
  const sortedTags = tags.sort((a, b) => {
    return Number(a.name) - Number(b.name);
  });

  return (
    <DefaultLayout>
      <div className='flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0'>
        <div className='space-x-2 pt-6 pb-8 md:space-y-5'>
          <h2 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-10'>
            Tags
          </h2>
        </div>
        <ul className='flex max-w-lg flex-wrap py-2 gap-3'>
          {Object.keys(tags).length === 0 && 'カテゴリがありません。'}
          {sortedTags.map((tag) => {
            return (
              <li key={tag.id}>
                <Anchor
                  as='internal'
                  href={`/tags/${tag.id}`}
                  className='sm:text-base text-sm font-semibold text-orange-500'
                >
                  {tag.name}
                </Anchor>
              </li>
            );
          })}
        </ul>
      </div>
    </DefaultLayout>
  );
};
