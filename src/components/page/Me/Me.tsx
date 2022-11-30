import type { FC } from 'react';

import { DefaultLayout } from '@/components/layout/DefaultLayout';
import { SocialIcon } from '@/components/ui/ui-elements/SocialIcon';
import type { EndPoints } from '@/lib/cms/types';

type Props = {
  author: EndPoints['get']['authors'];
};

export const Me: FC<Props> = ({ author }) => {
  const { socialMedias } = author;

  return (
    <DefaultLayout>
      <h2 className='border-b-[1px] md:leading-10 text-3xl font-extrabold sm:text-4xl sm:leading-10 md:text-6xl pb-6'>
        About Me
      </h2>
      <div className='py-8 flex flex-col sm:flex-row gap-6'>
        <div>
          <p className='text-2xl md:text-3xl font-bold'>{author.name}</p>
          <ul className='mt-6 flex space-x-4'>
            {socialMedias.map((social) => {
              return (
                <li key={social.name[0]}>
                  <SocialIcon kind={social.name[0]} href={social.url} size='sm' />
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className='prose text-black flex-1'
          dangerouslySetInnerHTML={{ __html: author.introduction }}
        ></div>
      </div>
    </DefaultLayout>
  );
};
