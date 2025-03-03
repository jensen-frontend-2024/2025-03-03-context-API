import { createContext, useState } from 'react';

// This is the main Context variable that contains ALL the context functionality including a special component that will wrap our App later. It needs a default value, in this case, it's empty which means it is undefined. We must export this since we will use it in other components later that wants access to the state provided by this contex.
export const CountContext = createContext();

// This is the provider to the context. It acts like a config that sets the data and functions that are to be 'shared' across the application.
export function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const values = {
    count,
    increment,
    decrement,
  };

  // This is a special JSX-element that will be used to wrap our application, or part of our application. The children it wraps will have access to the state that is defined in this  component.
  return <CountContext.Provider value={values}>{children}</CountContext.Provider>;
}
