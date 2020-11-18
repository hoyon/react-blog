import React from 'react';
import PostSummary from './PostSummary';
import { getPosts } from './post_data';

interface PostsProps {}

function Posts({}: PostsProps) {
  const posts: Post[] = getPosts();

  return (
    <>
      <h1>My blog</h1>
      {posts.map(post =>
        <PostSummary {...post} key={post.id} />
      )}
    </>
  );
}

export default Posts;
