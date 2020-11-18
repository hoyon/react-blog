import React from 'react';
import { Link } from 'react-router-dom';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import type { Post } from './post_data';

function PostSummary(props: Post) {
  return (
    <div className='mb-4'>
      <Link to={`/posts/${props.uid}`}>
        <h2 className='text-xl mb-1 font-bold hover:text-blue-700'>
          {RichText.asText(props.title)}
        </h2>
      </Link>
    </div>
  );
}

export default PostSummary;
