import type { NextPage } from 'next';
import type { InferGetStaticPropsType } from 'next';
import type { GetStaticPaths, GetStaticProps } from 'next';

import { Articles } from '@/components/page/Articles';
import { PER_PAGE } from '@/config/index';
import { client } from '@/lib/cms/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ArticlesPage: NextPage<Props> = ({ blogs, pagePath, totalCount }) => {
  return <Articles blogs={blogs} totalCount={totalCount} pagePath={pagePath} />;
};

export default ArticlesPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.blogs.$get();
  const totalCount = data.totalCount;
  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i;
    });
  };
  const paths = range(1, Math.ceil(totalCount / PER_PAGE)).map((num) => {
    return `/articles/page/${num}`;
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageNum = Number(params?.num);
  const data = await client.blogs.$get({
    query: {
      offset: (pageNum - 1) * PER_PAGE,
      limit: PER_PAGE,
    },
  });

  const blogs = data.contents;
  const totalCount = data.totalCount;

  return {
    props: { blogs, totalCount, pagePath: 'articles' },
  };
};
