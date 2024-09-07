import { XMarkIcon } from '@heroicons/react/24/solid'
import { useShoopingCartContext } from '../../Context'

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } = useShoopingCartContext()
  const {price, title, image, name, description} = { ...productToShow}

  return (
    <aside 
      className={`${isProductDetailOpen? 'flex' : 'hidden'} flex-col fixed bg-black right-0 top-[68px] w-[360px] h-[calc(100vh-68px)] border border-white rounded-l-lg`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div className="cursor-pointer">
          <XMarkIcon 
            className='w-5 h-5' 
            onClick={()=>closeProductDetail()}/> 
        </div>
      </div>
      <div className='overflow-y-auto px-6 pb-6'>
        <figure className='mb-3'>
          <img
            className='w-full h-full rounded-lg'
            src={image? image : null} 
            alt="" />
        </figure>
        <p className='flex flex-col'>
          <span className='font-medium text-2xl mb-2'>${price}</span>
          <span className='font-medium text-md'>{title}</span>
          <span className='font-light text-sm'>{description}</span>
        </p>
      </div>

    </aside>
  )
}

export default ProductDetail