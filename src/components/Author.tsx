import React from 'react'

import {author} from '../types'

type Props = {
  author: author
}


const Author = ( props: Props ) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-neutral-900 bg-opacity-20'>
      <div className='absolute left-0 right-0 -top-6 md:-top-4'>
        <h1 className='text-red-600 font-handwrite text-4xl'>Something about the author</h1>
      </div>
      <img
        alt={props.author.name}
        height="100"
        width="100"
        className="mx-auto rounded-full"
        src={props.author.photo.url}/>
      <h3 className='text-white my-4 text-xl font-bold'>{props.author.name}</h3>
      <p className='text-white text-lg'>{props.author.bio}</p>
    </div>
  )
}

export default Author