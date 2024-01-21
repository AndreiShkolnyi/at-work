import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import { Header } from '../../app/features/';

export const Layout = () => {
  return (
    <div className={styles["layout"]}>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
