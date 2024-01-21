import styles from './section.module.scss';
import cn from 'classnames';

export const Section = ({title, children}) => {

  return (
    <div className={styles["section"]}>
      <h2 className={cn(styles["section__title"])}>{title}</h2>
      <div className={styles["section__content"]}>
        {children.length 
        ? children
        : <p className={cn(styles["empty_message"])}>Список пуст</p>}
      </div>
    </div>
  );
}