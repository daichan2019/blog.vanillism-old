import type { NextPage } from 'next';
import type { InferGetStaticPropsType } from 'next';

import { Categories } from '@/components/page/Categories';
import { client } from '@/lib/cms/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ArticlesPage: NextPage<Props> = ({ categories }) => {
  return <Categories categories={categories} />;
};

export default ArticlesPage;

export const getStaticProps = async () => {
  const data = await client.categories.$get();

  const categories = data.contents;

  return {
    props: { categories },
  };
};
