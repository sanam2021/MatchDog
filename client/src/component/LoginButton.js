import React, { useContext } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";


// LoginButton component
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const location = useLocation();
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext); // Access the setUser value from the UserContext

  const handleLogin = () => {
    loginWithRedirect({
      appState: { returnTo: location.pathname },
    });
  };

  const handleAuthentication = () => {
    // Perform any necessary actions after successful authentication
    const { state } = location;
    const returnTo = state && state.returnTo ? state.returnTo : "/match";
    navigate(returnTo);

    // Update the user value in the UserContext
    setUser(user);
  };

  return (
    <LoginButtonContainer>
      {!isAuthenticated && <Button onClick={handleLogin}>Sign In</Button>}
      {isAuthenticated && (
        <>
          {user.picture && <UserImage src={user.picture} alt={user.name} />}
          <p>Welcome, {user.name}!</p>
          <Button onClick={handleAuthentication}>Continue</Button>
        </>
      )}
    </LoginButtonContainer>
  );
};
//style
const LoginButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
p{
  color:#fff;
}
`;
const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

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
export default LoginButton;
