import { useEffect, useState } from 'react';
import styles from './textField.module.scss';
import cn from "classnames";

const TextField = ({name, type,  placeholder, currentValue, setValue, error,  ...props }) => {
  
  const [fieldValue, setFieldValue] = useState('');

  useEffect(() => {
    if (currentValue) {
      setFieldValue(currentValue);
    } else {
      return;
    }
  }, [currentValue]);

  const setCurrentValue = (e) => {
    setFieldValue(e.target.value);
    setValue({name: e.target.name, value: e.target.value});
  }
  
  return (
    <div className={cn(styles["textField"])} {...props}>
      <label className={cn(styles["field-label"])} htmlFor={name}>
        {name}
      </label>
      <span className={styles["input-container"]}>
        <input
          className={cn(styles["field-input"])}
          id={name}
          name={type}
          type="text"
          value={fieldValue}
          onChange={setCurrentValue}
          placeholder={placeholder}
        />
        <div className={cn(styles["text-danger"])}>{error}</div>
      </span>
    </div>
  );
};

export default TextField;