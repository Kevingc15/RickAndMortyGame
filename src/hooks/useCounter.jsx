import { useState } from "react";

export const useCounter = (value = 0) => {
  const [counter, setCounter] = useState(value);

  const sum = () => setCounter((prev) => prev + 1);
  const rest = () => setCounter((prev) => prev - 1);
  const reset = () => setCounter(value);

  return {
    counter,
    sum,
    rest,
    reset,
  };
};
