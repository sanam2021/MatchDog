import React,{useState} from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faTimes,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import dogsdata from "./dogsdata"

//Match Componenet
const Match = () => {
  const navigate = useNavigate();
  const [currentDogIndex, setCurrentDogIndex] = useState(0);
  const currentDog = dogsdata.dogCollection[currentDogIndex];

  // Handle the click event for the Match button
  const handleMatchClick = () => {
    navigate("/chat");
  };
  // Handle the click event for the Reject button
  const handleRejectClick = () => {
    const nextIndex = currentDogIndex + 1;
    setCurrentDogIndex(nextIndex);
  };

  // Check if there is a next dog available
  const hasNextDog = currentDogIndex < dogsdata.dogCollection.length - 1;

  return (
    <MatchContainer>
      <MatchBox>
        <MatchImage
          // src={require(`./DogsIMG/${currentDog.picture}`).default}
          src={`./DogsIMG/${currentDog.picture}`}
          alt="Dog Profile"
        />

        <MatchName>{currentDog.name}</MatchName>
        <MatchDetails>
          <p>Breed: {currentDog.breed}</p>
          <p>Bio: {currentDog.bio}</p>
          <p>
            Tags:{" "}
            {currentDog.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </p>
          {currentDog.lookingForPartner && <p>Looking For Partner</p>}
        </MatchDetails>
        <ButtonContainer>
          <MatchButton onClick={handleMatchClick}>
            <HeartIcon icon={faHeart} />
            Match
          </MatchButton>
          <MatchButton onClick={handleRejectClick}>
            <CrossIcon icon={faTimes} />
            Reject
          </MatchButton>
        </ButtonContainer>
      </MatchBox>
      {hasNextDog && (
        <ArrowRightIcon icon={faArrowRight} onClick={handleRejectClick} />
      )}
      {!hasNextDog && (
        <Link to="/match1">
          <ArrowRightIcon icon={faArrowRight} />
        </Link>
      )}
    </MatchContainer>
  );
};
//style
const MatchDetails = styled.div`
  font-size: 1rem;
  color: white;
  margin-bottom: 2rem;
  p {
    color: white;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MatchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  font-size: 1rem;
  color: #ef8172;
  background-color: #ff4c68;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: #ef8172;
  color: #fff;

  &:hover {
    background-color: #ff4c68;
    color: #fff;
  }
`;

const HeartIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

const CrossIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

const ArrowRightIcon = styled(FontAwesomeIcon)`
  margin-top: 1rem;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4c68;
  }
`;

const MatchBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ff4c68;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 40px;
`;


const MatchImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const MatchName = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 0.5rem;
`;

const MatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #ef8172;
  position: relative;
`;

export default Match;



         
    



          
      
