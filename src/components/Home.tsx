import {useQuery} from '@apollo/client'
import {Categories, ArticleCard, EvidencedArticles} from '../components'
import { GET_ARTICLES, GET_FEATURED_ARTICLES } from '../queries';
import {HomeLoading} from './'

type Props = {}

const Home = (props: Props) => {
    let {data : newArticles, loading: artLoading} = useQuery(GET_ARTICLES);
    let articles = newArticles?.postsConnection.edges || [];

    let {data : newEvArticles, loading: artEvLoading}  = useQuery(GET_FEATURED_ARTICLES);
    let evArticles = newEvArticles?.posts || [];

    if(artEvLoading || artLoading){
      return(
        <HomeLoading/>
      )
    }
    
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 container mx-auto px-2'>
      <div className='lg:col-span-8 col-span-1 flex flex-col space-y-2'>
      <h2 className='title-content'><span className='text-red-600 text-4xl font-handwrite'>Featured Content</span></h2>
      {evArticles.length > 0 && <EvidencedArticles posts={evArticles}/> }
      <h2 className='title-content'><span className='text-red-600 text-4xl font-handwrite'>Recent Content</span></h2>
      {articles.length > 0 && articles.map((post:{node: any })=>{
        return(<ArticleCard post={post.node}/>)
      })}
      </div>
      <div className='lg:col-span-4 col-span-1'>
        <div className='lg:sticky relative top-8'>
          <Categories/>
        </div>
      </div>
    </div>
);};

export default Home
