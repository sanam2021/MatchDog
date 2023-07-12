import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

//Location component
const LocationPage = () => {
  return (
    <LocationContainer>
      <LocationImage src="./images/location.jpg" alt="Location" />
      <LocationParagraph>
        <h1>
          Easily find nearby dog parks for your furry friend's next date in the
          park! Take a stroll and let your dog socialize with other pups.
        </h1>
      </LocationParagraph>
      <GoogleMapsLink
        href="https://www.google.com/maps/search/dog+parks"// nearby Parks Map
        target="_blank"
        rel="noopener noreferrer"
      >
        <GoogleMapsIcon icon={faMapMarkerAlt} />
        View nearby dog parks on Google Maps
      </GoogleMapsLink>
    </LocationContainer>
  );
};
const LocationContainer = styled.div`
  text-align: center;
  padding: 50px;
  background-color: #ef8172;

`;

const LocationImage = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 20px;
  border-radius:700px;
`;

const LocationParagraph = styled.p`
  font-size: 1rem;
  color: white;
`;

const GoogleMapsLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  text-decoration: none;

  font-size: 1.2rem;
  color: white;

  .icon {
    &:hover {
      background-color: #ff4c68;
    }
  }
`;

const GoogleMapsIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;

  
`;



export default LocationPage;

