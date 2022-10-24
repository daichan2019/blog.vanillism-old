import Link from 'next/link';
import type { FC } from 'react';

type Props = {
  to: 'external' | 'internal';
  href: string;
  children: string;
  className?: string;
};

export const Anchor: FC<Props> = ({ children, className, href, to }) => {
  if (to === 'external') {
    return (
      <a href={href} target='_blank' rel='noreferrer' className={className}>
        {children}
      </a>
    );
  } else {
    return (
      <Link href={href}>
        <a className={className}>{children}</a>
      </Link>
    );
  }
};
