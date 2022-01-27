import { useCallback, useState } from 'react';

export const useLocalStorage = (key: string, initialValue = '' as string) => {
  const [state, setState] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      setState(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log('err', err);
    }
  }, [key]);

  return [state, setValue];
}