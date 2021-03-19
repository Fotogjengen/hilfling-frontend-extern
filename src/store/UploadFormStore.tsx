import React, { createContext, Provider, useContext } from "react";

interface Store {
  motive: string;
}

const StoreContext = createContext<Store>({});

export const useUploadFormStore = (): Store => useContext(StoreContext);

export const UploadFormProvider: Provider<Store> = ({ children }) => {
  return <StoreContext.Provider value={{}}>{children}</StoreContext.Provider>;
};
