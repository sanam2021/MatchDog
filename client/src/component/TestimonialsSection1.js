import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
  height: 100%;
  border-radius: 100%;
`;

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

const MainLogoImage = styled.img`
  width: 150px;
  height: 150px;
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

const PrevIcon = styled.span`
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

const TestimonialsSection1 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  

  const handleBack = () => {
    navigate("/testimonialsSection");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <SectionContainer>
      <LogoContainer>
        <MainLogoImage src="./images/logo1.png" alt="Main Logo" />
        <HomeIcon icon={faHome} onClick={handleClick} />
      </LogoContainer>
      <TestimonialText>
        My dog's life has completely changed since we started using MatchDog.
      </TestimonialText>
      <TestimonialContent>
        <TestimonialImage src="./images/owner1.jpg" alt="user" />
        <TestimonialAuthor>
          Victor Vargas
          <br />
          Montreal, Quebec
        </TestimonialAuthor>
      </TestimonialContent>
      <NavigationContainer>
        <PrevIcon onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </PrevIcon>
        <NextIcon onClick={handleClick}>
          <FontAwesomeIcon icon={faArrowRight} />
        </NextIcon>
      </NavigationContainer>
      <TestimonialText>
        <p>
          She made so many new furry friends, and it's been a joy to see her
          happy and playful. Thank you, MatchDog!
        </p>
      </TestimonialText>
      <TestimonialContainer>
        <TestimonialContent>
          <TestimonialImage1 src="./images/coco.png" alt="owner's dog" />
          <TestimonialImage2 src="./images/coco2.jpg" alt="owner's dog" />
          <TestimonialImage3 src="./images/coco3.jpg" alt="owner's dog" />
        </TestimonialContent>
      </TestimonialContainer>
      <Link to="/"></Link>
    </SectionContainer>
  );
};

export default TestimonialsSection1;












  

