import 'highlight.js/styles/vs2015.css';

import cheerio from 'cheerio';
import hljs from 'highlight.js';
import type { NextPage } from 'next';
import type { InferGetStaticPropsType } from 'next';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { HeadTemplate } from '@/components/functional/HeadTemplate';
import { Article } from '@/components/page/Article';
import { client } from '@/lib/cms/utils';
import { createOgImage } from '@/utils/createOgImage';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ArticlePage: NextPage<Props> = ({ blog, highlightedBody }) => {
  const router = useRouter();
  const ogImageUrl = createOgImage(blog.eyecatch.url, blog.title);

  return (
    <>
      <HeadTemplate
        pageTitle={blog.title}
        pageDescription={blog.title}
        pagePath={router.asPath}
        postImg={ogImageUrl}
      />
      <Article blog={blog} highlightedBody={highlightedBody} />
    </>
  );
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
  const blog = await client.blogs._id(id as string).$get();

  const $ = cheerio.load(blog.content || '');

  // eslint-disable-next-line @typescript-eslint/naming-convention
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  return {
    props: {
      blog,
      highlightedBody: $.html(),
    },
    revalidate: 60,
  };
};
