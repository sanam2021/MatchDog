// Match1.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faTimes,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import Snackbar from "@material-ui/core/Snackbar";
import { Link, useNavigate } from "react-router-dom";

//Match1 Component
const Match1 = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [open, setOpen] = useState(false);
  const [isProfileLoaded, setIsProfileLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      setIsProfileLoaded(true);
    }
  }, [isAuthenticated]);

  const handleMatchClick = () => {
    setOpen(true);
    navigate("/chat"); // Navigate to the Chat page
  };
  // Reject button click
  // Redirect to the next match 
  const handleRejectClick = () => {
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSignIn = () => {
    if (!isAuthenticated) {
      loginWithRedirect({
        appState: { returnTo: "/match1" }, // Return to the Match1 page after signing in
      });
    }
  };

  return (
    <MatchContainer>
      {!isProfileLoaded ? (
        <>
          <MatchImage src="./images/dog2-blur.jpg" alt="Dog Profile" />
          <Message>Click Sign In to view the profile</Message>
          <MatchButton onClick={handleSignIn}>Sign In</MatchButton>
        </>
      ) : (
        <MatchBox>
          <MatchImage src="./images/dog2.jpg" alt="Dog Profile" />
          <MatchName>Bella</MatchName>
          <MatchDetails>
            <p>Gender: Female</p>
            <p>Age: 1 year old</p>
            <p>Location: Vancouver, BC</p>
          </MatchDetails>
          <MatchButton onClick={handleMatchClick}>
            <RejectIcon icon={faHeart} />
            Match
          </MatchButton>
          <MatchButton onClick={handleRejectClick}>
            <RejectIcon icon={faTimes} />
            Reject
          </MatchButton>
        </MatchBox>
      )}
      <Link to="/match2">
        <ArrowRightIcon icon={faArrowRight} />
      </Link>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        message="Matched!"
      />
    </MatchContainer>
  );
};


    const MatchContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      background-color: #ef8172;
      position: relative;
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
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin-bottom: 1rem;
    `;

    const MatchName = styled.h3`
      font-size: 1.5rem;
      color: white;
      margin-bottom: 0.5rem;
    `;

    const MatchDetails = styled.div`
      font-size: 1rem;
      color: white;
      margin-bottom: 2rem;
      p {
        color: white;
      }
    `;

    const MatchButton = styled.button`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 1rem;
      margin: 0.5rem 0;
      font-size: 1rem;
      color: #ef8172;
      background-color: #ff4c68;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      background-color: #ef8172;
      color: #fff;
      height: 30px;

      &:hover {
        background-color: #ff4c68;
        color: #fff;
      }
    `;

    const RejectIcon = styled(FontAwesomeIcon)`
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

    const Message = styled.p`
      font-size: 1.5rem;
      color: white;
      margin-top: 1rem;
    `;




export default Match1;
