import { Head, Html, Main, NextScript } from 'next/document';

const MyDocument = () => {
  const title = 'blog.vanillism';
  const description = 'vanillaのBlog 日常から技術までなんでも記事に起こします。';
  const url = 'https://blog.vanillism.com';

  return (
    <Html lang='ja-JP'>
      <Head>
        <meta name='description' content={description} />
        <meta name='theme-color' content='#333' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:url' content={url} />
        <meta property='og:description' content={description} />
        <meta property='og:site_name' content={title} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='format-detection' content='telephone=no' />
        <link rel='apple-touch-icon' href='/img/apple-touch-icon.png' />
        <link rel='icon' href='/img/favicon.ico' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
