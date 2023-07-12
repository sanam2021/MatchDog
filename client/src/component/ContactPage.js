import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {  useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ContactContainer>
      <LogoContainer>
        <MainLogoImage src="./images/logoname.png" alt="Main Logo" />
        <HomeIcon icon={faHome} onClick={handleClick} />
      </LogoContainer>
      <ContactHeading>Contact Us</ContactHeading>
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
      <ContactForm>
        <ContactInput type="text" placeholder="Name" />
        <ContactInput type="email" placeholder="Email" />
        <ContactInput type="text" placeholder="Phone" />
        <ContactTextarea placeholder="Message"></ContactTextarea>
        <ContactButton>Send Message</ContactButton>
      </ContactForm>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  background-color: #ef8172;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ContactHeading = styled.h2`
  font-size: 2rem;
  line-height: 1.5;
  color: #fff;
  margin-bottom: 1rem;
`;


const ContactOptions = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const ContactOption = styled.a`
  margin: 0 1rem;
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4c68;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin-bottom: 2rem;
`;

const ContactInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
`;

const ContactTextarea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
`;

const ContactButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #fff;
  color: #ef8172;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4c68;
    color: #fff;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const MainLogoImage = styled.img`
  width: 200px;
  height: 200px;
`;

const HomeIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: #ff4c68;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;


export default ContactPage;
