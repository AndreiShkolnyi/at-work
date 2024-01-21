import cn from 'classnames';

import styles from './header.module.scss';
import { Navbar } from '../../features';
import logo from '../../../shared/assets/logo.png'
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={cn(styles["header__container"], ["container"])}>
        <div className={styles["header__body"]}>
          <div className={styles["header__logo"]}>
            <Link to='/'>
              <img src={logo} alt="At-work logo" />
            </Link>
          </div>
          <div className={styles["header_right"]}>
            <div className={styles["header__navbar"]}>
              <Navbar />
            </div>
            <div className={styles["header__user_info"]}>
              <div className={styles["header__user_logo"]}>
                <img
                  src="https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-mobile-600x600?$pjpeg$&jpegSize=100&wid=600"
                  alt="User avatar"
                />
              </div>
              <p className={cn(styles["header__user_name"])}>
                User001
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
