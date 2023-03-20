import { useEffect, useState } from "react";
import { getUsers } from "../utils/firebaseDb";

export const useUsers = (initialValue = []) => {
  const [users, setUsers] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const gUsers = async () => {
    setLoading(true);
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    gUsers();
  }, []);

  return { users, loading, error };
};
