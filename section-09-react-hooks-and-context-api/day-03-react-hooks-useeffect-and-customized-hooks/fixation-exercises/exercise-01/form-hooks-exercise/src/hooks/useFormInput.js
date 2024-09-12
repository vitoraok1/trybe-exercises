import { useState } from 'react';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function clearInputs() {
    setValue('');
  }

  return {
    value: value,
    onChange: handleChange,
    clearInputs,
  };
}

export default useFormInput;
