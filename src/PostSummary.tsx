import React from 'react';
import {Link} from 'react-router-dom';

interface PostSummaryProps {
  id: string,
  title: string,
  contents: string
}

function PostSummary(props: PostSummaryProps) {
  return (
    <div className='mb-4'>
      <Link to={`/posts/${props.id}`}>
        <h2 className='text-xl mb-1 font-bold hover:text-blue-700'>{props.title}</h2>
      </Link>
      <p>{props.contents}</p>
    </div>
  );
}

export default PostSummary;
