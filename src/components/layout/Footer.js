import { FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa"

import styles from './Footer.module.css'

function Footer(){

    return (
    <footer className={styles.footer}>
        <ul className={styles.social_list}>




   


            <li>

         <FaYoutube />

         </li>


            <li>

            <FaInstagram />

            </li>


            <li>

            <FaWhatsapp/>

            </li>





        </ul>

            <p className={styles.copy_right}><span>Casas Ilheus</span> &copy;2025</p>

    </footer>)


}



export default Footer