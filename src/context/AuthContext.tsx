import React from "react";
import { useState, useContext, useEffect } from "react";
import firebase from "firebase/auth";
import { auth } from "../firebaseInit";

const AuthContext = React.createContext<firebase.User | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
