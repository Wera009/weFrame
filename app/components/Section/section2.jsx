import styles from "./section.module.css";
import Image from "next/image";
import product3 from "/Projects/NextJs-figma/weFrame/my-app/public/images/product3.jpg";
const Section2 = () => {
  return (
    <div className={styles.section2}>
      <div>
        <Image src={product3} alt="product3"/>
        </div>
        <div className={styles.des}>
            <h2>S’inscrire & économiser</h2>
            <span>10%</span>
            <p>Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most 
                opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message. 
                Productize corporate nail caught synergy highlights lunch. 
                Company another pushback items dear or any.</p>
                <input type="text" placeholder="john@doe.com" className={styles.input}/>
                <button>S’inscrire</button>
        </div>
    </div>
  )
}

export default Section2;
