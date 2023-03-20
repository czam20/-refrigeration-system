import { useState, useEffect } from "react";
import { useOnValue } from "./useOnValue";

const QUANTITY = 100;
export const useGetDates = () => {
  const [dates, setDates] = useState([]);

  const day = useOnValue("Refrigerador/Dia");
  const hour = useOnValue("Refrigerador/Hora");
  const min = useOnValue("Refrigerador/Minutos");
  const month = useOnValue("Refrigerador/Mes");
  const year = useOnValue("Refrigerador/Ano");

  useEffect(() => {
    if (
      day.length > 0 &&
      hour.length > 0 &&
      min.length > 0 &&
      month.length > 0 &&
      year.length > 0
    ) {
      const auxDates = [];

      for (let index = 0; index < QUANTITY; index++) {
        auxDates.push(
          new Date(
            year[index],
            month[index] - 1,
            day[index],
            hour[index],
            min[index],
            0,
            0
          )
        );
      }
      setDates(auxDates);
    }
  }, [day, hour, min, month, year]);

  return dates;
};
