import moment from 'moment';
import { Link } from 'react-router-dom';
import { Post } from '../types'

import {AiFillCalendar} from 'react-icons/ai'

type Props = {
    posts : [Post],
}

const EvidencedArticles = (props: Props) => {
  let minorPost = [];

  for(let i=1;i<props.posts.length;i++){
        minorPost.push(props.posts[i]);
  }

  return (
    <div className='flex flex-col md:grid grid-cols-1 xl:grid-cols-5 md:space-y-2 xl:space-y-0 xl:space-x-2'>
        <div className='col-span-3 flex flex-col py-1 main-container overflow-hidden max-h-80'>
                <Link to={`/post/${props.posts[0].slug}`} className="">
                  <img src={props.posts[0].featureImage?.url} className="h-80 w-full block object-cover hover:scale-105 transition duration-500"/>
                </Link>
                <Link to={`/post/${props.posts[0].slug}`}>
                <div className='bg-neutral-900 text-white px-4 flex flex-col h-28 justify-center w-full py-3'>
                  <div className='flex justify-between'>
                    <h1 className='text-white font-semibold cursor-pointer text-xl hover:text-red-600 transition duration-500 text-left'>{props.posts[0].title}</h1>
                    <div className='flex items-center space-x-1 text-sm md:text-md xl:text-md text-red-600'>
                        <AiFillCalendar/>
                        <p className=' whitespace-nowrap'>{moment(props.posts[0].createdAt).format('MMM DD, YYYY')}</p>
                    </div>
                  </div>
                  <div className='bg-neutral-900 text-sm text-neutral-300 pb-2'>
                    <p>{props.posts[0].excerpt}</p>
                  </div>  
                </div>                
                </Link>
        </div>
        <div className='col-span-2 md:grid grid-cols-2 grid-rows-2 gap-2 xl:grid-row-2 xl:grid-cols-1'>
                {minorPost.map((post, index)=>(
                    <div className='bg-neutral-900 shadow-lg flex flex-row-reverse h-24 my-1 overflow-hidden' key={index}>
                    <Link to={`/post/${post.slug}`}>
                      <div className='flex items-center justify-center w-24 h-full'>
                        <img className='block h-24 w-full object-cover cursor-pointer hover:scale-105 transition duration-500' src={post.featureImage.url}/>
                      </div>
                    </Link>
                    <div className='w-full flex flex-col items-start px-4 py-4 justify-between'>
                      <div className='flex items-center space-x-1 text-sm text-red-600'>
                        <AiFillCalendar/>
                        <p>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
                      </div>
                      <div className='h-full flex items-center'>
                      <Link to={`/post/${post.slug}`}>
                        <div className=' flex items-center justify-center w-full'>
                          <h1 className='text-white font-semibold cursor-pointer w-full text-sm hover:text-red-600 transition duration-500 text-left'>{post.title}</h1>
                        </div>
                      </Link>
                      </div>
                    </div>
                  </div>
                ))}
        </div>
    </div>
  )
}

export default EvidencedArticles

