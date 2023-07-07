import { useState } from "react";
import { isValidEmailDomain, isValidPhoneNumber } from "../utils";

export const useContactForm = () => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [showSubmitMessage, setShowSubmitMessage] = useState(false);

  const [formValues, setFormValues] = useState({
    email: "",
    fullName: "",
    phone: "",
    purpose: "",
  });

  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (isValidEmail && isValidPhone) {
      setShowSubmitMessage(true);
    }
  };

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    name === "email" && setIsValidEmail(isValidEmailDomain(value));
    name === "phone" && setIsValidPhone(isValidPhoneNumber(value));
    setFormValues({ ...formValues, [name]: value });
  };

  return {
    handleInputChange,
    handleFormSubmit,
    isValidEmail,
    isValidPhone,
    showSubmitMessage,
    formValues,
  };
};
