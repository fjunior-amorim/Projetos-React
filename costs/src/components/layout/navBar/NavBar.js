import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../img/costs_logo.png'
import styles from'./navbar.module.css';

function NavBar() {
  let navBar = useRef();

  function showNavBar()  {
    console.log("clicou")
    navBar.current.classList.toggle("responsive_bar")
  }

  return (
    <header>
      <Link to="/"><img src={logo} alt='costs'/></Link>

      <nav ref={navBar}>
        <ul className={styles.nav_link}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="Projects">Projetos</Link></li>
          <li><Link to="contact">Contato</Link></li>
        </ul>
        <button className={styles.close_btn} onClick={showNavBar}>
           <FaTimes />
        </button>
      </nav>

      <button className={styles.nav_btn} onClick={showNavBar}>
           <FaBars />
        </button>
    </header>
    
  )
}

export default NavBar;