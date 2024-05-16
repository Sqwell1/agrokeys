import React from 'react';
import styles from './Contacts.module.scss';

const Popup = ({ message, onClose, onAction, actionLabel }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <p>{message}</p>
        <button onClick={onClose}>Закрыть</button>
        <button onClick={onAction}>{actionLabel}</button>
      </div>
    </div>
  );
};
export default Popup;
