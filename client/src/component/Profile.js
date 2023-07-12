import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

//profile component
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();// sign user via Auth0

  return (
    <Container>
      {isAuthenticated && (
        <article>
          {user?.picture && <img src={user.picture} alt={user?.name} />}
        </article>
      )}
    </Container>
  );
};

const Container = styled.div`
  color: #fff;
  padding: 2rem;
  img{
    width:2px;
    height: 2px;
    border-radius:100px;
  }
  h2{
    font-size:.5rem;
  }
`;

 


export default Profile;
