import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MyDog = ({ dogId }) => {
  const [dog, setDog] = useState(null);

  useEffect(() => {
    const fetchDog = async () => {
      try {
        const response = await axios.get(`/api/dogs/${dogId}`);
        if (response.status === 200) {
          setDog(response.data);
        } else {
          console.error("Failed to fetch dog");
        }
      } catch (error) {
        console.error("Error fetching dog:", error);
      }
    };
    

    fetchDog();
  }, [dogId]);

  if (!dog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Dog ID: {dog._id}</h3>6s
      <p>Name: {dog.name}</p>
      <p>Breed: {dog.breed}</p>
      <p>Bio: {dog.bio}</p>
      <Link to={`/my-dogs/${dog._id}`}>View Details</Link>
    </div>
  );
};

export default MyDog;
