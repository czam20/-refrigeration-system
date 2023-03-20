import { child, get, limitToLast, query, ref } from "firebase/database";
import { db } from "../firebase.config";

export const getUsers = async () => {
  try {
    const snapshot = await get(child(ref(db), "Usuarios"));
    return snapshot.exists() ? Object.values(snapshot.val()) : [];
  } catch (error) {
    throw new Error(error);
  }
};

