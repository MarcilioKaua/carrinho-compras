import {BsCart2} from 'react-icons/bs'
import style from './Cart.module.css'

function Cart() {
  return(
    <button type='button' className={style.cart_btn}><BsCart2/><span>1</span></button>
  )
  }

export default Cart