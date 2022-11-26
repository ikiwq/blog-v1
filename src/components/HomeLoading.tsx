type Props = {}

const HomeLoading = (props: Props) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 container mx-auto px-2'>
      <div className='lg:col-span-8 col-span-1 flex flex-col space-y-2'>
        <div className='flex flex-col gap-4'>
            <div className='w-full h-24 md:h-48 xl:h-52 skeleton-animation shadow-lg'></div>
            <div className='w-full h-24 md:h-48 xl:h-52 skeleton-animation shadow-lg'></div>
            <div className='w-full h-24 md:h-48 xl:h-52 skeleton-animation shadow-lg'></div>
        </div>
      </div>
      <div className='lg:col-span-4 col-span-1'>
        <div className='lg:sticky relative top-8'>
            <div className='skeleton-animation shadow-lg p-12 mb-8 py-32'>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeLoading