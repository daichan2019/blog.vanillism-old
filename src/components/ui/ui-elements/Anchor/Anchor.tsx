import Link from 'next/link';
import type { FC, ReactNode } from 'react';

type Props = {
  as: 'external' | 'internal';
  href: string;
  children: ReactNode;
  className?: string;
};

export const Anchor: FC<Props> = ({ as, children, className, href }) => {
  if (as === 'external') {
    return (
      <a href={href} target='_blank' rel='noreferrer' className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};
