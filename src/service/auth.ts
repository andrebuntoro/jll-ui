import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";

import axios from "axios";
import { auth } from "../firebaseInit";

const createAccount = (email: string, password: string): Promise<void> => {
  const data = {
    email: email,
    password: password,
  };
  return axios.post("jll-backend/user", data);
};

const grantUserRole = async (email: string): Promise<void> => {
  const token = await auth.currentUser?.getIdToken();
  const data = {
    email: email,
  };

  return axios.post("jll-backend/user/role", data, {
    headers: { authorization: `Bearer ${token}` },
  });
};

const signIn = (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

const signOut = (): Promise<void> => {
  return auth.signOut();
};

export { createAccount, signIn, signOut, grantUserRole };
