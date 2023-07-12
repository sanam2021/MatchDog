import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TestimonialContainer = styled.div`
  text-align: center;
  background-color: #ef8172;
 
`;

const TestimonialText = styled.h2`
  font-size: 2rem;
  line-height: 1.5;
  color: white;


`;

const TestimonialContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const TestimonialImage = styled.img`
  width: 300px;
  height:400px;
  border-radius: 50%;

`;

const TestimonialAuthor = styled.em`
  margin-left: 2rem;
  font-size: 1.5rem;
  color: white;
`;

const NextIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: #ff4c68;
  color: #ef8172;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left:80px;

  &:hover {
    background-color: #ff4c68;
    color: #fff;
  }
`;

const Testimonials = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "./images/lili1.jpg",
    "./images/lili2.jpg",
    "./images/lili3.jpg",
    "./images/lili4.jpg",
    "./images/lili5.jpg",
    "./images/lili.jpg",
  
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    navigate("/testimonialsSection");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <TestimonialContainer>
      <TestimonialText>
        I no longer have to sniff the neighborhood for love. I've found the most
        paw-some connections on MatchDog. Bark if you're ready for an adventure!
        Woof.
      </TestimonialText>
      <TestimonialContent>
        <TestimonialImage src={images[currentImageIndex]} alt="dog-profile" />
        <TestimonialAuthor>
          Lilian Saadi
          <br />
          Ottawa, Ontario
        </TestimonialAuthor>
        <NextIcon onClick={handleClick}>
          <FontAwesomeIcon icon={faArrowRight} />
        </NextIcon>
      </TestimonialContent>
      <Link to="/testimonialsSection"></Link>
    </TestimonialContainer>
  );
};

export default Testimonials;
