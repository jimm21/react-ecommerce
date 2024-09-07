import { useParams } from 'react-router-dom'
import { useShoopingCartContext } from '../../Context'
import Layout  from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import {useEffect} from "react";

function Home() {
  const { items, filteredItems, searchByTitleValue, setSearchByTitleValue } = useShoopingCartContext()
  useEffect(() => {
    return () => {
      setSearchByTitleValue('')
    }
  }, []);

  const { category } = useParams();

  const products = searchByTitleValue.length > 0 ? filteredItems : items

  let productsFromCategory
  const categories = ['clothes', 'electronics', 'furniture', 'toys', 'others']
  if (category === undefined) {
    productsFromCategory = products
  } else {
    if (categories.includes(category)) {
      if (category === 'others') {
        productsFromCategory = products?.filter((item) =>
          item.category.name.toLowerCase() !== 'clothes' &&
          item.category.name.toLowerCase() !== 'electronics' &&
          item.category.name.toLowerCase() !== 'furniture' &&
          item.category.name.toLowerCase() !== 'toys')
      } else {
        productsFromCategory = products?.filter((item) =>  item.category.name.toLowerCase() === category)
      }
    } else {
      // redirect to notfound
    }
  }


  return (
    <Layout>
      <div className='flex justify-center items-center w-80 relative mb-4'>
        <h1>Exclusive Products</h1>
      </div>
      <input
        className={'rounded-lg border border-black w-80 p-2 mb-4 focus:outline-none text-black'}
        type='text'
        placeholder='Search a product'
        onChange={(event) => setSearchByTitleValue(event.target.value)}
      />
      <div className='grid justify-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg'>
        {
          productsFromCategory?.map((item) => (
            <Card key={item.id} {...item}/>
          ))
        }
        {
          productsFromCategory?.length === 0 &&
          <div className={'col-span-full flex justify-center items-center'}>
            <h2>No products found :(</h2>
          </div>
        }
      </div>
      <ProductDetail />
      
    </Layout>
  )
}

export default Home