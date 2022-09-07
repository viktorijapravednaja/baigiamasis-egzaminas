import styled from "styled-components";

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contentent: center;
  align-items: center;
  width: 100%;
  margin-top: 5rem;

  @media screen and (min-width: 481px) {
    width: 80%;
    margin: 5rem auto 0 auto;
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
  @media screen and (min-width: 1201px) {
    width: 40%;
  }
`;

export const StyledForm = styled.form`
  width: 90%;
  border: 1px solid var(--black);
  padding: 20px;
  border-radius: 8px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin: 8px auto 0px auto;
  width: 100%;
  border: 1px solid var(--black);
  font-size: 16px;
  font-weight: 200;
  border-radius: 8px;
`;

export const StyledDateInput = styled.input`
  padding: 10px;
  margin: 8px 0px 0px 0px;
  width: 20%;
  border: 1px solid var(--black);
  font-size: 16px;
  font-weight: 200;
  border-radius: 8px;
`;

export const StyledCenteredElements = styled.div`
  text-align: center;
  button {
    margin-top: 40px;
  }
`;

export const StyledH1 = styled.h1`
  margin-bottom: 25px;
  font-weight: 200;
  border-bottom: 1px solid var(--black);
`;

export const StyledLabel = styled.label`
  font-size: 22px;
  font-weight: 200;
`;

export const StyledInputContainer = styled.div`
  margin-bottom: 40px;
`;

export const StyledInputDateContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
`;
export const StyledErrorMessage = styled.p`
  color: #ab0501;
  padding-top: 8px;
`;
