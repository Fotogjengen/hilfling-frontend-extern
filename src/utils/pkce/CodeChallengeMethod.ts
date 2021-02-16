import crypto from "crypto";

export const S256 = (codeVerifier: string): string => {
  /*
   * @param codeVerifier
   *
   * @return codeVerifier hashed with sha256, in base64 format
   * */
  return crypto
    .createHash("sha256")
    .update(codeVerifier)
    .digest("base64");
};

export const PLAIN = (codeVerifier: string): string => {
  /*
   * @param codeVerifier
   * @return unhashed codeVerifier (less secure than S256)
   * */
  return codeVerifier;
};

export enum CodeChallengeMethod {
  /*
   * Enum with all the available Code Challenge Methods
   * */
  S256,
  PLAIN
}
