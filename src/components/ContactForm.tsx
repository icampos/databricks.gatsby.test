import React from "react";
import styled from "styled-components";

interface ContactFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValidEmail: boolean;
  isValidPhone: boolean;
}

export const ContactForm = ({
  onSubmit,
  onInputChange,
  isValidEmail,
  isValidPhone,
}: ContactFormProps) => {
  return (
    <>
      <div>
        <StyledForm onSubmit={onSubmit}>
          <InputContainer>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={onInputChange}
            />
            {!isValidEmail && (
              <ValidationText>
                Please enter a valid email address
              </ValidationText>
            )}
          </InputContainer>
          <InputContainer>
            <input type="text" name="name" placeholder="Name" />
          </InputContainer>
          <InputContainer>
            <input
              type="tel"
              name="phone"
              onChange={onInputChange}
              placeholder="Phone Number"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
            {!isValidPhone && (
              <ValidationText>
                Please enter a valid phone number
              </ValidationText>
            )}
          </InputContainer>
          <InputContainer>
            <select>
              <option value="sales">Sales</option>
              <option value="press">Press</option>
              <option value="suppor">Support</option>
              <option value="demo">Demo</option>
            </select>
          </InputContainer>
          <input type="submit" disabled={!isValidEmail || !isValidPhone} value="Submit" />
        </StyledForm>
        <div></div>
      </div>
    </>
  );
};
const StyledForm = styled.form`
  input,
  select {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid var(--main-form-color);
    border-radius: 5px;
    color: var(--main-form-color);
    display: block;
    padding: 17px 0 15px 27px;
    font-size: 15px;
    &::placeholder {
      color: var(--main-form-color);
      font-size: 15px;
    }
  }
  input[type="submit"] {
    max-width: 174px;
    padding: 10px 45px;
    border-radius: 5px;
    color: var(--main-white-color);
    background-color: var(--main-black-color);
    border: none;
    float: right;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
    }
  }
`;

const InputContainer = styled.div`
  margin-bottom: 27px;
`;

const ValidationText = styled.p`
  margin-bottom: 27px;
  margin-top: 5px;
  font-size: 12px;
`;
