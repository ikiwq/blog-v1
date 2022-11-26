import { useQuery } from '@apollo/client';
import {useParams} from 'react-router-dom'
import { GET_POST_DETAILS } from '../queries';
import { Category } from '../types';
import {ArticleDetails, Author, Categories, ArticleWidget, HomeLoading} from './';

const ArticleDetail = () => {
    const { slug } = useParams();

    let { data, loading } = useQuery(GET_POST_DETAILS, {variables: {slug} });
    let post = data?.post || null;

    if(loading){
      return <HomeLoading/>
    }

    if (post) return (
      <div className='container mx-auto px-2 mb-8'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
              <div className='col-span-1 lg:col-span-8'>
                  <ArticleDetails post={post}/>
                  <Author author={post.author}/>
              </div>
              <div className='col-span-1 lg:col-span-4'>
                  <div className='relative lg:sticky top-8'>
                    <ArticleWidget slug={post.slug} categories={post.categories.map((category:Category) =>{return(category.slug)} )}/>
                    <Categories/>
                  </div>
              </div>
          </div>
      </div> 
    ) 
    return (
        <div>

        </div>
    )
  }

export default ArticleDetail