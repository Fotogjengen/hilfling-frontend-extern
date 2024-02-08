import React, { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import styles from "./ArchiveBossCreateUser.module.css"
import { Link } from "react-router-dom";



const ArchiveBossCreateUser = () => {
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");


  const { instance, accounts } = useMsal();

  const createUser = async () => {
    console.log("JAJAJA");
    console.log("Display Name:", displayName);

    const apiUrl = "https://graph.microsoft.com/v1.0/users";
    const newUser = {
      accountEnabled: true,
      displayName: displayName,
      mailNickname: `${displayName.replaceAll(" ", ".")}`,
      userPrincipalName:`${displayName.replaceAll(" ", ".")}@fgsamfundet.onmicrosoft.com` ,
      passwordProfile: {
        forceChangePasswordNextSignIn: true,
        password: password, 
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

  const handleButtonClick = () => {

    

    createUser()
      .then(() => {
        // Handle completion if needed
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <div className={styles.container}>
    <FormControl className={styles.form}>
      <FormLabel>Display Name:</FormLabel>
      <TextField
        className={styles.input}
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />


        <FormLabel>User password:</FormLabel>
        <TextField
        className={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

      <Button onClick={handleButtonClick} type="button" variant="outlined">
        Submit
      </Button>

      <Link to="/intern/arkivsjef"><div className={styles.backButton}>Tilbake til arkivsjef</div></Link>
      
    </FormControl>

    

    </div>
  );
};

export default ArchiveBossCreateUser;
  function useErrorBoundary(): { didCatch: any; error: any; errorInfo: any; } {
    throw new Error("Function not implemented.");
  }

