import React, { useContext } from 'react'
import styles from './../navbar/Navbar.module.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext'
import idiente from '../../assets/diente1.png'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const stylesTheme = {
    backgroundColor: theme === 'light' ? '#D8D9D9' : '#434243',
    color: theme === 'light' ? '#434243' : '#D8D9D9',
  }

  return (
    <nav style={stylesTheme} className={styles.navbar}>
      <div className={styles.logo}>
        <img className={styles.ilogo} src={idiente} alt='Logo' />
        <p>SoftDent</p>
      </div>
      <Link className={styles.links} style={stylesTheme} to='./'>
        Home
      </Link>
      <Link className={styles.links} style={stylesTheme} to='./favs'>
        Favoritos
      </Link>
      <Link className={styles.links} style={stylesTheme} to='./contacto'>
        Contacto
      </Link>
      <div className={styles.contButton}>
      <button className={styles.button} onClick={toggleTheme}>
        Modo {theme === 'light' ? 'oscuro' : 'claro'}
      </button>
      </div>
    </nav>
  )
}

export default Navbar
