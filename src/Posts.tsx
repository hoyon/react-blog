import React, { useEffect, useState } from 'react';
import PostSummary from './PostSummary';
import { Post, getPrismicData } from './post_data';

interface PostsProps {}

function Posts({}: PostsProps) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPrismicData();
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
          <PostSummary {...post} key={post.id} />
        )}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Posts;
