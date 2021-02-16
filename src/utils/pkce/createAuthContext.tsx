import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState
} from "react";
import authorize from "./authorize";
import { CodeChallengeMethod } from "./CodeChallengeMethod";
import getAuthorizationCode from "./getAuthorizationCode";

type Token = string | null;

interface Props {
  clientId: string;
  scopes: string[];
  provider: string;
  tokenEndpoint: string;
  authorizationEndpoint: string;
  storage: Storage;
  codeChallengeMethod: CodeChallengeMethod;
  redirectUri: string;
  responseType: string;
}

interface Context {
  token: Token;
}

const defaultContext: Context = {
  token: null
};

export default ({
  clientId,
  provider,
  scopes,
  storage,
  tokenEndpoint,
  authorizationEndpoint,
  codeChallengeMethod,
  responseType,
  redirectUri
}: Props) => {
  const context = createContext(defaultContext);
  const { Provider } = context;

  const useToken = () => {
    const { token } = useContext(context);
    if (!token) {
      console.warn(
        "Can only use useToken() inside an <Authenticated/> component."
      );
    }
    return token;
  };

  return {
    AuthContext: ({ children }: any) => {
      const [token, setToken] = useState<Token>(null);

      const ensureAuthenticated = () => {
        const code = getAuthorizationCode();
        if (!token && !code) {
          authorize({
            provider,
            clientId,
            scopes,
            authorizationEndpoint,
            codeChallengeMethod,
            redirectUri,
            responseType
          });
        }
      };
      return <Provider value={{ token }}>{children}</Provider>;
    },
    useToken
  };
};
