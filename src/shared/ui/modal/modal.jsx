import styles from './modal.module.scss';
import { CloseIcon } from '../../icons/close-icon';
import success from "../../assets/Checked-box.png";
import error from "../../assets/error.png";
import { useEffect, useState } from 'react';

const Modal = ({style, setChange}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setChange(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    }
  });

  return (
    <>
        <div className={styles.modal__container}>
          <div className={styles.modal}>
            <button
              className={styles.close_button}
              onClick={() =>  setChange(false)}
            >
              <CloseIcon className={styles.close_button_svg} />
            </button>
            {style === "succeeded" ? (
              <>
                <img
                  className={styles.modal__img}
                  src={success}
                  alt={"Success image"}
                />
                Изменения сохранены!
              </>
            ) : (
              <>
                <img
                  className={styles.modal__img}
                  src={error}
                  alt={"Error image"}
                />
                Ошибка!
              </>
            )}
          </div>
        </div>
    </>
  );
}

export default Modal;