import Head from 'next/head';
import type { FC } from 'react';

import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/config/index';

export type Type = {
  pageTitle?: string;
  pageDescription?: string;
  pagePath?: string;
  pageImg?: string;
  postImg?: string;
  pageImgWidth?: string;
  pageImgHeight?: string;
  keyword?: string;
};

export const HeadTemplate: FC<Type> = ({
  keyword,
  pageDescription,
  pageImg,
  pageImgHeight,
  pageImgWidth,
  pagePath,
  pageTitle,
  postImg,
}) => {
  const title = pageTitle ? `${pageTitle} | ${SITE_TITLE}` : SITE_TITLE;
  const description = pageDescription || SITE_DESCRIPTION;
  const url = pagePath ? `${SITE_URL}${pagePath}` : SITE_URL;
  const imgUrl = pageImg ? `${SITE_URL}/${pageImg}` : postImg || `${SITE_URL}/img/banner.png`;
  const imgWidth = pageImgWidth || '1200px';
  const imgHeight = pageImgHeight || '630px';

  return (
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={title} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta name='keywords' content={keyword || title} />
      <meta property='og:url' content={url} />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='ja_JP' />
      <meta property='og:image' content={imgUrl} />
      <meta property='og:image:width' content={imgWidth} />
      <meta property='og:image:height' content={imgHeight} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:url' content={imgUrl} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={imgUrl} />
      <link rel='canonical' href={url} />
    </Head>
  );
};
