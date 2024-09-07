import { useShoopingCartContext } from '../../Context'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

const Card = ({id, price, title, images, category: {name}, description}) => {
  // Context
  const { 
    count, 
    setCount, 
    openProductDetail, 
    closeProductDetail,
    setProductToShow, 
    cartProducts, 
    setCartProducts, 
    openCheckoutSideMenu,
    closeCheckoutSideMenu
  } = useShoopingCartContext()

  // Clean api data
  let image = images[0] ? images[0] : ''

  const productData = {id, price, title, image, name, description}

  // Set product info to show
  const showProduct = (productDetail) => {
    closeCheckoutSideMenu()
    setProductToShow(productDetail)
    openProductDetail()
  }

  // Add elements to cart
  const addProductToCart = (e, productData) => {
    e.stopPropagation()
    closeProductDetail()
    setCount(count + 1)
    setCartProducts([...cartProducts, productData])
    openCheckoutSideMenu()
  }

  const renderIcon = (id) => {
    const isInCart = cartProducts.filter(product => product.id === id).length > 0

    if (isInCart) {
      return (
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-green-600 w-6 h-6 rounded-full m-2 p-1 font-bold"
          >
          <CheckIcon className="w-6 h-6" />
        </button>
      )
    } else {
      return (
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1 font-bold"
          onClick={(e)=>addProductToCart(e, productData)}>
          <PlusIcon className="w-6 h-6" />
        </button>
      )
    }
  }
  
  return (
    <div
      className='bg-white w-56 h-60 rounded-lg cursor-pointer'
      onClick={()=>showProduct(productData)}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 cursor-pointer">{name}</span>
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={image} alt={title} />
        {renderIcon(id)}
      </figure>
      <p className="flex justify-between items-center text-black gap-1 px-1.5">
        <span className="text-sm font-light truncate">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  )
}

export default Card