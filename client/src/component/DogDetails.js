import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const DogDetails = () => {
  const { dogId } = useParams();
  const [dog, setDog] = useState(null);
  const { profile, setProfile } = useContext(UserContext);
  const [updating, setUpdating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDog = async () => {
      try {
        const response = await axios.get(`/api/dogs/${dogId}`);
        if (response.status === 200) {
          setDog(response.data.data);
        } else {
          console.error("Failed to fetch dog");
        }
      } catch (error) {
        console.error("Error fetching dog:", error);
      }
    };

    fetchDog();
  }, [dogId]);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `/api/my-dogs/${dogId}/${profile._id}`
      );
      if (response.status === 200) {
        const newProfile = { ...profile };
        newProfile.dogs = newProfile.dogs.filter((dog) => dog !== dogId);
        setProfile(newProfile);
        console.log("Dog deleted");
        navigate("/my-dogs");
      } else {
        console.error("Failed to delete dog");
      }
    } catch (error) {
      console.error("Error deleting dog:", error);
    }
  };

  const handleSave = async () => {
    try {
      // Perform updates to the dog data here

      // Example code to update the dog's name
      const updatedDog = { ...dog, name: "Updated Name" };

      const response = await axios.put(`/api/dogs/${dogId}`, dog);
      if (response.status === 200) {
        const newProfile = { ...profile };
        newProfile.dogs = newProfile.dogs.map((dog) => {
          if (dog._id === dogId) {
            return updatedDog;
          }
          return dog;
        });
        setProfile(newProfile);

        setUpdating(false);
        console.log("Dog updated");
      } else {
        console.error("Failed to update dog");
      }
    } catch (error) {
      console.error("Error updating dog:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDog((prevDog) => ({ ...prevDog, [name]: value }));
  };


  if (!dog) {
    return <div>Loading...</div>;
  }
 const handleClick = () => {
   navigate("/");
   window.scrollTo({ top: 0, behavior: "smooth" });
 };
 return (
   <DetailContainer>
     <LogoContainer>
    
       <HomeIcon icon={faHome} onClick={handleClick} />
     </LogoContainer>
     <DetailBox>
       {updating ? (
         <div>
           <label>Name:</label>
           <input
             type="text"
             name="name"
             value={dog.name}
             onChange={handleInputChange}
           />

           <label>Breed:</label>

           <input
             type="text"
             name="breed"
             value={dog.breed}
             onChange={handleInputChange}
           />
           <label>Bio:</label>
           <textarea
             name="bio"
             value={dog.bio}
             onChange={handleInputChange}
           ></textarea>
           <ButtonContainer>
             <ActionButton onClick={handleSave}>
               <EditIcon icon={faEdit} />
               Save
             </ActionButton>
           </ButtonContainer>
         </div>
       ) : (
         <div>
           <DetailHeading>My Dog Profile:</DetailHeading>
           <DetailItem>Name: {dog.name}</DetailItem>
           <DetailItem>Breed: {dog.breed}</DetailItem>
           <DetailItem>Bio: {dog.bio}</DetailItem>
           {/* Render additional dog information */}
           <ButtonContainer>
             <ActionButton onClick={() => setUpdating(true)}>
               <EditIcon icon={faEdit} />
               Update Dog
             </ActionButton>
             <ActionButton onClick={handleDelete}>
               <TrashIcon icon={faTrash} />
               Delete Dog
             </ActionButton>
           </ButtonContainer>
         </div>
       )}
     </DetailBox>
   </DetailContainer>
 );
};


//style

const TrashIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

const EditIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;



const ActionButton = styled.button`
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
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const DetailItem = styled.p`
  font-size: 1rem;
  color: white;
  margin-bottom: 1rem;
`;



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
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #ef8172;
  position: relative;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;



const HomeIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: #ff4c68;
  cursor: pointer;
  transition: color 0.3s ease;
margin-left:1200px;
  &:hover {
    color: #fff;
  }
`;
export default DogDetails;
