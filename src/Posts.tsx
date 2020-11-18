import React, { useEffect, useState } from 'react';
import PostSummary from './PostSummary';
import { Post, getPosts } from './post_data';

interface PostsProps {}

function Posts({}: PostsProps) {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPosts();
      if (posts) {
        setPosts(posts);
      }
    }
    fetchData();
  }, []);

  if (posts) {
    return (
      <div className='container mx-auto'>
        {posts.map(post =>
          <PostSummary {...post} key={post.uid} />
        )}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Posts;
