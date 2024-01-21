import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";
import {NotificationIcon} from '../../../shared/icons/notification-icon';
import {LikeIcon} from "../../../shared/icons/like-icon";

const navItems = [
    { id: 1, title: "Favourite", link: "/favourite", component: <LikeIcon/> },
    {
      id: 2,
      title: "Notifications",
      link: "/notifications",
      component: <NotificationIcon/>,
    },
  ];

export const Navbar = () => {
  return (
    <ul className={styles["navbar__list"]}>
      {navItems.map((item) => (
        <li key={item.id} className={styles["navbar__item"]}>
          <NavLink
            to={item.link}
            className={({ isActive }) =>
              isActive ? styles["navbar__link_active"] : styles["navbar__link"]
            }
          >
            {item.component}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
