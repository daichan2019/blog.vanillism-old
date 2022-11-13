import type { NextPage } from 'next';
import type { InferGetStaticPropsType } from 'next';

import { Top } from '@/components/page/Top';
import { client } from '@/lib/cms/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ArticlesPage: NextPage<Props> = ({ blogs }) => {
  return <Top blogs={blogs} />;
};

export default ArticlesPage;

export const getStaticProps = async () => {
  const data = await client.blogs.$get({ query: { limit: 20 } });

  const blogs = data.contents;

  return {
    props: { blogs },
  };
};
