import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";

import { auth } from "../firebaseInit";

const createAccount = (
  email: string,
  password: string
): Promise<UserCredential> => {
  return new Promise(async (resolve, reject) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      resolve(userCredentials);
    } catch (e) {
      reject((e as Error).message);
    }
  });
};

const signIn = (email: string, password: string): Promise<UserCredential> => {
  return new Promise(async (resolve, reject) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      resolve(userCredentials);
    } catch (e) {
      reject((e as Error).message);
    }
  });
};

const signOut = (): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      await auth.signOut();
      resolve();
    } catch (e) {
      reject((e as Error).message);
    }
  });
};

export { createAccount, signIn, signOut };
