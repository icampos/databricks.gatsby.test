import { useState } from "react";
import { isValidEmailDomain, isValidPhoneNumber } from '../utils'

export const useContactForm = () => {

    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPhone, setIsValidPhone] = useState(true);

    const handleFormSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setIsValidEmail(isValidEmailDomain(value))
        }
        if (name === 'phone') {
            setIsValidPhone(isValidPhoneNumber(value))
        }
    };

    return { handleInputChange, handleFormSubmit, isValidEmail, isValidPhone };
}