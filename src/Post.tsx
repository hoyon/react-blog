import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';
import { getPost, getPrismicData } from './post_data';

interface PostProps {}

interface PostParams {
  postId: string
}

function Post({}: PostProps) {
  let { postId } = useParams<PostParams>();

  const [doc, setDocData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const post = await getPost(postId);
      if (post) {
        setDocData(post);
      }
    }
    fetchData();
  }, [])

  if (doc) {
    return(
      <div className='container mx-auto'>
        <h1 className='text-2xl font-bold mb-2'>{RichText.asText(doc.title)}</h1>
        {renderItems(doc.body)}
      </div>
    );
  } else {
    return(
      <h1>Loading..</h1>
    );
  }
}

function renderItems(body) {
  return body.map((item, idx) => {
    return renderItem(item)
  });
}

function renderItem(item) {
  switch (item.slice_type) {
    case 'text':
      return (
        <>
          <RichText render={item.primary.text} />
          {renderTextItems(item.items)}
        </>
      );
  }
}

function renderTextItems(items) {
  return items.map((i) => {
    return <img src={i.image.url} alt={i.image.alt} />
  });
}

export default Post;
