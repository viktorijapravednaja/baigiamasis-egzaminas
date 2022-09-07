import { useState, useEffect } from "react";
import Axios from "axios";

// Style
import {
  StyledFormContainer,
  StyledForm,
  StyledInput,
  StyledCenteredElements,
  StyledH1,
  StyledLabel,
  StyledErrorMessage,
  StyledInputContainer,
  StyledDateInput,
  StyledInputDateContainer,
} from "./RegistrationForm.style";

// Components
import { Button } from "../Button/Button";

const RegistrationForm = () => {
  const initialValues = { name: "", email: "", date: "", time: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // const addToList = () => {
  //   Axios.post("http://localhost:5000/registration", {
  //     name: formValues.name,
  //     email: formValues.email,
  //     date: formValues.date,
  //     time: formValues.time,
  //   });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexName = /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/i;

    if (!values.name) {
      errors.name = "Name is required";
    } else if (!regexName.test(values.name)) {
      errors.name = "Name is invalid";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.date && values.time) {
      errors.date = "Date is required";
    }
    if (!values.time && values.date) {
      errors.date = "Time is required";
    }
    if (!values.time && !values.date) {
      errors.date = "Date and time is required";
    }

    return errors;
  };
  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledCenteredElements>
          <StyledH1>Registration Form</StyledH1>
        </StyledCenteredElements>
        <StyledInputContainer>
          <StyledLabel htmlFor="name">Full Name:</StyledLabel>
          <StyledInput
            type="text"
            name="name"
            placeholder="Name"
            value={formValues.name}
            onChange={handleChange}
          />
          <StyledErrorMessage>{formErrors.name}</StyledErrorMessage>
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <StyledInput
            type="text"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
          <StyledErrorMessage>{formErrors.email}</StyledErrorMessage>
        </StyledInputContainer>
        <StyledLabel htmlFor="time">Date and time:</StyledLabel>
        <StyledInputDateContainer>
          <StyledDateInput
            type="date"
            name="date"
            value={formValues.date}
            onChange={handleChange}
          />
          <StyledDateInput
            type="time"
            name="time"
            value={formValues.time}
            onChange={handleChange}
          />
        </StyledInputDateContainer>
        <StyledErrorMessage>{formErrors.date}</StyledErrorMessage>

        <StyledCenteredElements>
          <Button color={"var(--blue)"} text={"Save"} padding={"3px 10px"} />
        </StyledCenteredElements>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default RegistrationForm;
