import styles from "./Products.module.css"
import Image from "next/image";
import product1 from "/Projects/NextJs-figma/weFrame/my-app/public/images/product1.jpg"
import product2 from "/Projects/NextJs-figma/weFrame/my-app/public/images/product2.jpg"
import ProductAbout from "./ProductAbout";
import Link from "next/link";
const ProductDetail = () => {
  return (
    <>
       <div className={styles.home}><Link href="#">Home</Link>
      <span>Art de la table</span></div> 
    <div className={styles.productdetail}>
    <div className={styles.img}>
        <div className={styles.sideimages}>
        <div className={styles.sideimagecover}>
        <Image src={product2} alt="product2" style={{top:'251px'}}/>
        </div>
        <div className={styles.sideimagecover}>
        <Image src={product2} alt="product2" style={{top:'311px'}}/>
        </div>
        <div className={styles.sideimagecover}>
        <Image src={product2} alt="product2" style={{top:'369px'}}/>
        </div>
        <div className={styles.sideimagecover}>
        <Image src={product2} alt="product2" style={{top:'430px'}}/>
        </div>
        </div>
        <Image src={product1} alt="product1" style={{ width: '552px',height: '552px',top: '273px',left: '141px',gap: '0px',opacity: '0px',}}/></div>
   <ProductAbout/>
    </div>
    <div></div>
    <div></div>
    </>
  )
  
}

export default ProductDetail
