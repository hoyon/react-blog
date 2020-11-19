import Prismic from 'prismic-javascript';
import type { RichTextBlock } from 'prismic-reactjs';

const apiEndpoint = 'https://hoyon-blog-test.cdn.prismic.io/api/v2';
const accessToken = import.meta.env.SNOWPACK_PUBLIC_PRISMIC_API_TOKEN;

const Client = Prismic.client(apiEndpoint, { accessToken });

export interface Post {
  uid: string | undefined,
  title: RichTextBlock[],
  body: any
}

export async function getPost(uid: string): Promise<Post> {
  const response = await Client.getByUID('blog_post', uid, {});
  return {
    uid: response.uid,
    title: response.data.title,
    body: response.data.body
  }
}

export async function getPosts(): Promise<Post[]> {
  const response = await Client.query(
    Prismic.Predicates.at('document.type', 'blog_post')
  );

  return response.results.map(r => ({
    uid: r.uid,
    title: r.data.title,
    body: r.data.body
  }));
}
