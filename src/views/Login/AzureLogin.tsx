import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { loginRequest } from "../../azureconfig";

interface UserProfile {
  displayName: string;
  // Add more user profile properties as needed
}

const AzureLogin: React.FC = () => {
  const { instance, accounts } = useMsal();
  const activateAccount = instance.getActiveAccount();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const handleRedirect = async (): Promise<void> => {
    try {
      await instance.loginPopup({
        ...loginRequest,
        prompt: "create",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async (): Promise<void> => {
    try {
      await instance.logoutRedirect({});
    } catch (error) {
      console.log(error);
    }
  };


  //get function call for user profile currently logged in
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (activateAccount) {
        try {
          // Ensure MSAL is initialized
          await instance.initialize();
          const accessToken = await instance
            .acquireTokenSilent({
              account: accounts[0],
              scopes: ["User.Read"],
            })
            .catch((error:any) => {
              console.log("Error acquiring token silently:", error.message);
            });

          if (accessToken) {
            await callGraphApi(accessToken.accessToken);
          }
        } catch (error: any) {
          console.log("Error fetching user profile:", error.message);
        }
      }
    };

    fetchUserProfile().catch((error) => {
      console.error("Error fetching user profile:", error.message);
      throw error;
    });
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

  //Wrappers are here to fix linting error
  const handleRedirectWrapper = (): void => {
    handleRedirect().catch((error) => console.log(error));
  };

  const handleLogoutWrapper = (): void => {
    handleLogout().catch((error) => console.log(error));
  };

  return (
    <div>
      {/* This is shown when the user is not authenticated */}
      <UnauthenticatedTemplate>
        <Button variant="outlined" onClick={handleRedirectWrapper}>
          Logg inn
        </Button>
        {/* <Button onClick={createUser}>Create User</Button> */}
      </UnauthenticatedTemplate>
      {/* This is shown when the user is authenticated */}
      <AuthenticatedTemplate>
        {activateAccount ? (
          <div>
            {userProfile ? (
              <div>
                <Button variant="outlined" onClick={handleLogoutWrapper}>
                  Logg ut
                </Button>
                {/* <Button onClick={createUser}>Create User</Button> */}
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

export default AzureLogin;