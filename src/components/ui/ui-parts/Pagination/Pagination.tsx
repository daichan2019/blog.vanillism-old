import { Anchor } from '@/components/ui/ui-elements/Anchor';
import { PER_PAGE } from '@/config/index';

type Props = {
  totalCount: number;
};

export const Pagination = ({ totalCount }: Props) => {
  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i;
    });
  };

  const pageCount = Math.ceil(totalCount / PER_PAGE);

  return (
    <ul>
      {range(1, pageCount).map((number, index) => {
        return (
          <li key={index}>
            <Anchor as='internal' href={`/articles/page/${number}`}>
              {number}
            </Anchor>
          </li>
        );
      })}
    </ul>
  );
};
