import React from 'react'
import moment from 'moment'

import { Post } from '../types'
import ReactMarkdown from 'react-markdown'
import { AiFillCalendar } from 'react-icons/ai'


type Props = {
  post: Post
}
  

const ArticleDetails = (props: Props) => {
  
  return (
    <div className=' bg-neutral-900 p-3 lg:p-8 mb-8'>
      <div className='flex items-center justify-between mb-4 w-auto'>
          <div className=' flex items-center justify-center'>
            <img 
            alt={props.post.author.name}
            height="30"
            width="30px"
            className='align-middle rounded-full'
            src={props.post.author.photo.url}></img>
            <p className='inline align-middle text-white ml-2 text-lg'>{props.post.author.name}</p>
          </div>
          <div className='font-medium text-red-600 items-center justify-center flex px-4 text-xl'>
            <AiFillCalendar/>
            <span>{moment(props.post.createdAt).format("MMM DD, YYYY")}</span>
          </div>
      </div>
        <h1 className='mb-8 text-3xl font-semibold text-white'>{props.post.title}</h1>
        <div className='relative overflow-hidden shadow-md mb-6'>
         <img src={props.post.featureImage.url}
          alt={props.post.title}
          className='object-top h-full w-full'/>
        </div>
        <div className='prose prose-invert break-words'>
          <ReactMarkdown>{props.post.contentMarkdown}</ReactMarkdown>
        </div>
    </div>
  )
}

export default ArticleDetails