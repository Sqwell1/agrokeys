import React, { useState } from 'react';
import styles from './Contacts.module.scss';
import Popup from './LinkPopUp.tsx';

const Contacts = () => {
  const [isPhonePopupOpen, setPhonePopupOpen] = useState(false);
  const [isEmailPopupOpen, setEmailPopupOpen] = useState(false);

  const handlePhoneCall = () => {
    setPhonePopupOpen(false);
    window.location.href = 'tel:+380978713006';
  };

  const handleEmailOpen = () => {
    setEmailPopupOpen(false);
    window.location.href = 'mailto:agrokeyss@gmail.com';
  };
  return (
    <div>
      <div className=" text-center text-2xl ">Контакты</div>
      <div className={styles.container}>
        <div>asd</div>
        <div className={styles.appeal}>
          <p className={styles.main_p}>Звоните нам!</p>
          <div className={styles.contacts}>
            <span onClick={() => setPhonePopupOpen(true)}>+38 097 871 30 06</span>{' '}
            <span onClick={() => setEmailPopupOpen(true)}>agrokeyss@gmail.com</span>
            {isPhonePopupOpen && (
              <Popup
                message="Позвонить на этот номер?"
                onClose={() => setPhonePopupOpen(false)}
                onAction={handlePhoneCall}
                actionLabel="Позвонить"
              />
            )}
            {isEmailPopupOpen && (
              <Popup
                message="Открыть почту для написания письма?"
                onClose={() => setEmailPopupOpen(false)}
                onAction={handleEmailOpen}
                actionLabel="Открыть почту"
              />
            )}
          </div>
          <p className={styles.address}>
            Адресс: Черновицкая область, Днестровский район, с. Грубна, ул. Республиканская 8
          </p>
        </div>
        <div>asd</div>
      </div>
    </div>
  );
};

export default Contacts;
