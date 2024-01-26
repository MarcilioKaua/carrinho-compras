import { useEffect, useContext } from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from './Products.module.css'
import ProductCard from './ProductCard';
import fetchProducts from '../api/fetchProducts';
import Context from '../context/Context';

function Products() {

  const { products, setProducts, loading, setLoading} = useContext(Context)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProducts();
        setProducts(response)
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className={styles.container}>
      {loading ? (
        <div className={styles.loading}>
        <AiOutlineLoading3Quarters />
        <span>Carregando...</span>
      </div>
      ) : (
        products.map((e) => (
          <ProductCard key={e.id} id={e.id} title={e.title} price={e.price} img={e.thumbnail} />
        ))
      )}
    </section>
  )
}

export default Products