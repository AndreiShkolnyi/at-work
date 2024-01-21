import { useState } from 'react';


export const useValidate = (data) => {
    const [errors, setErrors] = useState({});


  const validate = () => {

      let errors = {};

      let isValid = true;

      if (!data["name"]) {
        isValid = false;

        errors["name"] = "Please enter your name.";
      }

  

      if (!data["username"]) {
        isValid = false;

        errors["username"] = "Please enter your email Address.";
      }

  

      if (typeof data["email"] !== "undefined") {

        var pattern = new RegExp(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );

        if (!pattern.test(data["email"])) {
          isValid = false;

          errors["email"] = "Please enter valid email address.";
        }
      }

      if (!data["address"]) {

        isValid = false;

        errors["address"] = "Please enter your address.";
      }

      if (!data["phone"]) {
        isValid = false;

        errors["phone"] = "Please enter your phone.";
      }

      if (!data["company"]) {
        isValid = false;

        errors["company"] = "Please enter name of your company.";
      }

      setErrors({...errors});

      return isValid;

  }

  return {errors, validate};
}