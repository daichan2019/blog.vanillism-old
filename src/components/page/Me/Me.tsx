import type { FC } from 'react';

import { DefaultLayout } from '@/components/layout/DefaultLayout';
import { SocialIcon } from '@/components/ui/ui-elements/SocialIcon';
import type { EndPoints } from '@/lib/cms/types';

type Props = {
  author: EndPoints['get']['authors'];
};

export const Me: FC<Props> = ({ author }) => {
  const { socialMedias } = author;
  console.log(socialMedias[0].name[0]);

  return (
    <DefaultLayout>
      <h2>About Me</h2>
      <div>
        <p>{author.name}</p>
        <ul className='mb-3 flex space-x-4'>
          {socialMedias.map((social) => {
            return (
              <li key={social.name[0]}>
                <SocialIcon kind={social.name[0]} href={social.url} size='sm' />
              </li>
            );
          })}
        </ul>
      </div>
    </DefaultLayout>
  );
};
