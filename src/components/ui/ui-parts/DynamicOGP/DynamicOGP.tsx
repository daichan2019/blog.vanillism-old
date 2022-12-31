import base64url from 'base64url';
import type { FC } from 'react';

type Props = {
  baseImageUrl: string;
  title: string;
  width?: number;
  height?: number;
  className?: string;
};

export const DynamicOGP: FC<Props> = ({
  baseImageUrl,
  className,
  height = 630,
  title,
  width = 1200,
}) => {
  return (
    <picture className={className}>
      <source
        srcSet={`${baseImageUrl}?w=${width}&h=${height}}&blend64=${base64url(
          `https://assets.imgix.net/~text?txtsize=48&txt-color=000&w=${
            width - 80
          }&txt-align=middle&txtfont=Hiragino%20Sans%20W6&txt-track=2&txt64=${base64url(title)}`,
        )}&blend-mode=normal&blend-align=top,left&blend-x=40&blend-y=100`}
        media='(min-width: 1400px)'
        type='image/webp'
      />
      <source
        srcSet={`${baseImageUrl}?w=${width * 0.8}&h=${height * 0.8}}&blend64=${base64url(
          `https://assets.imgix.net/~text?txtsize=36&txt-color=000&w=${
            width - 300
          }&txt-align=middle&txtfont=Hiragino%20Sans%20W6&txt-track=2&txt64=${base64url(title)}`,
        )}&blend-mode=normal&blend-align=top,left&blend-x=40&blend-y=90`}
        media='(min-width: 1280px)'
        type='image/webp'
      />
      <source
        srcSet={`${baseImageUrl}?w=${width * 0.6}&h=${height * 0.6}}&blend64=${base64url(
          `https://assets.imgix.net/~text?txtsize=24&txt-color=000&w=${
            width - 560
          }&txt-align=middle&txtfont=Hiragino%20Sans%20W6&txt-track=2&txt64=${base64url(title)}`,
        )}&blend-mode=normal&blend-align=top,left&blend-x=40&blend-y=70`}
        media='(min-width: 960px)'
        type='image/webp'
      />
      <img
        src={`${baseImageUrl}?w=${width * 0.55}&h=${height * 0.55}}&blend64=${base64url(
          `https://assets.imgix.net/~text?txtsize=24&txt-color=000&w=${
            width - 560
          }&txt-align=middle&txtfont=Hiragino%20Sans%20W6&txt-track=2&txt64=${base64url(title)}`,
        )}&blend-mode=normal&blend-align=top,left&blend-x=20&blend-y=70`}
        alt={title}
      />
    </picture>
  );
};
