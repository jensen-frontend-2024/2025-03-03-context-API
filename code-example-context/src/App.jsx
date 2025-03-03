import { useState } from 'react';
import { ChildComponent1 } from './components/ChildComponent1';
import { ChildComponent2 } from './components/ChildComponent2';
import { Navbar } from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <Navbar increment={increment} decrement={decrement} />
      <ChildComponent1 count={count} />
      <ChildComponent2 count={count} />
    </>
  );
}

export default App;
