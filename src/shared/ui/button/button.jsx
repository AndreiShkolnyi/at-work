import styles from "./button.module.scss";
import cn from "classnames";

function Button({
  children,
  classNames,
  ...props
}) {
  return (
    <button {...props} className={cn(styles["btn"], styles[classNames])}>
      {children}
    </button>
  );
}

export default Button;
