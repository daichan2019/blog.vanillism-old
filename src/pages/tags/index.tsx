import type { NextPage } from 'next';
import type { InferGetStaticPropsType } from 'next';

import { Tags } from '@/components/page/Tags';
import { client } from '@/lib/cms/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const TagsPage: NextPage<Props> = ({ tags }) => {
  return <Tags tags={tags} />;
};

export default TagsPage;

export const getStaticProps = async () => {
  const data = await client.tags.$get();

  const tags = data.contents;

  return {
    props: { tags },
  };
};
