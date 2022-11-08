import type { NextPage } from 'next';
import type { InferGetStaticPropsType } from 'next';

import { Top } from '@/components/page/Top';
import { client } from '@/lib/cms/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ blogs }) => {
  return <Top blogs={blogs} />;
};

export default Home;

export const getStaticProps = async () => {
  const blogs = await (await client.blogs.$get({ query: { limit: 20 } })).contents;

  return {
    props: { blogs },
  };
};
