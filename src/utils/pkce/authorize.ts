import { CodeChallengeMethod } from "./CodeChallengeMethod";
import base64URLEncode from "./base64URLEncode";
import createCodeVerifier from "./createCodeVerifier";
import createCodeChallenge from "./createCodeChallenge";
import objectToQueryString from "./objectToQueryString";

/*
 ***** This file contains:*****
 *
 * @interface Props, args needed to create the query string
 * @interface Query, variables needed when we send the query string
 *
 * @export default, authorize method redirects to the given authorization endpoint
 *  located on the authorization provider
 * */

interface Props {
  responseType: string;
  clientId: string;
  redirectUri: string;
  codeChallengeMethod: CodeChallengeMethod;
  scopes: string[];
  provider: string;
  authorizationEndpoint: string;
}

interface Query {
  response_type: string;
  client_id: string;
  redirect_uri: string;
  code_challenge_method: CodeChallengeMethod;
  code_challenge: string;
  scope: string;
}

export default ({
  authorizationEndpoint,
  clientId,
  codeChallengeMethod,
  provider,
  redirectUri,
  responseType,
  scopes
}: Props) => {
  /*
   * @param scopes, what kind of permissions are we asking for
   *   example: read, write, etc.
   * @param provider, auth provider uri
   *    example: http://www.auth.fotogjengen.no/
   * @param authorizeEndpoint, where on the auth provider the authorize endpoint is
   *    example: oauth/authorize/
   * @param response_type, OAuth2 response type
   *   example: code (for authorization code flow)
   * @param client_id, id of a valid client, found in auth server
   *   example: our photo api backend
   * @param redirect_uri, which uri should the auth server redirect back to
   *    example: http://localhost:3000/ for dev purposes
   * @param code_challenge_method, which hashing algorithm should be used for the code challenge
   * */

  // Create verifier and encode it to base64
  const encodedVerifier = base64URLEncode(createCodeVerifier());

  // TODO: save encodedVerifier in storage

  // create code challenge from code_challenge_method and the encoded verifier
  const codeChallenge = createCodeChallenge(
    codeChallengeMethod,
    encodedVerifier
  );

  // Create query object
  const query: Query = {
    response_type: responseType,
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: scopes.join(" "),
    code_challenge_method: codeChallengeMethod,
    code_challenge: codeChallenge
  };

  // Parse query object as well as the provider/endpoint to create authorize url
  const url = `${provider}/${authorizationEndpoint}?${objectToQueryString(query)}`;
  // Redirect to authorize url
  window.location.replace(url);
};
