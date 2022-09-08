import axios from "axios";
import * as Yup from "yup";

// Style
import {
  StyledFormContainer,
  StyledForm,
  StyledInput,
  StyledCenteredElements,
  StyledH1,
  StyledLabel,
  // StyledErrorMessage,
  StyledInputContainer,
  StyledDateInput,
  StyledInputDateContainer,
} from "./RegistrationForm.style";

// Components
import { Button } from "../Button/Button";

const RegistrationForm = () => {
  const addToList = (name, email, date, time) => {
    axios
      .post("http://localhost:5000/register", {
        name,
        email,
        date,
        time,
      })
      .then((res) => alert(res));
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
      console.log(schema.isValid);
      schema.isValid({ name, email, date, time }).then((data) => {
        data ? addToList(name, email, date, time) : alert("Invalid data");
      });
    } else {
      alert("Please write in data");
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
          {/* <StyledErrorMessage>{formErrors.name}</StyledErrorMessage> */}
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <StyledInput type="text" name="email" placeholder="Email" />
          {/* <StyledErrorMessage>{formErrors.email}</StyledErrorMessage> */}
        </StyledInputContainer>
        <StyledLabel htmlFor="time">Date and time:</StyledLabel>
        <StyledInputDateContainer>
          <StyledDateInput type="date" name="date" />
          <StyledDateInput type="time" name="time" />
        </StyledInputDateContainer>
        {/* <StyledErrorMessage>{formErrors.date}</StyledErrorMessage> */}

        <StyledCenteredElements>
          <Button color={"var(--blue)"} text={"Save"} padding={"3px 10px"} />
        </StyledCenteredElements>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default RegistrationForm;
