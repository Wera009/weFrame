import Image from "next/image";
import product2 from "/Projects/NextJs-figma/weFrame/my-app/public/images/product2.jpg"
import { FaRegHeart } from 'react-icons/fa';
import styles from "./Products.module.css"
const Product = () => {
  return (
    <div className={styles.product}>
      <div className={styles.productimage}>
        <div className={styles.producthead}>
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99428 2.27985C7.32816 0.332 4.54978 -0.191965 2.46224 1.59168C0.374693 3.37532 0.0807963 6.35748 1.72015 8.467C3.08317 10.2209 7.20813 13.9201 8.56007 15.1174C8.71133 15.2513 8.78695 15.3183 8.87517 15.3446C8.95216 15.3676 9.03641 15.3676 9.1134 15.3446C9.20161 15.3183 9.27724 15.2513 9.42849 15.1174C10.7804 13.9201 14.9054 10.2209 16.2684 8.467C17.9078 6.35748 17.6498 3.35656 15.5263 1.59168C13.4029 -0.173202 10.6604 0.332 8.99428 2.27985Z" stroke="#8F9BA0" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
      <h3>Art de la table</h3>
      </div>
      <Image src={product2} alt="product2"/>
      <p></p>
      </div>
      <div className={styles.foot}>
      <div style={{width: '486.67px',height: '30px',gap: '0px',opacity: '0px',}}>
        <span style={{textAlign:'left'}}>Title</span>
        <span style={{textAlign:'right'}}>0€</span>
        </div>
        <div style={{width: '486.67px',height: '26px',gap: '5px',opacity: '0px',}}>
        <span style={{textAlign:'left'}}>0,35€/Pièce · RÉF : VABGN5</span>
        <span className={styles.footspan}style={{textAlign:'left'}}>20 pièces</span>
        </div>
        </div>
    </div>
  )
}

export default Product;
