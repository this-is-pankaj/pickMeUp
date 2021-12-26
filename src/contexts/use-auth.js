import { createContext, useContext, useState } from "react";
import { getUser, removeUser, saveUser } from "../utils/helpers";
import { handleReq } from "../utils/requests";

const authContext = createContext();

const useProvideAuth = () => {
  // Check if a user is already logged in.
  // If so, set the values correctly
  const saveduser = getUser();
  const [user, setUser] = useState(saveduser || {});
  
  const signin = async (reqDetails) => {
    try {
      const user = await handleReq(reqDetails);
      setUser(user);
      // Also set the local values
      saveUser(user);
      return;
    } catch(exc) {
      setUser({});
      throw exc;
    }    
  };

  const signout = () => {
    setUser({});
    removeUser();
    return;
  };

  return {
    user,
    signin,
    signout
  };
}

export function ProvideAuth({children}) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};
