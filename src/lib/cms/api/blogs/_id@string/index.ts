import type { ContentQuery, EndPoints } from 'src/lib/cms/types';

export type Methods = {
  get: {
    query?: ContentQuery;
    resBody: EndPoints['get']['blogs'];
  };
};
