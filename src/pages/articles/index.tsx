import type { GetStaticProps, NextPage } from 'next';
import type { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

import { HeadTemplate } from '@/components/functional/HeadTemplate';
import { Articles } from '@/components/page/Articles';
import { PER_PAGE } from '@/config/index';
import { client } from '@/lib/cms/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ArticlesPage: NextPage<Props> = ({ blogs, currentPage, pagePath, totalCount }) => {
  const router = useRouter();

  return (
    <>
      <HeadTemplate pageTitle='Articles' pagePath={router.asPath} />
      <Articles
        blogs={blogs}
        totalCount={totalCount}
        pagePath={pagePath}
        currentPage={currentPage}
      />
    </>
  );
};

export default ArticlesPage;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.blogs.$get({ query: { limit: PER_PAGE } });

  const blogs = data.contents;
  const totalCount = data.totalCount;

  return {
    props: { blogs, totalCount, pagePath: 'articles', currentPage: 1 },
    revalidate: 60,
  };
};
