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
    /**
     * 著者
     */
    author: Reference<T, authors>;
  }
>;

export type authors<T = 'get'> = Structure<
  T,
  {
    /**
     * 名前
     */
    name: string;
    /**
     * スラッグ
     */
    slug: string;
    /**
     * 自己紹介
     */
    introduction?: string;
    /**
     * SNS
     */
    socialMedias?: authors_socialMedia[];
  }
>;

interface authors_socialMedia {
  /**
   * SNS名
   */
  name: ['GitHub' | 'Twitter' | 'Zenn'];
  /**
   * URL
   */
  url: string;
  /**
   * アイコン
   */
  icon: { url: string; width: number; height: number };
}

export interface EndPoints {
  get: {
    tags: tags<'get'>;
    blogs: blogs<'get'>;
    authors: authors<'get'>;
  };
  gets: {
    tags: tags<'gets'>;
    blogs: blogs<'gets'>;
    authors: authors<'gets'>;
  };
  post: {
    tags: tags<'post'>;
    blogs: blogs<'post'>;
    authors: authors<'post'>;
  };
  put: {
    tags: tags<'put'>;
    blogs: blogs<'put'>;
    authors: authors<'put'>;
  };
  patch: {
    tags: tags<'patch'>;
    blogs: blogs<'patch'>;
    authors: authors<'patch'>;
  };
}
