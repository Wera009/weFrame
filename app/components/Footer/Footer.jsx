import styles from "./Footer.module.css"
import Image from "next/image";
import logo from "/Projects/NextJs-figma/weFrame/my-app/public/images/logo1.png";
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div>
      <Image src={logo} alt="Logo"/>
    </div>
    <div>
        <table>
            <tr>
                <th>INFOS PRATIQUES</th>
                <th>LÉGAL</th>
                <th>MON COMPTE</th>
            </tr>
            <tr>
                <td>À propos</td>
                <td>Mentions légales</td>
                <td>Accéder à mon compte</td>
            </tr>
            <tr>
                <td>Livraisons & Reprises</td>
                <td>CGU</td>
                <td>Ma liste d’envie</td>
            </tr>
            <tr>
                <td>Mode d’emploi</td>
                <td>CGV</td>
                <td>Créer un compte</td>
            </tr>
            <tr>
                <td>FAQ</td>
                <td>Politique de confidentialité</td>
                <td>Mot de passe oublié</td>
            </tr>
        </table>
    </div>
    <div className={styles.icons}>NOUS SUIVRE
    <div style={{ display: 'flex', gap: '20px',marginTop: '15px' }}>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} color="#1DA1F2" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} color="#E4405F" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} color="#0077B5" />
      </a>
    </div></div>
    </footer>
  )
}

export default Footer
