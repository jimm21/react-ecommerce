import {createContext, useState, useContext, useEffect} from 'react'
import {apiUrl} from "../api/index.jsx";

const ShoopingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

  // Get products
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)
  // Get products by title
  const [searchByTitleValue, setSearchByTitleValue] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`)
        const data = await response.json()
        //console.log(data)
        setItems(data)
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`);
      }
    }
    fetchData()
  }, [])

  const filteredItemsByTitle = (items, searchByTitleValue) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitleValue.toLowerCase()))
  }
  useEffect(() => {
    if (searchByTitleValue) {
      setFilteredItems(filteredItemsByTitle(items, searchByTitleValue))
    }
  }, [items, searchByTitleValue])

  // Shopping cart counter
  const [count, setCount] = useState(0)

  // Show/close productDetail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => {
    setIsProductDetailOpen(true)
  }
  const closeProductDetail = () => {
    setIsProductDetailOpen(false)
  }

  // Product to show in productDetail
  const [productToShow, setProductToShow] = useState({})

  // Shopping cart
  const [cartProducts, setCartProducts] = useState([])

  // My order
  const [order, setOrder] = useState([])

  // Show/close Checkout
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(true)
  }
  const closeCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(false)
  }

  return (
    <ShoopingCartContext.Provider 
      value={{
        items,
        setItems,
        searchByTitleValue,
        setSearchByTitleValue,
        filteredItems,
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder
      }}
    >
      {children}
    </ShoopingCartContext.Provider>
  )
}

export const useShoopingCartContext = () => {
  return useContext(ShoopingCartContext)
}