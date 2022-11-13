import type { NextPage } from 'next';
import type { InferGetStaticPropsType } from 'next';
import type { GetStaticPaths, GetStaticProps } from 'next';

import { Article } from '@/components/page/Article';
import { client } from '@/lib/cms/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ArticlePage: NextPage<Props> = ({ blog }) => {
  return <Article blog={blog} />;
};

export default ArticlePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.blogs.$get();
  const blogs = data.contents;
  const paths = blogs.map((blog) => {
    return `/articles/${blog.id}`;
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const data = await client.blogs._id(id as string).$get();

  return {
    props: {
      blog: data,
    },
  };
};
