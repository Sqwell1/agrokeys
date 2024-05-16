import React, { useEffect } from 'react';
import styles from './MainPage.module.scss';
import Sort from './Sort/Sort.tsx';
import { useDispatch } from 'react-redux';
import { fetchItems } from '../../store/features/items/itemsSlice.ts';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';

const MainPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.items);

  useEffect(() => {
    let items = dispatch(fetchItems() as any);
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.text}>ИНТЕРНЕТ-МАГАЗИН ЗАПЧАСТЕЙ НА ЯПОНСКИЕ МИНИ-ТРАКТОРА</p>
      </div>
      <Sort />
      <div className={styles.catalog}>
        <ul className={styles.catalog}>
          {items.map((items) => (
            <div className={styles.product} key={items.name}>
              {items.name}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainPage;
