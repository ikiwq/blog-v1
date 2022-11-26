import {Link, useParams} from 'react-router-dom';

import {useQuery} from '@apollo/client';

import moment from 'moment'

import { GET_SIMILAR_ARTICLES } from '../queries';
import { Post } from '../types'

type Props = {
  slug: string | null,
  categories: string[],
}

export const ArticleWidget = (props : Props) => {
    const categories = props.categories;
    const {slug} = useParams();
    
    let {data} = useQuery(GET_SIMILAR_ARTICLES, {variables: { categories, slug }});

    let relatedPosts = data?.posts;

    if (relatedPosts && relatedPosts.length > 0) return (
      <div className='bg-neutral-900 shadow-lg p-8 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b border-b-red-600 pb-4 text-white'>
          {props.slug ? 'Related Posts' : "Featured Posts"}
        </h3>
        {relatedPosts.map((post : Post) => (
          <Link to={`/post/${post.slug}`} key={post.title}>
          <div key={post.title} className='flex items-center w-full mb-4 cursor-pointer'>
            <div className='w-16 flex-none'>
              <img
              alt={post.title}
              height="60px"
              width="60px"
              className='align-middle rounded-full w-12 h-12 object-cover'
              src={post.featureImage.url}/>
            </div>
            <div className='flex-grow ml-4 text-white'>
                <p className=' font-normal text-gray-500'>
                  {moment(post.createdAt).format('MMM DD, YYYY')}
                </p>           
                 <p className='font-bold'>{post.title}</p>    
              </div>
          </div>
          </Link>
        ))}
      </div>
    )
    return (<div></div>)
  }
  
  export default ArticleWidget