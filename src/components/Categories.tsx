import { useQuery} from '@apollo/client'
import { Link } from 'react-router-dom'
import { GET_CATEGORIES } from '../queries'
import { Category } from '../types'

export const Categories = () => {
    const {data} = useQuery(GET_CATEGORIES)
    
    const categories = data?.categories || [];

    return (
      <div className='bg-neutral-900 shadow-lg p-12 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b border-b-red-600 pb-4 text-white'>
          Categories
        </h3>
        {categories.map((category:Category , index: number) => (
            <Link to={`/category/${category.slug}`} key={index}>
              <button className='cursor-pointer text-white p-2 bg-red-600 
                rounded-md whitespace-nowrap text-sm mr-2 hover:scale-105 transition duration-300 my-2' key={index}>
                {category.name}
              </button>
            </Link>  
        ))}
      </div>
    )
  }

export default Categories