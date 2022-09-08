import axios from "axios";
import * as Yup from "yup";
import { useState } from "react";

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
  StyledConfirmationMessage,
} from "./RegistrationForm.style";

// Components
import { Button } from "../Button/Button";

const RegistrationForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [sentMessage, setSentMessage] = useState("");
  const addToList = (name, email, date, time) => {
    axios
      .post("http://localhost:5000/register", {
        name,
        email,
        date,
        time,
      })
      .then((res) => {
        setSentMessage(res.data);
      })
      .catch((err) => {
        setErrorMessage(err.response.data);
        setSentMessage("");
      });
  };

  const validation = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    const email = e.target.elements.email.value.trim();
    const date = e.target.elements.date.value.trim();
    const time = e.target.elements.time.value.trim();
    if (name && email && date && time) {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().max(255).min(5).required(),
        date: Yup.string().required(),
        time: Yup.string().required(),
      });

      schema.isValid({ name, email, date, time }).then((data) => {
        // data
        //   ? addToList(name, email, date, time)
        //   : setErrorMessage("Invalid Data");
        // console.log(name);
        // console.log(nameToInt);

        if (data) {
          addToList(name, email, date, time);
          setErrorMessage("");
          setSentMessage("");
        } else if (!data.name) {
          setErrorMessage("Data is invalid");
          setSentMessage("");
        } else if (!data.email) {
          setErrorMessage("Data is invalid");
          setSentMessage("");
        } else if (!data.date) {
          setErrorMessage("Data is invalid");
          setSentMessage("");
        } else if (!data.time) {
          setErrorMessage("Data is invalid");
          setSentMessage("");
        } else {
          setErrorMessage("Data is invalid");
          setSentMessage("");
        }
      });
    } else {
      setErrorMessage("Data is required");
      setSentMessage("");
    }
  };

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={validation}>
        <StyledCenteredElements>
          <StyledH1>Registration Form</StyledH1>
        </StyledCenteredElements>
        <StyledInputContainer>
          <StyledLabel htmlFor="name">Full Name:</StyledLabel>
          <StyledInput type="text" name="name" placeholder="Name" />
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <StyledInput type="text" name="email" placeholder="Email" />
        </StyledInputContainer>
        <StyledLabel htmlFor="time">Date and time:</StyledLabel>
        <StyledInputDateContainer>
          <StyledDateInput type="date" name="date" />
          <StyledDateInput type="time" name="time" />
        </StyledInputDateContainer>
        <StyledConfirmationMessage>{sentMessage}</StyledConfirmationMessage>
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>

        <StyledCenteredElements>
          <Button color={"var(--blue)"} text={"Save"} padding={"8px 0px"} />
        </StyledCenteredElements>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default RegistrationForm;
