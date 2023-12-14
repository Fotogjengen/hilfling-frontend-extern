export const azureConfig = {
  auth: {
    //required from azure
    clientId: "ec54a889-767b-4c11-a3ae-4c55e0f5cdbc",
    //points to window.location.origin. You must register this URI on azure portal/azure registration
    redirectUri: "/",
    //Premissions for the api call
    scopes: ["user.read"],
    //replace the the placeholder with our tenant subdomain
    authority: "https://login.microsoftonline.com/fgsamfundet.onmicrosoft.com",
    // Indicated the page to navigate after logout.
    postLogoutRedirectUri: "/",
    // if "true", will navigate back to the original request location before processing the auth code response
    navigateToLoginRequestUrl: false,
  },
  cache: {
    //configures cache location. "sessionStorage" is more secure, but "localStorage" gives SSO between tabs.
    cacheLocation: "sessionStorage",
    //set this to true if problem with IE11 or Edge
    storeAuthStateInCookie: false,
  },
};

//scopes are access levels set in API-permissions in azure
export const loginRequest = {
  scopes: ["user.read"],
};
