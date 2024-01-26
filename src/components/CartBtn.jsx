import { BsCart2 } from 'react-icons/bs'
import style from './CartBtn.module.css'
import { useContext } from 'react'
import Context from '../context/Context'

function CartBtn() {

  const { cartItems, cartVisibility, setCartVisibility } = useContext(Context)

  return (
    <button type='button' className={style.cart_btn} onClick={() => setCartVisibility(!cartVisibility)}>
      <BsCart2 />
      {cartItems.length > 0 && <span>{cartItems.length}</span>}
    </button>
  )
}

export default CartBtn