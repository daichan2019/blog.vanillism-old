import type { GetStaticProps, NextPage } from 'next';
import type { InferGetStaticPropsType } from 'next';

import { Top } from '@/components/page/Top';
import { client } from '@/lib/cms/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ blogs }) => {
  return <Top blogs={blogs} />;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.blogs.$get({ query: { limit: 20 } });
  const blogs = data.contents;

  return {
    props: { blogs },
    revalidate: 60,
  };
};
