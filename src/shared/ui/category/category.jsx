import styles from "./category.module.scss";
import cn from 'classnames';

const Category = ({
    text,
    type,
    ...props

}) => {
  return (
    <div
      className={cn(styles["category"])}
      style={
        type === "title"
          ? { fontWeight: 700, fontSize: 24 + "px", color: "#161616" }
          : {}
      }
      {...props}
    >
      {text}
    </div>
  );
}

export default Category;