import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { Post, getPost, getPosts } from './post_data';

interface PostProps {}

interface PostParams {
  postId: string
}

function Post({}: PostProps) {
  let { postId } = useParams<PostParams>();

  const [post, setPostData] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const post = await getPost(postId);
      if (post) {
        setPostData(post);
      }
    }
    fetchData();
  }, [])

  if (post) {
    return(
      <div className='container mx-auto'>
        <h1 className='text-2xl font-bold mb-2'>
          {RichText.asText(post.title as RichTextBlock[])}
        </h1>
        <Items body={post.body} />
      </div>
    );
  } else {
    return(
      <h1>Loading..</h1>
    );
  }
}

interface ItemsProps {
  body: any
}

const Items: React.FC<ItemsProps> = ({body}) => {
  return body.map((item: any, idx: number) => {
    return <Item item={item} key={idx} />
  });
}

interface ItemProps {
  item: any
}

const Item: React.FC<ItemProps> = ({item}) => {
  switch (item.slice_type) {
    case 'text':
      return (
        <>
          <RichText render={item.primary.text} />
          {renderTextItems(item.items)}
        </>
      );
    default:
      return <div>Unsupported item type</div>
  }
}

function renderTextItems(items: any): JSX.Element[] {
  return items.map((i: any, idx: number) => {
    return <img src={i.image.url} alt={i.image.alt} key={idx} />
  });
}

export default Post;
