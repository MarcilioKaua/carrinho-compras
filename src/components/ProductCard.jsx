import PropTypes from 'prop-types';
import styles from './ProductCard.module.css'
import { LiaCartPlusSolid } from "react-icons/lia";
import { useContext } from 'react';
import Context from '../context/Context';

function ProductCard({ id, title, price, img }) {

  const { cartItems, setCartItems} = useContext(Context)

  function addCart() {
    const data = {id, title, price, img}
    const newCartItems = [...cartItems, data];
    setCartItems(newCartItems);
  }

  return(
    <div className={styles.product_card}>
      <img src={img.replace(/\w.jpg/gi, 'W.jpg')} alt="produto" />
      <div className={styles.product_info}>
        <span>{price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>
        <h1>{title}</h1>
      </div>
      <button type='button' onClick={addCart}><LiaCartPlusSolid/></button>
    </div>
  )
}

ProductCard.propTypes = {
  id: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
  price: PropTypes.any.isRequired,
  img: PropTypes.any.isRequired
};

export default ProductCard