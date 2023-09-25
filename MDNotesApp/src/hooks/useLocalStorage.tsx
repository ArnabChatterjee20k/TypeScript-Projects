import { useEffect, useState } from "react";

// the initial value is either of Type T or a function returning a type T
export default function useLocalStorage<T>(
  key: string,
  initial: T | (() => T)
) {
  const [value, setValue] = useState<T>(() => {
    const jsonVal = localStorage.getItem(key);
    if (jsonVal === null) {
      if (typeof initial === "function") {
        return (initial as () => T)();
      } else return initial;
    } else {
      return JSON.parse(jsonVal);
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [T, typeof setValue];
}
