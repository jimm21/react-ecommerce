import { Link } from 'react-router-dom'
import { useShoopingCartContext } from '../../Context'
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"

function MyOrders() {
  const { order } = useShoopingCartContext()
  console.log(order)
  return (
    <Layout>
      My Orders
      <div className='flex flex-col justify-center gap-2 mt-4'>
        {
          order?.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`} >
              <OrdersCard
                date={order.date}
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts} />
            </Link>
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrders