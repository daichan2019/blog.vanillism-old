import type { ElementType, FC, ReactNode } from 'react';

import { useLevel } from './H.context';

type HProps = {
  children: ReactNode;
};

export const H: FC<HProps> = ({ children }) => {
  const level = useLevel();
  const Heading = `h${level}` as ElementType;

  return <Heading>{children}</Heading>;
};
