import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../components/card/Card.module.css';
import { ThemeContext } from '../contexts/ThemeContext';
import Loading from '../components/Loading/Loading';

const Detail = () => {
  const { id } = useParams();
  const [dentista, setDentista] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchDentista() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (response.ok) {
        const dentistaData = await response.json();
        setDentista(dentistaData);
      } else {
        throw new Error('Error al obtener los datos del dentista');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchDentista();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  const { theme } = useContext(ThemeContext);

  const stylesTheme = {
    backgroundColor: theme === 'light' ? '#D8D9D9' : '#434243',
    color: theme === 'light' ? '#434243' : '#D8D9D9',
  };

  const { name, email, phone, website } = dentista;

  return (
    <div className={styles.detalles}>
      <div className={styles.cdetalles} style={stylesTheme}>
        <h1 className={styles.dtitulo}>{name}</h1>
        <p className={styles.ddatos}>Email: {email}</p>
        <p className={styles.ddatos}>Teléfono: {phone}</p>
        <div className={styles.dweb}>
          <p>Website:</p>{' '}
          <Link className={styles.link} to="/" style={stylesTheme}>
            {' '}
            www.{website}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
