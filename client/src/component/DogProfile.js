import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

//DogPrfile
const DogProfile = () => {
  const { user } = useAuth0();
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [bio, setBio] = useState("");
  const [picture, setPicture] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
  const [dogs, setDogs] = useState([]);
  const { profile, setProfile } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        // fetch Get request for Dogs
        const response = await axios.get("/api/dogs");
        if (response.status === 200) {
          setDogs(response.data.data);
        } else {
          console.error("Failed to fetch dogs");
        }
      } catch (error) {
        console.error("Error fetching dogs:", error);
      }
    };

    fetchDogs();
  }, []);

  useEffect(() => {
    if (user) {
   
      // fetch POST request for login or signup
      fetch("/api/login-or-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {

          // Update the profile state with the response data
          setProfile(data.profile);
        })
        .catch((error) => {
          console.error("Error logging in or signing up:", error);
        });
    }
  }, [user, setProfile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked");

    try {
      // Create the dog profile object
      const dogProfileData = {
        name,
        breed,
        bio,
        picture: picture || imageUrl,
        userId: profile._id, // Pass the user ID obtained from Auth0
      };

      // Make a POST request to the endpoint
      const response = await axios.post("/api/dog-profile", dogProfileData);

   
      if (response.status === 201 && response.data.status === 201) {
        // Dog profile created successfully
        console.log("Dog profile created");
        // Update the frontend profile to include the new dog's ID

        if (profile != null) {
          const updatedProfile = { ...profile };
          updatedProfile.dogs.push(response.data._id);
          setProfile(updatedProfile);

          // Navigate to the MyDog page

          navigate("/my-dogs");
        } else {
          console.log(" profile null");
        }

        // actions after successful dog profile creation
      } else {
        // Handle error 
        console.error("Failed to create dog profile");
      }
    } catch (error) {
      // display error message
      console.error(error);
    }

    // Clear the form fields after submission
    setName("");
    setBreed("");
    setBio("");
    setPicture(null);
    setImageUrl("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result;
        setPicture(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <DogProfileContainer>
      <DogProfileHeading>Create Dog Profile</DogProfileHeading>
      <DogProfileForm onSubmit={handleSubmit}>
        <DogProfileInput
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <DogProfileInput
          type="text"
          placeholder="Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        <DogProfileInput
          type="text"
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <DogProfileFileInput
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        {picture && <DogProfileImage src={picture} alt="Dog Profile" />}
        <DogProfileInput
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <DogProfileButton type="submit">Create Profile</DogProfileButton>
      </DogProfileForm>
      
      <div>
        {dogs.map((dog) => (
          <div key={dog._id}>
            <h3>{dog.name}</h3>
            <p>Breed: {dog.breed}</p>
            <p>Bio: {dog.bio}</p>
            <p>Picture: {dog.picture}</p>
          </div>
        ))}
      </div>
    </DogProfileContainer>
  );
};

const DogProfileContainer = styled.div`
  background-color: #ef8172;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const DogProfileInput = styled.input`
  width: 100%;
  max-width: 300px;
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
`;

const DogProfileHeading = styled.h2`
  font-size: 2rem;
  line-height: 1.5;
  color: #fff;
  margin-bottom: 1rem;
`;

const DogProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;
const DogProfileImage = styled.img`
  max-width: 300px;
  margin-bottom: 10px;
`;
const DogProfileFileInput = styled.input`
  margin-bottom: 10px;
`;
const DogProfileButton = styled.button`
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
export default DogProfile;


