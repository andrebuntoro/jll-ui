import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxYsf6BLwgWx1VW901trIDBvi0KRkDuHU",
  projectId: "jll-service",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
