import * as React from "react";

import "../styles/styles.css";
import { styled } from "styled-components";

import type { HeadFC, PageProps } from "gatsby";

import { LearnMore } from "../components/LearnMore";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { SideBar } from "../components/SideBar";

const ContactPage: React.FC<PageProps> = () => {
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
          <ContactForm />
          <SideBar />
        </ContactFormContainer>

      </ContactPageContainer>
      <Footer />
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
`

const ContactFormContainer = styled.div`
  display: flex;
  gap: 33px;
  div:first-child {
      flex: 0 0 60%;
  }
  margin-bottom: 14px;
`

const ContactUsTitleContainer = styled.div`
  h2{
    margin-bottom: 22px;
  }

  margin-bottom: 46px;

`