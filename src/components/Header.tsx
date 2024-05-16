import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../svg/logo.svg';
import { ReactComponent as Facebook } from '../svg/facebook-brands.svg';
import { ReactComponent as Cart } from '../svg/cart.svg';
import { ReactComponent as User } from '../svg/user.svg';
import { ReactComponent as Search } from '../svg/search.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className={`${styles.headerDiv} space-x-6`}>
        <a
          href="https://www.facebook.com/groups/2834364250136431/"
          target="_blank"
          className={`${styles.svgLink} ${styles.facebook}`}>
          <Facebook />
          НАШ FACEBOOK
        </a>
        <Link to="/products">
          <p className={styles.hoverr}>ПРОДУКЦИЯ</p>
        </Link>
        <Link to="/about">
          <p className={styles.hoverr}>О НАС</p>
        </Link>
        <Link to="/contact">
          <p className={styles.hoverr}>КОНТАКТЫ</p>
        </Link>
        <Link to="/">
          <p className={`${styles.logo} hover`}>
            <Logo className={styles.logo} />
          </p>
        </Link>
        <Link to="/cabinet">
          <div className={`${styles.svgLink} ${styles.hoverr}`}>
            <User />
            КАБИНЕТ
          </div>
        </Link>
        <Link to="/blog">
          <p className={styles.hoverr}>БЛОГ</p>
        </Link>
        <Link to="/cart">
          <div className={`${styles.svgLink} ${styles.hoverr}`}>
            <Cart />
            КОРЗИНА
          </div>
        </Link>

        <Link to="/cart">
          <p className=" bg-red-600 text-neutral-50 w-3 text-center">0</p>
        </Link>
        <p className=" text-red-600 ">+38 097 871 30 06</p>
      </div>
      <div className={styles.searchBar}>
        <div className={styles.uslessDiv}>
          <input className={styles.searchProduct} placeholder="поиск по сайту" />
          <svg className={styles.svgSearch}>
            <Search />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
