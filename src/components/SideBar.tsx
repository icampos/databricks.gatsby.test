import React from "react";
import styled from "styled-components";

export const SideBar: React.FC = () => {
  return (
    <section>
      <ContentContainer>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </p>
      </ContentContainer>
      <ContentContainer>
        <p>
          <InfoTitle>Phone:</InfoTitle>
          <a href="tel: 1 (877) 777-7777">+1 (877) 777-7777</a>
        </p>
      </ContentContainer>
      <ContentContainer>
        <p>
        <InfoTitle>Hours:</InfoTitle>
          <p>
            Monday - Sunday: <b>7am - 11pm EST</b>
          </p>
        </p>
      </ContentContainer>
    </section>
  );
};

const ContentContainer = styled.div`
  margin-bottom: 25px;
  a {
    color: var(--main-link-color);
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 4px;
  }
`;


const InfoTitle = styled.h4`
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 18px;
`