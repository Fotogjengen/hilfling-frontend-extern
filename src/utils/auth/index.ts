import createAuthContext from "../pkce/createAuthContext";
import { CodeChallengeMethod } from "../pkce/CodeChallengeMethod";

const clientId = "public";
const redirectUri = "http://localhost:3000/";
const provider = "http://localhost:9000/";
const tokenEndpoint = "oauth/token/";
const authorizationEndpoint = "oauth/authorize/";
const responseType = "code";
const scopes = ["read"];
const storage = localStorage;
const codeChallengeMethod = CodeChallengeMethod.S256;

const { useToken, AuthContext } = createAuthContext({
  redirectUri,
  responseType,
  codeChallengeMethod,
  storage,
  scopes,
  provider,
  clientId,
  authorizationEndpoint,
  tokenEndpoint
});

export { useToken, AuthContext };
