import useLocalStorageState from 'use-local-storage-state';
import { useState } from 'react';

const useLocalStorage = (keyName, initialValue, options) => {
  let returnState = useState(initialValue);
  try {
    const [value, setValue] = useLocalStorageState(keyName, {
      defaultValue: initialValue,
      ...options,
    });
    returnState = [value, setValue];
  } catch (e) {
    console.error(e);
  }

  return returnState;
};

export default useLocalStorage;
