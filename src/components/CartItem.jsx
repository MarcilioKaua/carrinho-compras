import styles from './CartItem.module.css'
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import propTypes from "prop-types"
import { useContext } from 'react';
import Context from '../context/Context';

function CartItem({ id, title, price, img }) {

  const { cartItems, setCartItems } = useContext(Context)

  function removeItem() {
    const updateItems = cartItems.filter((i) => i.id != id)
    setCartItems(updateItems)
  }

  return(
    <section className={styles.cart_item}>
      <img src={img} alt="produto" />
      <div className={styles.cart_content}>
        <h3>{title}</h3>
        <span>{price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>
        <button onClick={removeItem}><MdOutlineRemoveShoppingCart/></button>
      </div>
    </section>
  )
}

CartItem.propTypes = {
  id: propTypes.any.isRequired,
  title: propTypes.any.isRequired, 
  price: propTypes.any.isRequired, 
  img: propTypes.any.isRequired
}

export default CartItem