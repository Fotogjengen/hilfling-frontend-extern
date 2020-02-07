import { useState, useEffect } from "react";

// Okta gives no type definitions for its library, hence any types
export const useAuth = (auth: any) => {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    auth.isAuthenticated().then((isAuthenticated: boolean | null) => {
      if (isAuthenticated !== authenticated) {
        setAuthenticated(isAuthenticated);
      }
    });
  });

  useEffect(() => {
    if (authenticated) {
      auth.getUser().then(setUser);
      console.log(auth);
      auth.getUser().then((user: any) => console.log(user));
      auth.getAccessToken().then((token: any) => console.log(token));
    } else {
      setUser(null);
    }
  }, [authenticated]);

  return { authenticated, user };
};
