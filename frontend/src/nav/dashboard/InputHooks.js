import { useState } from 'react'; // removed React from here just to get rid of warnings

const useSignUpForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    console.log(inputs);
    callback();
  };
  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};
export default useSignUpForm;
