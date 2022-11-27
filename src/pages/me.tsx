import type { GetStaticProps, NextPage } from 'next';
import type { InferGetStaticPropsType } from 'next';

import { Me } from '@/components/page/Me';
import { client } from '@/lib/cms/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const AboutMePage: NextPage<Props> = ({ author }) => {
  return <Me author={author} />;
};

export default AboutMePage;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.authors.$get();
  const authors = data.contents;
  const author = authors.find((author) => {
    return author.name === 'vanilla_dev';
  });

  return {
    props: { author },
  };
};
