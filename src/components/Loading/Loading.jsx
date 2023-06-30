import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.animation}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
    </div>
  );
};

export default Loading;