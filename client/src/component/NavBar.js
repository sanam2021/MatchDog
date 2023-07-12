import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faComments } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { UserContext } from "./UserContext";

//Navbar 
const NavBar = ({handleMatchClick}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoading, error } = useAuth0(); // Retrieve isLoading and error variables from useAuth0 hook
  const { profile } = useContext(UserContext);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle authentication loading state
  if (isLoading) {
    // Display a loading indicator while the authentication is in progress
    return <div>Loading...</div>;
  }

  if (error) {
    // Handle and display any authentication errors
    return <div>Error: {error.message}</div>;
  }

  return (
    <NavBarContainer>
      <BrandLink to="/">
        <LogoContainer>
          <MainLogoImage src="./images/logoname.png" alt="Main Logo" />
        </LogoContainer>
        Match Dog
      </BrandLink>

      <NavItem to="/match" onClick={handleMatchClick}>
        <DogPawIcon icon={faPaw} />
      </NavItem>
      <NavItem to="/chat">
        <ChatIcon icon={faComments} />
      </NavItem>
      {/* <NavItem>
        {profile && profile.dogs.length > 0 && (
          <MyDogsLink to="/my-dogs">My dogs</MyDogsLink>
        )}
      </NavItem> */}
      <NavLinksContainer isMenuOpen={isMenuOpen}>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/testimonialsSection">Testimonials</NavLink>
        <NavLink to="/">Download</NavLink>
      </NavLinksContainer>
      <NavbarContainer>
        <Profile />

        <LoginButton />
        <LogoutButton />
        {profile && profile.dogs.length > 0 && (
          <MyDogsLink to="/my-dogs">My dogs</MyDogsLink>
        )}
      </NavbarContainer>
      <HamburgerIcon onClick={toggleMenu}>
        <HamburgerBar />
        <HamburgerBar />
        <HamburgerBar />
      </HamburgerIcon>
    </NavBarContainer>
  );
};

//Style
const NavBarContainer = styled.nav`

  display: flex;
  background-color: #ff4c68;
  align-items: center;
  justify-content: space-between;
  /* padding-right: 150px; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(100% - 300px);
  max-width: 600px;
  padding-bottom: 5em;
`;

const BrandLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #ff4c68;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MainLogoImage = styled.img`
  width: 150px;
  height: 150px;
  
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
margin-left: 260px;
  a {
    margin: 0px 5px;
  }

  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    flex-direction: column;
    position: relative;
  
    padding: 2rem;
  }

  @media (min-width: 769px) {
    margin-right: 1rem;
  }
`;

const NavLink = styled(Link)`
  margin-top: 1rem;
  color: #fff;
  text-decoration: none;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  color: #fff;
  @media (max-width: 768px) {
    display: flex;
    align-self: flex-start;
    margin-right: 1rem;
 position:absolute ;
 top: 8px;  
 right: 8px;
  }
`;
const HamburgerBar = styled.div`
  width: 40px;
  height: 3px;
  background-color: #fff;

  @media (max-width: 768px) {
    background-color: #fff;
    margin: 4px 0px;

  }
`;

const DogPawIcon = styled(FontAwesomeIcon)`
 
  font-size: 2rem;
padding:20px;
  &:hover {
    color: #ef8172;
  }
`;
const ChatIcon = styled(FontAwesomeIcon)`

  font-size: 2rem;
  &:hover {
    color: #ef8172;
  }
`;
const NavItem = styled(Link)`
  display: inline-block;
  margin-right: 1rem;
  font-size: 1rem;
  color: white;
  text-decoration: none;
`;

const NavbarContainer = styled.nav`
  padding: 1rem;
  position: absolute;
  right: 1em;
`;

const MyDogsLink = styled(NavItem)`
  border: 2px solid #ef8172;
  border-radius: 40px;
  padding: 10px 20px;
  display: block;

  &:hover {
    background-color: #ef8172;
    color: white;
  }
`;


export default NavBar;
