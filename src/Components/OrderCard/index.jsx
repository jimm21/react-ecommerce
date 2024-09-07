import { XMarkIcon, TrashIcon } from '@heroicons/react/24/solid'

const OrderCard = (props) => {
  const { title, image, price, handleDelete } = props

  return (
    <div className="flex justify-between items-center gap-1">
      <div className="flex items-center gap-2">
        <figure className="w-20 min-w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={image}
            alt="" />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-semibold">${price}</p>
        { handleDelete &&
          <TrashIcon
            className='w-4 h-4 cursor-pointer'
            onClick={handleDelete}
          />
        }
      </div>
    </div>
  )
}

export default OrderCard