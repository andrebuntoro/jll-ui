import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebaseInit";

const createAccount = (email: string, password: string): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      resolve("");
    } catch (e) {
      reject((e as Error).message);
    }
  });
};

const signIn = (email: string, password: string): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      resolve("");
    } catch (e) {
      reject((e as Error).message);
    }
  });
};

const signOut = (): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    try {
      await auth.signOut();
      resolve("");
    } catch (e) {
      reject((e as Error).message);
    }
  });
};

export { createAccount, signIn, signOut };
