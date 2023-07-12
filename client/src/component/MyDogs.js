import React, { useContext, useState, useEffect } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import axios from "axios";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const MyDogs = () => {
  const { profile } = useContext(UserContext);
  const [dogDetails, setDogDetails] = useState([]);
 const navigate = useNavigate();

 
  useEffect(() => {
    const fetchDogDetails = async () => {
      try {
        const dogDetailsArr = await Promise.all(
          profile.dogs.map(async (dogId) => {
         

            const response = await axios.get(`/api/dogs/${dogId}`);
            return response.data;
          })
        );
        setDogDetails(dogDetailsArr);
        

      } catch (error) {
        console.error("Error fetching dog details:", error);
      }
    };

    if (profile && profile.dogs) {
      fetchDogDetails();
    }
  }, [profile]);
 const handleClick = () => {
   navigate("/");
   window.scrollTo({ top: 0, behavior: "smooth" });
 };

  if (!profile || !profile.dogs) {
    return <div>Loading...</div>;
  }

  return (
    <DetailContainer>
      <HomeIcon icon={faHome} onClick={handleClick} />

      <DetailBox>
        <div>
          <DetailHeading>My Dogs Profile:</DetailHeading>
          {dogDetails.map(({ data }) => (
            <StyledLink to={`/my-dogs/${data._id}`} key={data._id}>
              {data.name}
            </StyledLink>
          ))}
        </div>
      </DetailBox>
    </DetailContainer>
  );
};
//style
const DetailHeading = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
`;
const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ff4c68;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 40px;
`;
const StyledLink = styled(Link)`
  color: white;
  margin-right: 20px;
  border: 40px;
  display: inline-block;
  padding: 15px 25px;
  margin-right: 20px;
  background-color: #ef8172;
  color: white;
  border-radius: 40px;
   &:hover {
    background-color: #ff4c68;
    
  }

`;

const HomeIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: #ff4c68;
  cursor: pointer;
  transition: color 0.3s ease;
  margin-left: 1200px;
  &:hover {
    color: #fff;
  }
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #ef8172;
  position: relative;
`;
export default MyDogs;
