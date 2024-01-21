import { useState } from 'react';
import Button from '../../shared/ui/button/button';
import TextField from '../../shared/ui/textFiled/textField';
import styles from './form.module.scss';

import { useDispatch } from 'react-redux';
import { usersActions } from '../../entities/userCard/model/userSlice';
import { useValidate } from '../../shared/hooks/use-validate';

export const Form = ({ profile, textFields, setChange, isChanged }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(
    profile
      ? profile
      : {
          id: "",
          name: "",
          username: "",
          email: "",
          address: "",
          phone: "",
          company: "",
        }
  );
  const {errors, validate} = useValidate(formData);

    const sandForm = (event) => {
      event.preventDefault();
      
      if (validate()) {
        setChange();
        dispatch(usersActions.updateItem(formData));
        
      }
    };


  const setValue = ({ name, value }) => {
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  return (
    <form className={styles["form"]} onSubmit={(e) => sandForm(e)}>
      <div className={styles["fields"]} name="fields">
        {textFields.map((item) => (
          <TextField
            setValue={setValue}
            value={"12"}
            currentValue={profile[item.type]}
            type={item.type}
            name={item.title}
            placeholder={item.name}
            key={item.id}
            error={errors[item.type]}
          />
        ))}
      </div>
      <Button type="submit" classNames="form-btn">
        Сохранить
      </Button>
    </form>
  );
};