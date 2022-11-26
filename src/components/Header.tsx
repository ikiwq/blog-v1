import {useState} from 'react'
import {useQuery} from '@apollo/client'

import { Link } from "react-router-dom";

import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi'
import { GET_CATEGORIES } from '../queries';
import { Category } from '../types';

type Props = {}

const Header = (props: Props) => {
    const {data} = useQuery(GET_CATEGORIES)
    
    const categories = data?.categories || [];

    const [menu, setMenu] = useState(false);

    const toggleMenu = (value : boolean | null) : void => {
      if(value != null){

        if(value == true){
          setMenu(true);
          document.documentElement.style.overflow = 'hidden';
        }else if(value == false){
            setMenu(false);
            document.documentElement.style.overflow = 'auto';
        }

        return ;
      }
      if(menu == false){
        setMenu(true);
        document.documentElement.style.overflow = 'hidden';
      }else{
        setMenu(false);
        document.documentElement.style.overflow = 'auto';
      }
    }

    return (
        <div className='container mx-auto max-w-7xl relative flex items-center justify-center'>
            {menu && <div className='bg-neutral-800 fixed h-full w-screen left-0 top-0 z-10'>
              <div className='flex flex-col h-full w-full items-center justify-center py-20'>
                <div className='flex flex-col items-center justify-center gap-4'>
                {categories.map((category : Category) => (
                <Link key={`${category.slug}`} to={`/category/${category.slug}`} onClick={()=>{toggleMenu(false)}}>
                  <span className='md:float-right text-2xl md:text-4xl mt-2 align-middle ml-4 font-semibold cursor-pointer text-white mx-4 hover:text-red-600 hover:scale-110 transition duration-500'>
                    {category.name}
                  </span>
                </Link>
                ))}
                </div>
              </div>
              <div className='flex w-full float-right items-center justify-center text-white text-2xl md:text-4xl absolute z-20 bottom-14'>
                  <span className='md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer text-white 
                  hover:text-red-600 hover:-translate-y-1 transition duration-500'>
                  <a href='https://twitter.com/iki_wq' target='_blank' rel="noopener noreferrer"><AiOutlineTwitter/></a>
                  </span>
                  <span className='md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer text-white 
                  hover:text-red-600 hover:-translate-y-1 transition duration-500'>
                    <a href='https://github.com/ikiwq' target='_blank' rel="noopener noreferrer"><AiFillGithub/></a>
                  </span>
                </div>
          </div>}
          <div className='w-full inline-block py-8 rounded-md container mx-auto'>
            <div className='flex items-center justify-center xl:float-left xl:block relative z-20'>
              <Link to="/" onClick={()=>{toggleMenu(false)}}>
                <span className='cursor-pointer font-bold text-5xl px-4 text-white xl:border-r-2 font-handwrite hover:text-red-600 transition duration-500'>
                  Iki
                </span>
              </Link>
              <div className='text-white text-4xl absolute right-0 flex xl:hidden mr-2 md:mr-0' onClick={()=>{ toggleMenu(null) }}><FiMenu/></div>
            </div>
            <div className='hidden xl:flex xl:float-left xl:px-4 text-xl'>
              {categories.map((category:Category) => (
                <Link key={category.slug} to={`/category/${category.slug}`}>
                  <span className='md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer text-white mx-4 hover:text-red-600 hover:scale-110 transition duration-500'>
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className='hidden float-right items-center justify-center xl:flex text-white h-full text-2xl'>
              <span className='md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer text-white 
              hover:text-red-600 hover:-translate-y-1 transition duration-500'>
                <a href='https://twitter.com/iki_wq' target='_blank' rel="noopener noreferrer"><AiOutlineTwitter/></a>
              </span>
              <span className='md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer text-white 
              hover:text-red-600 hover:-translate-y-1 transition duration-500'>
                <a href='https://github.com/ikiwq' target='_blank' rel="noopener noreferrer"><AiFillGithub/></a>
              </span>
            </div>
          </div>
        </div>
    )
}

export default Header