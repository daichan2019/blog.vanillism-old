import type { FC } from 'react';

import { DefaultLayout } from '@/components/layout/DefaultLayout';
import type { EndPoints } from '@/lib/cms/types';

type Props = {
  author: EndPoints['get']['authors'];
};

export const Me: FC<Props> = ({ author }) => {
  return (
    <DefaultLayout>
      <div>{author.name}</div>
    </DefaultLayout>
  );
};
