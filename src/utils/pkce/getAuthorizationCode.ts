/*
 * Gets authorization code from window.location
 * */
export default () => {
  const params = window.location.search.split("?");
  if (params.length < 2) {
    // No params exist in location
    return null;
  }

  const pairs = params[1].split("&");
  for (const pair of pairs) {
    const [key, value] = pair.split("=");
    if (key == "code") {
      return decodeURIComponent(value || "");
    }
  }
  return null;
};
