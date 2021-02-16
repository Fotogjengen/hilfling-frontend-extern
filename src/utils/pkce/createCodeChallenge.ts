import { CodeChallengeMethod, PLAIN, S256 } from "./CodeChallengeMethod";

/*
 * @param method, which code challenge method to use
 * @param codeVerifier, codeVerifier string
 *
 * @return hashed string from the codeVerfier, based on which code challenge method is used
 * */
export default (method: CodeChallengeMethod, codeVerifier: string) => {
  switch (method) {
    case CodeChallengeMethod.S256:
      return S256(codeVerifier);
    case CodeChallengeMethod.PLAIN:
      return PLAIN(codeVerifier);
  }
};
