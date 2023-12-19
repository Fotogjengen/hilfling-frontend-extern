import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";

interface UserProfile {
  displayName: string;
  // Add more user profile properties as needed
}

const Login: React.FC = () => {
  const { instance, accounts } = useMsal();
  const activateAccount = instance.getActiveAccount();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const handleRedirect = async () => {
    try {
      await instance.loginPopup({
        ...loginRequest,
        prompt: "create",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await instance.logoutRedirect({});
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async () => {
    const apiUrl = "https://graph.microsoft.com/v1.0/users";
    const newUser = {
      accountEnabled: true,
      displayName: "John Doe",
      mailNickname: "john.doe",
      userPrincipalName: "john.doe@fgsamfundet.onmicrosoft.com",
      passwordProfile: {
        forceChangePasswordNextSignIn: true,
        password: "A_Strong_Password123",
      },
    };

    try {
      const activeAccount = instance.getActiveAccount();

      if (!activeAccount) {
        console.error("No active account. Please log in.");
        return;
      }

      const accessToken = await instance
        .acquireTokenSilent({
          account: activeAccount,
          scopes: ["User.Read"],
        })
        .catch((error) => {
          console.error("Error acquiring token silently:", error.message);
          throw error;
        });

      if (accessToken) {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken.accessToken}`,
          },
          body: JSON.stringify(newUser),
        });

        if (response.ok) {
          console.log("User created successfully");
        } else {
          console.error("Error creating user:", await response.text());
        }
      }
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (activateAccount) {
        try {
          const accessToken = await instance
            .acquireTokenSilent({
              account: accounts[0],
              scopes: ["User.Read"],
            })
            .catch((error) => {
              console.error("Error acquiring token silently:", error.message);
              throw error;
            });

          if (accessToken) {
            await callGraphApi(accessToken.accessToken);
          }
        } catch (error: any) {
          console.error("Error fetching user profile:", error.message);
        }
      }
    };

    fetchUserProfile();
  }, [activateAccount, accounts, instance]);

  const callGraphApi = async (accessToken: string) => {
    const apiUrl = "https://graph.microsoft.com/v1.0/me";

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const data: UserProfile = await response.json();
        setUserProfile(data);
      } else {
        console.error("Error calling Graph API:", await response.text());
      }
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      {/* This is shown when the user is not authenticated */}
      <UnauthenticatedTemplate>
        <Button variant="outlined" onClick={handleRedirect}>
          Login
        </Button>
        <Button onClick={createUser}>Create User</Button>
      </UnauthenticatedTemplate>
      {/* This is shown when the user is authenticated */}
      <AuthenticatedTemplate>
        {activateAccount ? (
          <div>
            <h1>Suksess!</h1>
            {userProfile ? (
              <div>
                <p>Welcome, {userProfile.displayName}</p>
                <Button onClick={handleLogout}>Logg ut</Button>
                <Button onClick={createUser}>Create User</Button>
              </div>
            ) : (
              <p>Loading user profile...</p>
            )}
          </div>
        ) : (
          <h1>Error</h1>
        )}
      </AuthenticatedTemplate>
    </div>
  );
};

export default Login;

const loginRequest = {
  scopes: ["User.Read"],
};
