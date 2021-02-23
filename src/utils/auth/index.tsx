// import { useState, useEffect } from "react";
//
// // Okta gives no type definitions for its library, hence any types
// export const useAuth = (auth: Record<string, unknown>) => {
//   const [authenticated, setAuthenticated] = useState<boolean | null>(null);
//   const [user, setUser] = useState<Record<string, unknown>>({});
//
//   useEffect(() => {
//     auth.isAuthenticated().then((isAuthenticated: boolean | null) => {
//       if (isAuthenticated !== authenticated) {
//         setAuthenticated(isAuthenticated);
//       }
//     });
//   });
//
//   useEffect(() => {
//     if (authenticated) {
//       // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//       auth.getUser().then(setUser);
//       console.log(auth);
//       // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//       auth.getUser().then((user: any) => console.log(user));
//       // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//       auth.getAccessToken().then((token: any) => console.log(token));
//     } else {
//       setUser(null);
//     }
//   }, [authenticated]);
//
//   return { authenticated, user };
// };
// TODO: delete
export default null;
