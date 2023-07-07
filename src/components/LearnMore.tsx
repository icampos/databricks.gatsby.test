import React from "react";
import { styled } from "styled-components";

export const LearnMore: React.FC = () => <LearnMoreContainer>Learn more about our latest features</LearnMoreContainer>;

const LearnMoreContainer = styled.div`
    width: 100%;
    background-color: var(--main-bg-color);
    text-align: center;
    padding: 8px 0;
    color: #ffffff;
    font-size: 12px;
    font-weight: 300;
`