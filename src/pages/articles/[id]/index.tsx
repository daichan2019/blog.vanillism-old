import type { NextPage } from 'next';
import type { InferGetStaticPropsType } from 'next';

import { Article } from '@/components/page/Article';
import { client } from '@/lib/cms/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ArticlePage: NextPage<Props> = ({ blog }) => {
  return <Article blog={blog} />;
};

export default ArticlePage;

export const getStaticPaths = async () => {
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

export const getStaticProps = async (context) => {
  const { params } = context;
  const id = params.id;
  const data = await client.blogs._id(id).$get();
  console.log(data);

  return {
    props: {
      blog: data,
    },
  };
};
