/* eslint-disable react/prop-types */
import styles from './userCard.module.scss';
import cn from 'classnames';

import { DropDowmIcon } from '../../shared/icons/dropdown-icon';
import { useState } from 'react';
import DropDownSelect from '../../shared/ui/dropdown-select/dropDownSelect';

const UserCard = ({ user, isArchived }) => {
  const [isDrop, setDrop] = useState(false);

  let grayClass = isArchived && 'grayScale';

  const userTextCheck = (text) => {
    if ( text.length > 8) {
      return text.slice(0, 8) + "...";
    } else {
      return text;
    }
  }

  return (
    <div className={cn(styles["card"], [`${grayClass}`])}>
      <div
        className={styles["avatar"]}
        style={{
          backgroundImage:
            "url('https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-mobile-600x600?$pjpeg$&jpegSize=100&wid=600')",
        }}
      ></div>
      <div className={styles["info"]}>
        <div className={styles["info-top"]}>
          <p className={cn(styles["name"])}>{userTextCheck(user.username)}</p>
          <span className={styles["dropdown"]}>
            <DropDowmIcon onClick={() => setDrop(!isDrop)} />
            {isDrop && (
              <DropDownSelect userId={user.id} isArchived={user.isArchived} />
            )}
          </span>
        </div>
        <p className={styles["company"]}>{userTextCheck(user.company)}</p>
        <p className={styles["city"]}>{userTextCheck(user.address)}</p>
      </div>
    </div>
  );
};

export default UserCard;