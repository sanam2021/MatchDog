import React, { useState } from "react";
import styled from "styled-components";



const TitleSection = () => {
  // Upon on clicking a  button display a message 
  const [isDownloadClicked, setIsDownloadClicked] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloadClicked(true);
  };

  return (
    <SectionContainer>
      <ContainerFluid>
        <TitleImage className="title-image" src="./images/home.jpg" alt="" />
        <BigHeading>
          Discover a World of Pawsibilities, Unleash the Fun.
          <p> Meet Pawsome Canine Companions!</p>
        </BigHeading>
        <DownloadButton
          type="button"
          className="btn btn-dark btn-lg download-button"
          onClick={handleDownloadClick}
        >
          <i className="fab fa-apple"></i>Download
        </DownloadButton>
        <DownloadButton
          type="button"
          className="btn btn-outline-light btn-lg download-button"
          onClick={handleDownloadClick}
        >
          <i className="fab fa-google-play"></i>Download
        </DownloadButton>
        {isDownloadClicked && <Message>Coming Soon!</Message>}
      </ContainerFluid>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  background-color: #ff4c68;
  color: #fff;
  position: relative;
`;

const ContainerFluid = styled.div`
  padding: 7% 15%;
  text-align: left;
  position: relative;
`;

const BigHeading = styled.h1`
  font-size: 1.5rem;
  line-height: 1;
  P {
    color: #fff;
  }
`;

const DownloadButton = styled.button`
  margin: 6% 3% 5% 0;
  width: 10%;
  height: 30px;
  color: #ef8172;
  @media (max-width: 768px) {
    padding: 0;
    width: 50px;
    font-size: 0.7rem;
  }

  &:hover {
    color: #ff4c68;
  }
`;

const TitleImage = styled.img`
  width: 22%;
  height: auto;
  transform: rotate(25deg);
  position: absolute;
  right: 460px;
  bottom: -45%;
  border-radius: 50px;
  z-index: 100px;
  @media (max-width: 768px) {
    width: 20%;
    height: auto;
    right: 50px;
    bottom: -80px;
    z-index: 100px;
  }
`;


const Message = styled.p`
  color: #fff;
`;

export default TitleSection;
