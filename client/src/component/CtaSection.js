import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const CtaSection = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <SectionContainer>
      <CtaContent>
        <CtaHeading>Join MatchDog Today!</CtaHeading>
        <CtaSubheading>
          Find your perfect match and make new friends.
        </CtaSubheading>

        {isAuthenticated ? (
          <p>
            Welcome! You are logged in. Now you can create a Matchdog account.
          </p>
        ) : (
          <p>
            Please <Link to="/login">log in</Link> to create a Matchdog account.
          </p>
        )}

        <CtaButton to="/dogprofile">Create Account Now</CtaButton>
      </CtaContent>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  background-color: #ef8172;
  p {
    color: white;
  }
  link {
    color: #ef8172;
    
  }
`;

const CtaContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
`;

const CtaHeading = styled.h2`
  font-size: 3rem;
  line-height: 1.5;
  color: #fff;
`;

const CtaSubheading = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  color: #fff;
`;

const CtaButton = styled(Link)`
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




export default CtaSection;
