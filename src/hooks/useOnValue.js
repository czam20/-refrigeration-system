import { useState, useEffect } from "react";
import { limitToLast, onValue, ref, query } from "@firebase/database";
import {db} from "../firebase.config"

const QUANTITY = 100;
export const useOnValue = (path) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const unsubscribe = onValue(
      query(ref(db, path), limitToLast(QUANTITY)),
      (snapshot) => {
        const data = snapshot.val();

        if (data.status === "over") {
          unsubscribe();
        } else {
          const auxArray = [];

          snapshot.forEach((child) => {
            const data = child.val();
            auxArray.push(data);
          });

          setState(auxArray);
        }
      }
    );

    return () => unsubscribe();
  }, []);

  return state;
};
