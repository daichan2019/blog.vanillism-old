import type { NextPage } from 'next';

import { Top } from '@/components/page/Top';
import { client } from '@/lib/cms/utils/index';

const Home: NextPage = ({ blogs }) => {
  console.log(blogs);

  return <Top />;
};

export default Home;

export const getStaticProps = async () => {
  // const blog = await client.blogs.get({ query: { limit: 6 } });
  const blogs = await client.blogs.$get();

  return {
    props: {
      blogs,
    },
  };
};
