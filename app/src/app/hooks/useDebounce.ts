import { useEffect, useRef, useState } from 'react';

export function useDebounce<T = any>(value: T, delay: number): [T, (val: T) => void] {
  const handler = useRef<number>();
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  const setDebounceValue = (val: T) => {
    clearTimeout(handler.current);
    handler.current = window.setTimeout(() => {
      setDebouncedValue(val);
    }, delay);
  };

  useEffect(() => () => {
    clearTimeout(handler.current);
  }, []);

  return [debouncedValue, setDebounceValue];
}
