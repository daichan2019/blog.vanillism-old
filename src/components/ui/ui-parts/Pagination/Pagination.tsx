import clsx from 'clsx';
import type { FC } from 'react';

import { Anchor } from '@/components/ui/ui-elements/Anchor';
import { PER_PAGE } from '@/config/index';
import { getRange } from '@/utils/getRange';

type Props = {
  totalCount: number;
  currentPage?: number;
  pagePath: string;
};

export const Pagination: FC<Props> = ({ currentPage, pagePath, totalCount }) => {
  const pageCount = Math.ceil(totalCount / PER_PAGE);

  return (
    <ul className='flex gap-3 items-center justify-center flex-wrap'>
      {getRange(1, pageCount).map((number, index) => {
        return (
          <li key={index}>
            <Anchor
              className={clsx(
                'text-lg py-2 px-4 transition',
                currentPage === number &&
                  'rounded-md border-orange-600 text-white bg-orange-600 border',
                currentPage !== number && 'hover:text-orange-600',
              )}
              as='internal'
              href={`/${pagePath}/page/${number}`}
            >
              {number}
            </Anchor>
          </li>
        );
      })}
    </ul>
  );
};
