import React from "react";
import { useState, useContext } from "react";
import firebase from "firebase/auth";

interface IAuthContext {
  user: firebase.User | null;
  updateUser: (u: firebase.User | null) => void;
}

const AuthContext = React.createContext<IAuthContext | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  const updateUser = (u: firebase.User | null) => {
    setUser(u);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
