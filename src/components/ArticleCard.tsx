import moment from 'moment';
import { Link } from 'react-router-dom'

import {Post} from '../types'

import {AiFillCalendar} from 'react-icons/ai'

type Props = {
  post: Post
}

const ArticleCard = (props: Props) => {
  return (
    <div className='bg-neutral-900 shadow-lg mb-4 flex flex-row-reverse h-24 md:h-48 xl:h-52'>
      <Link to={`/post/${props.post.slug}`}>
        <div className='flex items-center justify-center w-32 md:w-48 xl:w-52 h-full overflow-hidden'>
          <img className='block h-full w-full object-cover cursor-pointer hover:scale-105 transition duration-500' src={props.post.featureImage.url}/>
        </div>
      </Link>
      
      <div className='w-full flex flex-col items-start px-4 py-4 md:py-2 justify-between'>
        <div className='flex items-center space-x-1 text-sm md:text-md xl:text-xl text-red-600'>
          <AiFillCalendar/>
          <p>{moment(props.post.createdAt).format('MMM DD, YYYY')}</p>
        </div>
        <div className='h-full flex items-center'>
        <Link to={`/post/${props.post.slug}`}>
          <div className=' flex items-center justify-center w-full'>
            <h1 className='text-white font-semibold cursor-pointer w-full text-md md:text-xl xl:text-2xl hover:text-red-600 transition duration-500 text-left'>{props.post.title}</h1>
          </div>
          <div className='md:py-2'>
            <p className='hidden text-neutral-300 text-sm text-left md:py-0 md:flex xl:text-md'>{props.post.excerpt}</p>
          </div>
        </Link>
        </div>
        <div className='hidden py-2 gap-2 xl:flex'>
          {props.post.categories.map((category, index)=>(<Link to={`/category/${category.slug}`} className='hover:cursor-pointer' key={index}><span className='text-white text-sm px-2 py-2 bg-red-600 rounded-md'>{category.name}</span></Link>))}
        </div>
      </div>
    </div>
  )
}

export default ArticleCard