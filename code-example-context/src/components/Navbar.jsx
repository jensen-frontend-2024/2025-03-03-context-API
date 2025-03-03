import { useContext } from 'react';
import { CountContext } from '../CountContextProvider';

export function Navbar() {
  // useContext is used to access the context from any component. Whatever that was defined in the value prop of the context provider can be accessed in this object that is returned from the hook. The hook must take one argument which is the context variable create with 'creatContext'.
  const { increment, decrement } = useContext(CountContext);

  return (
    <nav className="navbar">
      <button onClick={increment}>Increment Count</button>
      <button onClick={decrement}>Decrement Count</button>
    </nav>
  );
}
