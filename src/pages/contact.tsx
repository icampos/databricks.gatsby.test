import * as React from "react";

import "../styles/styles.css";
import { styled } from "styled-components";

import type { HeadFC, PageProps } from "gatsby";

import { LearnMore } from "../components/LearnMore";
import { Footer } from "../components/Footer";

const ContactPage: React.FC<PageProps> = () => {
  return (
    <>
      <LearnMore />
      <ContactPageTitle>Company Name</ContactPageTitle>
      <ContactPageContainer></ContactPageContainer>
      <Footer />
    </>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <title>Contact</title>;

const ContactPageTitle = styled.h1`
  text-align: center;
`;

const ContactPageContainer = styled.div`
  display: flex;
`