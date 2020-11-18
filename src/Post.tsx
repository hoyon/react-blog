import React from 'react';
import {useParams} from 'react-router-dom';
import { getPost } from './post_data';

interface PostProps {}

interface PostParams {
  postId: string
}

function Post({}: PostProps) {
  let { postId } = useParams<PostParams>();
  const post = getPost(postId);

  if (post) {
    return(
      <div>
        <h1>{post.title}</h1>
        <p>{post.contents}</p>
      </div>
    );
  } else {
    return(
      <h1>Post not found</h1>
    );
  }
}

export default Post;
