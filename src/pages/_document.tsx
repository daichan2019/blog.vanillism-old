import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang='ja'>
      <Head>
        <link rel='icon' href='/img/favicon.ico' />
        <link rel='apple-touch-icon' href='/img/apple-touch-icon.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
