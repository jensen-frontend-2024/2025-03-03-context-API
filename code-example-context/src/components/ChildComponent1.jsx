import { useContext } from 'react';
import { CountContext } from '../CountContextProvider';

export function ChildComponent1() {
  const { count } = useContext(CountContext);

  return <section className="child-component1">Child Component 1 - Count: {count}</section>;
}
