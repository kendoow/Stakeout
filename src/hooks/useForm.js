import { useState, useEffect } from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLengh":
          value.length < validations[validation]
          
            ? setMinLengthError(true)
            : setMinLengthError(false);
            
          break;
        case "IsEmpty":
          value ? setEmpty(false) : setEmpty(true); 
      }
    }
  }, [value]);
  return {
    isEmpty,
    minLengthError,
  };
};

const useInput = (inititalValue, validations) => {
  const [value, setValue] = useState(inititalValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);
  const onChange = (e) => {
    setValue(e.target.value);
    // console.log(e.target.value)
  };

  const onBlur = (e) => {
    setDirty(true);
  };

  return { value, onChange, onBlur, isDirty, ...valid}
};



export { useInput, useValidation };
