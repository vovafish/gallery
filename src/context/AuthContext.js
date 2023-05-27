import { createContext, useContext, useMemo, useState } from 'react';
import FirebaseAuth from '../handlers/auth';

const { signIn, signOut, getCurrentUser } = FirebaseAuth;
const Context = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = () => signIn().then(setCurrentUser);
  const logout = () => signOut().then(() => setCurrentUser(null));
  const value = useMemo(() => {
    return {
      login,
      logout,
      currentUser,
    };
  }, [login, logout, currentUser]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAuthContext = () => {
  return useContext(Context);
};
export default AuthProvider;
