import clsx from 'clsx';
import type { FC } from 'react';

import { Anchor } from '@/components/ui/ui-elements/Anchor';
import Github from '@/public/img/github-icon.svg';
import Twitter from '@/public/img/twitter-icon.svg';
import Zenn from '@/public/img/zenn-icon.svg';

const components = {
  github: Github,
  twitter: Twitter,
  zenn: Zenn,
};

const sizes = {
  xs: 'w-4 h-4',
  sm: 'w-6 h-6',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
};

type Props = {
  href: string;
  kind: keyof typeof components;
  size: keyof typeof sizes;
};

export const SocialIcon: FC<Props> = ({ href, kind, size = 'sm' }) => {
  const SocialSvg = components[kind];

  return (
    <Anchor
      as='external'
      className='text-sm text-gray-500 transition hover:text-gray-600'
      href={href}
    >
      <span className='sr-only'>{kind}</span>
      <SocialSvg
        className={clsx(
          'fill-current transition-colors text-gray-700 hover:text-orange-500 ',
          sizes[size],
        )}
      />
    </Anchor>
  );
};
