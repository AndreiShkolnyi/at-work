import { Link } from 'react-router-dom';
import styles from './dropDownSelect.module.scss';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import usersSlice from '../../../entities/userCard/model/userSlice';

 const activeOptions = [
   { value: "edit", label: "Редактировать" },
   { value: "archive", label: "Архивировать" },
   { value: "close", label: "Скрыть" },
 ];


const DropDownSelect = ({ userId, isArchived }) => {
  const dispatch = useDispatch();

  const onSelectItem = (value) => {
    if (value === "archive") {
      dispatch(usersSlice.actions.archiveItem(userId));
    } else if (value === "close") {
      dispatch(usersSlice.actions.deleteItem(userId));
    } else if (value === 'unarchive') {
      dispatch(usersSlice.actions.unarchiveItem(userId));
    }
  };

  const content = activeOptions.map((item) => (
    <li
      onClick={() => onSelectItem(item.value)}
      key={item.value}
      className={cn(styles["list-item"])}
    >
      {item.value === "edit" ? (
        <Link to={`/profile/${userId}`}>{item.label}</Link>
      ) : (
        <Link>{item.label}</Link>
      )}
    </li>
  ));

  return (
    <>
      <ul className={styles["dropdown-list"]}>
        {!isArchived && content}
        {isArchived && (
          <li
            className={cn(styles["list-item"])}
            onClick={() => onSelectItem("unarchive")}
          >
            <Link>Активировать</Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default DropDownSelect;
