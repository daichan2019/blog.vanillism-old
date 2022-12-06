import type { FC } from 'react';

import { DefaultLayout } from '@/components/layout/DefaultLayout';
import { Anchor } from '@/components/ui/ui-elements/Anchor';
import type { EndPoints } from '@/lib/cms/types';

type Props = {
  tags: EndPoints['get']['tags'][];
};

export const Tags: FC<Props> = ({ tags }) => {
  const tagNameArr = tags.flatMap((tag) => {
    return tag.id;
  });

  const sortedTagNameArr = [
    ...new Set(
      tagNameArr.sort((a, b) => {
        return Number(a) - Number(b);
      }),
    ),
  ];

  const count = tagNameArr.reduce((prev, current) => {
    prev[current] = (prev[current] || 0) + 1;
    return prev;
  }, {});

  return (
    <DefaultLayout>
      <h2 className='border-b-[1px] md:leading-10 text-3xl font-extrabold sm:text-4xl sm:leading-10 md:text-6xl pb-6'>
        Tags
      </h2>
      <ul className='flex py-8 max-w-lg flex-wrap gap-3'>
        {Object.keys(tags).length === 0 && 'カテゴリがありません。'}
        {sortedTagNameArr.map((tag) => {
          return (
            <li key={tag}>
              <Anchor
                as='internal'
                href={`/tags/${tag}/page/1`}
                className='sm:text-base text-sm font-semibold text-orange-500 uppercase'
              >
                {`${tag} (${count[tag]})`}
              </Anchor>
            </li>
          );
        })}
      </ul>
    </DefaultLayout>
  );
};
