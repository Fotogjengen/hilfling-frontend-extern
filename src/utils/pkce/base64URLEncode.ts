/*
 * @param str, string to encode to base64
 *
 * @return base64 URL encoded string
 * */
export default (str: string): string => {
  return btoa(str)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
};
