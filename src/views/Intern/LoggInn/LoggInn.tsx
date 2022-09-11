import React, { FC, useEffect, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";

const LoggInn: FC = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  if (isAuthenticated) {
    logout({ returnTo: window.location.origin });
  } else {
    loginWithRedirect()
      .catch((err) => console.log(err))
      .then(() => console.log("wow"))
      .catch(() => console.log("oblig"));
  }

  return <> </>;
};

export default LoggInn;
