import React from 'react';
import {useParams} from 'react-router-dom';
import { getPost } from './post_data';

interface PostProps {}

function Post({}: PostProps) {
  let { postId } = useParams();
  const post = getPost(postId);

  return(
    <div>
      <h1>{post.title}</h1>
      <p>{post.contents}</p>
    </div>
  )
}

export default Post;
