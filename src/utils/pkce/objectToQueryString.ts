/*
 * @param object, any object
 * @return a string on the format of a URL query string
 * */

export default (object: Record<string, any>) => {
  return Object.getOwnPropertyNames(object)
    .map(prop => `${prop}=${encodeURIComponent(object[prop])}`)
    .join("&");
};
