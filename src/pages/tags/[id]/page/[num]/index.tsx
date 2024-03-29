import type { InferGetStaticPropsType } from 'next';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { HeadTemplate } from '@/components/functional/HeadTemplate';
import { Articles } from '@/components/page/Articles';
import { PER_PAGE } from '@/config/index';
import { client } from '@/lib/cms/utils';
import { getRange } from '@/utils/getRange';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ArticlesFilteredByTagPage: NextPage<Props> = ({
  blogs,
  currentPage,
  pagePath,
  totalCount,
}) => {
  const router = useRouter();

  return (
    <>
      <HeadTemplate pageTitle='Tags' pagePath={router.asPath} />
      <Articles
        blogs={blogs}
        totalCount={totalCount}
        currentPage={currentPage}
        pagePath={pagePath}
      />
    </>
  );
};

export default ArticlesFilteredByTagPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.tags.$get();
  const tags = data.contents;

  const resPaths = await Promise.all(
    tags.map(async (tag) => {
      const data = await client.blogs.$get({
        query: {
          filters: `tags[contains]${tag.id}`,
        },
      });

      const result = getRange(1, Math.ceil(data.totalCount / PER_PAGE)).map((i) => {
        return `/tags/${tag.id}/page/${i}`;
      });

      return result;
    }),
  );

  const paths = resPaths.flat();

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageNum = Number(params?.num);
  const tagId = String(params?.id);

  const data = await client.blogs.$get({
    query: {
      offset: (pageNum - 1) * PER_PAGE,
      limit: PER_PAGE,
      filters: `tags[contains]${tagId}`,
    },
  });

  const blogs = data.contents;
  const totalCount = data.totalCount;

  return {
    props: {
      blogs,
      totalCount,
      currentPage: pageNum,
      pagePath: `tags/${tagId}`,
    },
    revalidate: 60,
  };
};
