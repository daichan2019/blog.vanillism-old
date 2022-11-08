import type { FC, ReactNode } from 'react';
import { H } from 'react-headings';

type Props = {
  children: ReactNode;
  Heading: ReactNode;
};

export const BlogCard: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

const Table: TableCmp = ({ children }): JSX.Element => {
  return <>{children}</>;
};
