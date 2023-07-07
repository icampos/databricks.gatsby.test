import { useState } from "react";
import { hasGmailDomain } from '../utils'

export const useContactForm = () => {

    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleFormSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setIsValidEmail(hasGmailDomain(value))
        }
    };

    return { handleInputChange, handleFormSubmit, isValidEmail };
}