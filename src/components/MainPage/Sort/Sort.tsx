import React from 'react';
import styles from '.././MainPage.module.scss';

const Sort = () => {
  return (
    <div className={styles.sort}>
      <div className={styles.column}>
        <label htmlFor="car-select">Поиск по модели трактора</label>
        <select name="" id="" className={`${styles.sort_param} font-bold`}>
          <option value="">Mitsubishi</option>
          <option value="ford">Ford</option>
          <option value="volvo">Volvo</option>
          <option value="fiat">Fiat</option>
          <option value="fordd">Fordd</option>
          <option value="volvoo">Volvoo</option>
          <option value="fiatt">Fiatt</option>
        </select>
        <label htmlFor="car-select">Модель</label>
        <select name="" id="" className={styles.sort_param}>
          <option value="">Mitsubishi</option>
          <option value="ford">Ford</option>
          <option value="volvo">Volvo</option>
          <option value="fiat">Fiat</option>
          <option value="fordd">Fordd</option>
          <option value="volvoo">Volvoo</option>
          <option value="fiatt">Fiatt</option>
        </select>
        <button className={styles.send_form}>
          <span className={styles.span}>Поиск</span>
        </button>
      </div>
      <div className={styles.column}>
        <label htmlFor="car-select">Поиск по номеру двигателя</label>
        <select name="" id="" className={`${styles.sort_param} font-bold`}>
          <option value="">Mitsubishi</option>
          <option value="ford">Ford</option>
          <option value="volvo">Volvo</option>
          <option value="fiat">Fiat</option>
          <option value="fordd">Fordd</option>
          <option value="volvoo">Volvoo</option>
          <option value="fiatt">Fiatt</option>
        </select>

        <label htmlFor="car-select">Номер двигателя</label>
        <select name="" id="" className={styles.sort_param}>
          <option value="">Mitsubishi</option>
          <option value="ford">Ford</option>
          <option value="volvo">Volvo</option>
          <option value="fiat">Fiat</option>
          <option value="fordd">Fordd</option>
          <option value="volvoo">Volvoo</option>
          <option value="fiatt">Fiatt</option>
        </select>
        <button className={styles.send_form}>
          <span className={styles.span}>Поиск</span>
        </button>
      </div>
    </div>
  );
};

export default Sort;
