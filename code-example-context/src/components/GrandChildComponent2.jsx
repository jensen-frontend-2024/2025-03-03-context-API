import { useContext } from 'react';
import { CountContext } from '../CountContextProvider';

export function GrandChildComponent2() {
  const { count } = useContext(CountContext);

  return (
    <section className="grand-child-component2">Grand Child Component 2 - Count: {count}</section>
  );
}
