import { useEffect, useState } from "react";

export const useCountdown = (initialValue, durationInSeconds) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (initialValue <= 0) return;

    const intervalTime = (durationInSeconds * 1000) / initialValue;

    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [initialValue, durationInSeconds]);

  return value;
};
