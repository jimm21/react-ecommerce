import { Link } from 'react-router-dom'
import { useShoopingCartContext } from '../../Context'
import Layout  from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard/index.jsx";
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function MyOrder() {
  const { order } = useShoopingCartContext()
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/')+1)
  if (index === 'last') index = order?.length - 1

  return (
    <Layout>
      <div className='flex justify-center items-center w-80 relative mb-4'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon
            className='w-4 h-4 cursor-pointer' />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80 space-y-1'>
        {
          order?.[index].products.map((product) => (
            <OrderCard
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder