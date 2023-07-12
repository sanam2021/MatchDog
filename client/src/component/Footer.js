import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

//footer
const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <MainLogoImage src="./images/logoname.png" alt="Main Logo" />
        <FooterText>&copy; 2023 MatchDog. All rights reserved.</FooterText>
      </LogoContainer>

      <ContactOptions>
        <ContactOption href="mailto:sanamsaadi@.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </ContactOption>
        <ContactOption href="https://instagram.com/sanam.saadi?igshid=ZDc4ODBmNjlmNQ==://www.instagram.com/sanam.saadi/">
          <FontAwesomeIcon icon={faInstagram} />
        </ContactOption>
        <ContactOption href="https://www.facebook.com/sanam.saadi?mibextid=ZbWKwL">
          <FontAwesomeIcon icon={faFacebook} />
        </ContactOption>
      </ContactOptions>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #ff4c68;
  text-align: center;
  color: #fff;
`;

const FooterText = styled.p`
 font-size: 1.2rem;
  color: #fff;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    text-align: left;
  }
`;


const ContactOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 20px;
`;

const ContactOption = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4c68;
  }
`;

const MainLogoImage = styled.img`
  width: 200px;
  height: 200px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export default Footer;
