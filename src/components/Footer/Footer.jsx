import React from 'react';

import styles from './Footer.module.css';

const Footer = () =>{
  return (
    <div>
    <p className={styles.developer}>Developer: Venkatesh Mogili </p>
    <a href="https://github.com/venkatesh-m-xelp" target="_blank" className={styles.url}>Github</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="mailto:mogilivenkatesh3@gmail.com?subject=Regarding Covid19 Tracker" target="_blank" className={styles.url}>Gmail</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://www.facebook.com/venkatesh.mogili.100" target="_blank" className={styles.url}>Facebook</a>
    </div>
  );
}

export default Footer;