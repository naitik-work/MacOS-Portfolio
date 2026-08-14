import { createContext, useState } from "react";

export const CreateWindowContext = createContext(null);

let WindowContextProvider = ({ children }) => {
  let [windowState, setWindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  return (
    <CreateWindowContext.Provider
      value={{
        windowState,
        setWindowState,
      }}
    >
      {children}
    </CreateWindowContext.Provider>
  );
};

export default WindowContextProvider;
