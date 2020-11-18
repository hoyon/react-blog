import React from 'react';
import PostSummary from './PostSummary';
import { getPosts, Post } from './post_data';

interface PostsProps {}

function Posts({}: PostsProps) {
  const posts: Post[] = getPosts();

  return (
    <div className='container mx-auto'>
      {posts.map(post =>
        <PostSummary {...post} key={post.id} />
      )}
    </div>
  );
}

export default Posts;
