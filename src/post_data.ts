export interface Post {
  id: string,
  title: string,
  contents: string,
}

export function getPosts(): Post[] {
  return [
    {id: '1', title: 'First post', contents: 'great post'},
    {id: '2', title: 'Second post', contents: 'superb story'}
  ];
}

export function getPost(id: string): Post | undefined {
  const posts = getPosts();
  return posts.find(p => p.id === id);
}
