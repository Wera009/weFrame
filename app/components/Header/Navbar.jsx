import styles from "./Header.module.css"
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav>
          <ul>
            <li><Link href="#">Art de la Table</Link></li>
            <li><Link href="#">Mobilier</Link></li>
            <li><Link href="#">Nappage</Link></li>
            <li><Link href="#">Matériel de salle</Link></li>
            <li><Link href="#">Cuisine</Link></li>
            <li><Link href="#">Barbecue</Link></li>
            <li><Link href="#">Tente</Link></li>
            <li><Link href="#">Chauffage</Link></li>
            <li><Link href="#">Podium - Piste de danse</Link></li>
            <li><Link href="#">Son et lumière</Link></li>
            <li><Link href="#">Packs</Link></li>
            <li><Link href="#">Consommables</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
