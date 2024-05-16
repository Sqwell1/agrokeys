import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../svg/logo.svg';
import { ReactComponent as Facebook } from '../svg/facebook-brands.svg';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.first}>
        <p>О нас</p>
        <p>Политика конфиденциальности</p>
        <p>Пользовательское соглашение</p>
        <p>Политика возврата</p>
      </div>
      <div className={styles.second}>
        <Logo /> <p>Агрокейс</p>
      </div>
      <div className={styles.third}>
        <p>+38 097 871 30 06</p>

        <a
          href="https://www.facebook.com/groups/2834364250136431/"
          target="_blank"
          className={styles.svgLink}>
          <Facebook />
          Наш Facebook
        </a>
      </div>
    </div>
  );
};

export default Footer;
