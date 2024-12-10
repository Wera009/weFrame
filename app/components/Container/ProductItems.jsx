import styles from "./Products.module.css"
import Product from "./Product"
import SimilarProducts from "./SimilarProducts"
import ProductDetail from "./ProductDetail"
const ProductItems = () => {
  return (
    <>
    <ProductDetail/>
    <SimilarProducts/>
    <div>
      <div>
        <span>Ces produits pourraient vous intéresser</span>
        <span>Voir toute la collection</span>
        </div>
        <div className={styles.productrow}>
      <Product/>
      <Product/>
      <Product/>

      </div>
    </div>
    </>
  )
}

export default ProductItems;
