import type { FC } from 'react';

import { Anchor } from '@/components/ui/ui-elements/Anchor';
import type { EndPoints } from '@/lib/cms/types';
import TagIcon from '@/public/img/tag-icon.svg';

type Props = {
  tag: EndPoints['get']['tags'];
};

export const Tag: FC<Props> = ({ tag }) => {
  return (
    <Anchor
      as='internal'
      href={`/tags/${tag.id}/page/1`}
      className='py-[2px] flex w-fit items-center gap-1 rounded-md border border-orange-500 px-2 text-orange-500'
    >
      <TagIcon />
      <p className='text-sm'>{tag.name}</p>
    </Anchor>
  );
};
