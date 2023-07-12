import React, { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const { user:authUser } = useAuth0();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
      
  useEffect(() => {
    if (authUser) {
      // fetch POST request for login or signup
      fetch("/api/login-or-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(authUser),
      })
        .then((response) => response.json())
        .then((data) => {
          // Update the profile state with the response data
          setProfile(data.profile);
            console.log(user, profile);
        })
        
        .catch((error) => {
          console.error("Error logging in or signing up:", error);
        });
    }
  }, [authUser]);

  return (
    <UserContext.Provider value={{ user, setUser, profile, setProfile }}>
      {children}
    </UserContext.Provider>
  );
};
