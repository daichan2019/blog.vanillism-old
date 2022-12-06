import type { FC } from 'react';

import { Anchor } from '@/components/ui/ui-elements/Anchor';
import { PER_PAGE } from '@/config/index';
import { getRange } from '@/utils/getRange';

type Props = {
  totalCount: number;
  currentPage?: number;
  pagePath: string;
};

export const Pagination: FC<Props> = ({ pagePath, totalCount }) => {
  const pageCount = Math.ceil(totalCount / PER_PAGE);

  return (
    <ul>
      {getRange(1, pageCount).map((number, index) => {
        return (
          <li key={index}>
            <Anchor as='internal' href={`/${pagePath}/page/${number}`}>
              {number}
            </Anchor>
          </li>
        );
      })}
    </ul>
  );
};
