import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as MenuBar } from '../svg/menu-bar.svg';

const MenuBlock = () => {
  return (
    <div className={styles.menuBlock}>
      <p className={styles.Category}>КАТЕГОРИИ</p>
      <ul className={styles.ulul}>
        <li className="flex">
          Запчасти Kubota <MenuBar />
        </li>
        <li>
          Запчасти Yanmar <MenuBar />
        </li>
        <li>
          Запчасти Iseki <MenuBar />
        </li>
        <li>
          Запчасти Mitsubishi <MenuBar />
        </li>
        <li>
          Запчасти Hinomoto <MenuBar />
        </li>
        <li>
          Запчасти Shibaura <MenuBar />
        </li>
        <li>
          Запчасти Bobcat <MenuBar />
        </li>
        <li>
          Шины / Камеры <MenuBar />
        </li>
        <li>
          Сальники <MenuBar />
        </li>
        <li>
          Фильтры / Масла <MenuBar />
        </li>
        <li>
          Прочие товары <MenuBar />
        </li>
      </ul>
    </div>
  );
};

export default MenuBlock;
