import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHome } from "@fortawesome/free-solid-svg-icons";

 //TestimonialsSection component
const TestimonialsSection= () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");// navigate back home
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  //handleclick to go to the next page
  const handleClickNext = () => {
    navigate("/testimonialsSection1"); // navigate to testimonialsSection1 page 
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <SectionContainer>
      <LogoContainer>
        <MainLogoImage src="./images/logo1.png" alt="Main Logo" />
        <HomeIcon icon={faHome} onClick={handleClick} />
      </LogoContainer>
      <TestimonialText>
        My dog used to be so lonely, but with MatchDog's help, they've found the
        love of their life. I think.
      </TestimonialText>
      <TestimonialContent>
        <TestimonialImage src="./images/Me3.png" alt="lady" />
        <TestimonialAuthor>Sanam Saadi</TestimonialAuthor>
      </TestimonialContent>
      <NavigationContainer></NavigationContainer>
      <TestimonialText>
        <p>
          With meeting new dogs from Match Dog, there was a connection right
          away.
        </p>
      </TestimonialText>

      <TestimonialContainer>
        <TestimonialContent>
          <TestimonialImage1 src="./images/dog2.jpg" alt="another lady" />
          <TestimonialImage2 src="./images/dog3.jpg" alt="another lady" />
          <TestimonialImage3 src="./images/dog4.jpg" alt="another lady" />
        </TestimonialContent>
        <NextIcon onClick={handleClickNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </NextIcon>
      </TestimonialContainer>
    </SectionContainer>
  );
};


const SectionContainer = styled.section`
  text-align: center;
  background-color: #ef8172;
  background-size: cover;
`;

const TestimonialAuthor = styled.em`
  margin-left: 2rem;
  font-size: 1.5rem;
  color: white;
`;

const TestimonialText = styled.h2`
  font-size: 2rem;
  line-height: 1.5;
  color: white;
  margin-top: 0;
  p {
    font-size: 1.5rem;
    color: white;
  }
`;

const TestimonialContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const TestimonialImage = styled.img`
  width: 5%;
  border-radius: 100%;
`;

const TestimonialImage1 = styled.img`
  width: 20%;
  border-radius: 100%;
`;

const TestimonialImage2 = styled.img`
  width: 20%;
  border-radius: 100%;
`;

const TestimonialImage3 = styled.img`
  width: 30%;
  border-radius: 100%;
`;

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;
`;

const MainLogoImage = styled.img`
  width: 200px;
  height: 200px;
  align-self: flex-start;
`;
const HomeIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: #ff4c68; 
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;


const NextIcon = styled.span`
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff4c68;
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
  `;
const TestimonialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default TestimonialsSection;

