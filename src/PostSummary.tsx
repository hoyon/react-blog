import React from 'react';
import { Link } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';

interface PostSummaryProps {
  uid: string,
  title: string,
  contents: string
}

function PostSummary(props: PostSummaryProps) {
  return (
    <div className='mb-4'>
      <Link to={`/posts/${props.uid}`}>
        <h2 className='text-xl mb-1 font-bold hover:text-blue-700'>{RichText.asText(props.title)}</h2>
      </Link>
    </div>
  );
}

export default PostSummary;
