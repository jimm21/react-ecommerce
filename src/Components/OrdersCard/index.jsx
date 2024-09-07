import {ChevronRightIcon} from "@heroicons/react/24/solid/index.js";

const OrdersCard = (props) => {
  const { date, totalPrice, totalProducts } = props

  return (
    <div className="flex justify-between items-center w-80 p-4 border border-white rounded-lg bg-gray-800">
      <div className='flex justify-between w-full'>
        <p className='flex flex-col'>
          <span className='font-light'>{date}</span>
          <span className='font-light'>{totalProducts} articles</span>
        </p>
        <div className='flex items-center gap-2'>
          <span className='font-semibold text-xl'>${totalPrice}</span>
          <ChevronRightIcon
            className='w-4 h-4' />
        </div>
      </div>
    </div>
  )
}

export default OrdersCard