import {Link} from 'react-router-dom'



import styles from './Navbar.module.css'
import logo from '../img/costs_logo.png'

function Navbar(){
    return(
    <div class={styles.navbar}>
      
            <Link to= "/Casas-Ilheus">
                <img src={logo} alt="Casas Ilheus" style={{ width: '120px'}} />
                </Link>
      <ul class = {styles.list}>
            <li className={styles.item}>

            <Link to="/Casas-Ilheus">Home</Link>
            </li>
           
              <li className={styles.item}>
              <Link to="/company">Empresa</Link>
              </li>

            <li className={styles.item}>
              <Link to="/contact">Contato</Link>
              </li>


      </ul>
        
    </div>



    )


}

export default Navbar;