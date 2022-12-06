import type { FC } from 'react';

import { Anchor } from '@/components/ui/ui-elements/Anchor';
import { SocialIcon } from '@/components/ui/ui-elements/SocialIcon';
import { siteMetadata } from '@/config/siteMetadata';

export const Footer: FC = () => {
  return (
    <footer className='py-4 md:py-6'>
      <div className='flex flex-col items-center'>
        <div className='flex space-x-4'>
          <SocialIcon kind='github' href={siteMetadata.github} size='sm' />
          <SocialIcon kind='twitter' href={siteMetadata.twitter} size='sm' />
          <SocialIcon kind='zenn' href={siteMetadata.zenn} size='sm' />
        </div>
        <div className='mt-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400'>
          <p>{siteMetadata.author}</p>
          <div>{` | `}</div>
          <p>{`© ${new Date().getFullYear()}`}</p>
          <div>{` | `}</div>
          <Anchor as='internal' href='/'>
            {siteMetadata.title}
          </Anchor>
        </div>
      </div>
    </footer>
  );
};
