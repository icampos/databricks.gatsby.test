import React from "react";
import { styled } from "styled-components";
import { MENU_ITEMS } from "../constants";
import { it } from "node:test";

export const Footer: React.FC = () => (
  <FooterContainer>
    <MenuContainer>
      <div>
        <p>✆ +1 (877) 777-7777</p>
        <p>123 Main st, San Francisco, CA, 94107</p>
      </div>
      <MenuItemContainer>
        {MENU_ITEMS.map((item) => (
          <div key={item.title}>
            <h4>
              {item.title}
            </h4>
            <ul>
              {item.links.map((link) => (
                <li>
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>

          </div>
        ))}
      </MenuItemContainer>
    </MenuContainer>
    <CopyRightContainer>@2023 Example</CopyRightContainer>
  </FooterContainer>
);

const FooterContainer = styled.div`
  width: 100%;
  background-color: var(--main-bg-color);
  padding: 60px 8px 0;
  color: #ffffff;
  p, a{
    color: #ffffff;
    font-size: 12px;
    text-align: left;
    margin-bottom: 20px;
    display: block;
  }
  p{
    line-height: 16.94px
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 300px;
  margin-bottom: 100px;
  div:first-child{
    p{
      margin-bottom: 10px;
    }
  }
`;

const MenuItemContainer = styled.div`
  display: flex;
  gap: 200px;
  li{
    list-style-type: none;
  }
`;

const CopyRightContainer = styled.div`
  border-top: 1px solid #ffffff;
  width: 100%;
  text-align: center;
  padding: 24px 0;
  color: #ffffff;
`;
