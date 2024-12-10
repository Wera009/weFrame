import styles from "./Products.module.css"
import Product from "./Product"

const SimilarProducts = () => {
  return (
    <div>
       <div>
        <span>Articles similaires</span>
        <span>Voir toute la collection</span>
        </div>
        <div className={styles.productrow}>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
   
      </div>
    </div>
  )
}

export default SimilarProducts
