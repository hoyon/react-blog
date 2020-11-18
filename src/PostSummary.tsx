import React from 'react';
import {Link} from 'react-router-dom';

interface PostSummaryProps {
  id: string,
  title: string,
  contents: string
}

function PostSummary(props: PostSummaryProps) {
  return (
    <div>
      <Link to={`/posts/${props.id}`}>
        <h2>{props.title}</h2>
      </Link>
      <p>{props.contents}</p>
    </div>
  );
}

export default PostSummary;
