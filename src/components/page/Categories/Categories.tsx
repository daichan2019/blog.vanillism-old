import type { FC } from 'react';

import { Anchor } from '@/components/ui/ui-elements/Anchor';
import type { EndPoints } from '@/lib/cms/types';

type Props = {
  categories: EndPoints['get']['categories'][];
};

export const Categories: FC<Props> = ({ categories }) => {
  const sortedCategories = categories.sort((a, b) => {
    return a.name - b.name;
  });

  console.log(sortedCategories);

  return (
    <div className='flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0'>
      <div className='space-x-2 pt-6 pb-8 md:space-y-5'>
        <h2 className='md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl'>
          Categories
        </h2>
      </div>
      <div className='flex max-w-lg flex-wrap'>
        {Object.keys(categories).length === 0 && 'カテゴリがありません。'}
        {sortedCategories.map((category) => {
          return (
            <div key={category.id} className='my-2 mr-5'>
              <Anchor
                as='internal'
                href={`/categories/${category.id}`}
                className='-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300'
              >
                {category.name}
              </Anchor>
            </div>
          );
        })}
      </div>
    </div>
  );
};
