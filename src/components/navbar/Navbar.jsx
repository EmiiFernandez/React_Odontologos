import React, { useContext } from 'react'
import styles from './../navbar/Navbar.module.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  const stylesTheme = {
    backgroundColor: theme === 'light' ? '#D8D9D9' : '#434243',
    color: theme === 'light' ? '#434243' : '#D8D9D9',
  };

  return (
    <nav  style={stylesTheme} className={styles.navbar}>
      <Link className={styles.links} style={stylesTheme}  to='./'>
        Home
      </Link>
      <Link className={styles.links} style={stylesTheme}to='./favs'>Favoritos</Link>
      <Link className={styles.links} style={stylesTheme} to='./contacto'>Contacto</Link>
      <button className={styles.button}
        onClick={toggleTheme}
      >
        Modo  {theme === 'light' ? 'oscuro' : 'claro'}
      </button>
    </nav>
  )
}

export default Navbar
