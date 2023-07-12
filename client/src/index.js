import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { UserProvider } from "./component/UserContext";

ReactDOM.render(
  <Auth0Provider
    domain= "dev-mzbqbq3fnnlvwapi.us.auth0.com"
    clientId="eYtpeoqhhB3WAK6Xz0bmFoIujPtnDJIN"
    redirectUri={window.location.origin}
  >
    <UserProvider>
      <App />
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);

