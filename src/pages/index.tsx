import type { NextPage } from 'next';
import { useEffect } from 'react';

import { Top } from '@/components/page/Top';
import { client } from '@/lib/cms/utils/index';

const Home: NextPage = () => {
  useEffect(() => {
    const fetchArticle = async () => {
      const res = await client.blogs.$get({});

      console.log(res);
    };
    fetchArticle();
  }, []);

  return <Top />;
};

export default Home;
