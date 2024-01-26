import { useContext } from 'react'
import styles from './Cart.module.css'
import CartItem from './CartItem'
import Context from '../context/Context'

function Cart() {

  const { cartItems, cartVisibility } = useContext(Context)
  
  const total = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return(
    <section className={`${styles.cart} ${cartVisibility ? styles.cart_active : ''} `}>
      <div className={styles.items}>
      {cartItems.map((i) => <CartItem key={i.id} id={i.id} title={i.title} price={i.price} img={i.img} />)}
      </div>
      <div className={styles.resume}>
        <p>Total: {total().toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
      </div>
    </section>
  )
}

export default Cart