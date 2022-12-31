import type { GetStaticProps, NextPage } from 'next';
import type { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

import { HeadTemplate } from '@/components/functional/HeadTemplate';
import { Tags } from '@/components/page/Tags';
import { client } from '@/lib/cms/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const TagsPage: NextPage<Props> = ({ tags }) => {
  const router = useRouter();

  return (
    <>
      <HeadTemplate pageTitle='Tags' pagePath={router.asPath} />
      <Tags tags={tags} />
    </>
  );
};

export default TagsPage;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.blogs.$get();
  const tags = data.contents
    .map((blog) => {
      return blog.tags;
    })
    .flat();

  return {
    props: { tags },
    revalidate: 60,
  };
};
