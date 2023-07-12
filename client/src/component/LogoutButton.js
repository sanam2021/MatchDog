import React,{useContext} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { UserContext } from "./UserContext";


// LogoutButton component
const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0(); // Access the logout function and isAuthenticated status from the useAuth0 hook
  const { setUser, setProfile } = useContext(UserContext); // Access the setUser and setProfile functions from the UserContext

  return (
    isAuthenticated && (  // Render the following content if the user is authenticated
      <Button
        onClick={() => {
          logout();
          //call...
          setUser(null);
          setProfile(null);
        }}
      >
        Sign Out
      </Button>
    )
  );
};

// Button styled component
const Button = styled.button`
  display: inline-block;
  padding: 5px 10px;
  font-size: 1rem;
  background-color: #fff;
  color: #ef8172;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4c68;
    color: #fff;
  }
`;


export default LogoutButton;


