import axios from "axios";
import { auth } from "../firebaseInit";

const getRandomCats = async (): Promise<any> => {
  const token = await auth.currentUser?.getIdToken();
  return axios
    .get("jll-backend/cat", {
      headers: { authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);
};

const getCatBreeds = async (): Promise<any> => {
  const token = await auth.currentUser?.getIdToken();
  return axios
    .get("jll-backend/cat/breeds", {
      headers: { authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);
};

const getCatByBreed = async (breedId: string): Promise<any> => {
  const token = await auth.currentUser?.getIdToken();
  return axios
    .get(`jll-backend/cat/action/search?breed_id=${breedId}`, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);
};

export { getRandomCats, getCatBreeds, getCatByBreed };
