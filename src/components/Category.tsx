import {useQuery} from '@apollo/client'
import {useParams} from 'react-router-dom';

import { GET_CATEGORY_ARTICLES } from '../queries'
import {ArticleCard, Categories} from './'
import {HomeLoading} from './'

type PostWithNode = {
    node: any
}

const Category = () => {
    const {slug} = useParams();

    let {data, loading} = useQuery(GET_CATEGORY_ARTICLES, {variables: {slug}});

    let posts = data?.postsConnection.edges || [];

    if(loading){
        return(
          <HomeLoading/>
        )
    }

    return (
      <div className='container mx-auto px-2 mb-8'>
            
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
              <div className='col-span-1 lg:col-span-8'>
                {posts.length != 0 ? posts.map((post : PostWithNode, index: number)=>(
                      <ArticleCard key={index} post={post.node}/>
                  )) : 
                  <div className='text-white text-4xl text-center my-40'>Category is empty!</div>
                }
              </div>
              <div className='col-span-1 lg:col-span-4'>
                  <div className='relative lg:sticky top-8'>
                      <Categories/>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default Category