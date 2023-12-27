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

  //makes user if logged in user has access to do so
  // const createUser = async () => {
  //   const apiUrl = "https://graph.microsoft.com/v1.0/users";
  //   const newUser = {
  //     accountEnabled: true,
  //     displayName: "John Doe2",
  //     mailNickname: "john.doe2",
  //     userPrincipalName: "john.doe2@fgsamfundet.onmicrosoft.com",
  //     passwordProfile: {
  //       forceChangePasswordNextSignIn: true,
  //       password: "A_Strong_Password123",
  //     },
  //   };

  //   try {
  //     const activeAccount = instance.getActiveAccount();

  //     if (!activeAccount) {
  //       console.error("No active account. Please log in.");
  //       return;
  //     }

  //     const accessToken = await instance
  //       .acquireTokenSilent({
  //         account: activeAccount,
  //         scopes: ["User.Read"],
  //       })
  //       .catch((error) => {
  //         console.error("Error acquiring token silently:", error.message);
  //         throw error;
  //       });

  //     if (accessToken) {
  //       const response = await fetch(apiUrl, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${accessToken.accessToken}`,
  //         },
  //         body: JSON.stringify(newUser),
  //       });

  //       if (response.ok) {
  //         console.log("User created successfully");
  //       } else {
  //         console.error("Error creating user:", await response.text());
  //       }
  //     }
  //   } catch (error: any) {
  //     console.error("Error:", error.message);
  //   }
  // };

  //get function call for user profile currently logged in
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