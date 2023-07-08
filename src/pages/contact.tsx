import * as React from "react";

import "../styles/styles.css";
import { styled } from "styled-components";

import type { HeadFC, PageProps } from "gatsby";

import { LearnMore } from "../components/LearnMore";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { SideBar } from "../components/SideBar";

import { useContactForm } from "../hooks/useContactForm";

const ContactPage: React.FC<PageProps> = () => {
  const {
    handleInputChange,
    handleFormSubmit,
    handleEmailRef,
    isValidEmail,
    isValidPhone,
    showSubmitMessage,
    formValues,
    emailRef
  } = useContactForm();
  return (
    <>
      <LearnMore />
      <ContactPageTitle>Company Name</ContactPageTitle>
      <ContactPageContainer>
        <ContactUsTitleContainer>
          <h2>Contact Us</h2>
          <p>Please provide some information to get started.</p>
        </ContactUsTitleContainer>
        <ContactFormContainer>
          {showSubmitMessage ? (
            <div>
              <h3>Hi {formValues.fullName}</h3>
              <p>Thanks for filling out our form!</p>
              <br/>
              <p> We will reach out to you at{" "}
              <b>{formValues.email}</b> or <br/> <b>{formValues.phone}</b> regarding your{" "}
              <b>{formValues.purpose}</b> inquiry. </p>
            </div>
          ) : (
            <ContactForm
              onSubmit={handleFormSubmit}
              onInputChange={handleInputChange}
              isValidEmail={isValidEmail}
              isValidPhone={isValidPhone}
              emailRef={emailRef}
            />
          )}

          <SideBar />
        </ContactFormContainer>
      </ContactPageContainer>
      <Footer handleEmailRef={handleEmailRef}/>
    </>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <title>Contact</title>;

const ContactPageTitle = styled.h1`
  text-align: center;
  margin-bottom: 58px;
`;

const ContactPageContainer = styled.div`
  padding: 0 186px;
  margin-bottom: 14px;
`;

const ContactFormContainer = styled.div`
  display: flex;
  gap: 33px;
  div:first-child {
    flex: 0 0 60%;
  }
  div:last-child {
    flex: 0 0 40%;
  }
  margin-bottom: 14px;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

const ContactUsTitleContainer = styled.div`
  h2 {
    margin-bottom: 22px;
  }

  margin-bottom: 46px;
`;
