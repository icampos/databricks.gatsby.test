import React from "react";
import { styled } from "styled-components";

export const Footer: React.FC = () => <FooterContainer>
    <div>

    </div>
    <CopyRightContainer>
        @2021 Example
    </CopyRightContainer>
</FooterContainer>;

const FooterContainer = styled.div`
    width: 100%;
    background-color: #000000;
    text-align: center;
    padding: 8px 0;
    color: #ffffff;
`

const CopyRightContainer = styled.div`
    border-top: 1px solid #ffffff;
    width: 100%;
    background-color: #000000;
    text-align: center;
    padding: 24px 0;
    color: #ffffff;
`