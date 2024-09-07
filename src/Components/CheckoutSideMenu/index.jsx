import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useShoopingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice, dateTime } from '../../utils'

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts, order, setOrder, setCount } = useShoopingCartContext()

  const handleDelete = (id) => {
    const remainProducts = cartProducts.filter(product => product.id !== id)
    setCartProducts(remainProducts)
  }

  const handleCheckout = () => {

    const orderToAdd = {
      date: dateTime(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }
    setOrder([...order, orderToAdd])
    setCartProducts([])
    setCount(0)
    closeCheckoutSideMenu()
  }

  return (
    <aside 
      className={`${isCheckoutSideMenuOpen? 'flex' : 'hidden'} flex-col fixed bg-black right-0 top-[68px] w-[360px] h-[calc(100vh-68px)] border border-white rounded-l-lg`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div className="cursor-pointer">
          <XMarkIcon 
            className='w-5 h-5' 
            onClick={()=>closeCheckoutSideMenu()}/> 
        </div>
      </div>
      <div className='overflow-y-auto px-6 space-y-1 flex-1'>
        {
          cartProducts.map((product) => (
            <OrderCard
              key = {product.id}
              title = {product.title}
              image = {product.image}
              price = {product.price}
              handleDelete = {() => handleDelete(product.id)}
            />
          ))
        }
      </div>
      <div className='p-6 space-y-2'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total:</span>
          <span className='font-semibold text-xl'>${totalPrice(cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button
            className={'bg-white w-full py-3 text-black font-semibold rounded-lg'}
            onClick={() => handleCheckout()}>
            Checkout
          </button>
        </Link>

      </div>

    </aside>
  )
}

export default CheckoutSideMenu