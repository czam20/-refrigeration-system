import { child, get } from "firebase/database";
import { db } from "../firebase.config";

export const getUsers = async () => {
  try {
    const snapshot = await get(child(db, "Usuarios"));
    return snapshot.exists() ? snapshot.val() : "No data available";
  } catch (error) {
    throw new Error(error);
  }
};

export const getRefrigerador = async () => {
  try {
    const snapshot = await get(child(db, "Refrigerador"));
    return snapshot.exists() ? snapshot.val() : "No data available";
  } catch (error) {
    throw new Error(error);
  }
};
