import { useState } from "react"
import Context from "./Context"
import propTypes from "prop-types"

function Provider({children}) {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [cartItems, setCartItems] = useState([])
  const [cartVisibility, setCartVisibility] = useState(false);

  const value = {
    products, 
    setProducts,
    loading, 
    setLoading,
    cartItems,
    setCartItems,
    cartVisibility,
    setCartVisibility
  }

  return(
    <Context.Provider value={value}>
       {children}
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: propTypes.any.isRequired
}

export default Provider
