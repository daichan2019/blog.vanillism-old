import type { GetStaticProps, NextPage } from 'next';
import type { InferGetStaticPropsType } from 'next';

import { HeadTemplate } from '@/components/functional/HeadTemplate';
import { Me } from '@/components/page/Me';
import { client } from '@/lib/cms/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const AboutMePage: NextPage<Props> = ({ author }) => {
  return (
    <>
      <HeadTemplate pageTitle='Me' pagePath='/me' />
      <Me author={author} />
    </>
  );
};

export default AboutMePage;

export const getStaticProps: GetStaticProps = async () => {
  const author = await client.authors._id('vanilla_dev').$get();

  return {
    props: { author },
    revalidate: 60,
  };
};
