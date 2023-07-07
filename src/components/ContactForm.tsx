import React from "react";
import styled from "styled-components";

export const ContactForm: React.FC = () => {
    return (
        <>
            <div>
                <StyledForm>
                    <input type="text" name="name" placeholder="Email" />
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="phone" placeholder="Phone Number" />
                    <select>
                        <option value="sales">Sales</option>
                        <option value="press">Press</option>
                        <option value="suppor">Support</option>
                        <option value="demo">Demo</option>
                    </select>
                    <input type="submit" value="Submit" />
                </StyledForm>
            </div>
        </>
    );
} 
const StyledForm = styled.form`
    input[type=text], select {
        width: 100%;
        box-sizing: border-box;
        border: 1px solid var(--main-form-color);
        border-radius: 5px;
        color: var(--main-form-color);
        margin-bottom: 27px;
        display: block;
        padding: 17px 0 15px 27px;
        font-size: 15px;
        &::placeholder {
            color: var(--main-form-color);
            font-size: 15px;
        }
    }
    input[type=submit]{
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
    }
`