import { Button } from "@mui/material";
import { loginRequest } from "../../azureconfig";
import React from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";

const Login = () => {
  const { instance } = useMsal();
  const activateAccount = instance.getActiveAccount();

  const handleRedirect = () => {
    instance
      .loginPopup({
        ...loginRequest,
        prompt: "create",
      })
      .catch((error) => console.log(error));
  };

  const handleLogout = () => {
    instance.logoutRedirect({}).catch((error) => console.log(error));
  };
  return (
    <div>
      {/* This is shown when user is not authenticated */}
      <UnauthenticatedTemplate>
        <Button variant="outlined" onClick={handleRedirect}>
          login
        </Button>

        <Button>Opprett bruker</Button>
      </UnauthenticatedTemplate>
      {/* This is shown when user is authenticated */}
      <AuthenticatedTemplate>
        {activateAccount ? (
          <div>
            <h1>Suksess!</h1> <Button onClick={handleLogout}>Logg ut</Button>{" "}
          </div>
        ) : (
          <h1>Error</h1>
        )}
      </AuthenticatedTemplate>
    </div>
  );
};

export default Login;
