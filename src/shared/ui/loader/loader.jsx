import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div className={styles["loading-screen"]}>
      <div className={styles["loading-spinner"]}></div>
    </div>
  );
}

export default Loader;