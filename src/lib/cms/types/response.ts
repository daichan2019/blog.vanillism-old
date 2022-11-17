type Reference<T, R> = T extends 'get' ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends 'get'
  ? { id: string } & DateType & Required<P>
  : T extends 'gets'
  ? GetsType<{ id: string } & DateType & Required<P>>
  : Partial<DateType> & (T extends 'patch' ? Partial<P> : P);

export type tags<T = 'get'> = Structure<
  T,
  {
    /**
     * タグ名
     */
    name: string;
  }
>;

export type blogs<T = 'get'> = Structure<
  T,
  {
    /**
     * タイトル
     */
    title: string;
    /**
     * サマリー
     */
    summary: string;
    /**
     * 内容
     */
    content: string;
    /**
     * アイキャッチ
     */
    eyecatch?: { url: string; width: number; height: number };
    /**
     * タグ
     */
    tags?: Reference<T, tags>[];
  }
>;

export interface EndPoints {
  get: {
    tags: tags<'get'>;
    blogs: blogs<'get'>;
  };
  gets: {
    tags: tags<'gets'>;
    blogs: blogs<'gets'>;
  };
  post: {
    tags: tags<'post'>;
    blogs: blogs<'post'>;
  };
  put: {
    tags: tags<'put'>;
    blogs: blogs<'put'>;
  };
  patch: {
    tags: tags<'patch'>;
    blogs: blogs<'patch'>;
  };
}
