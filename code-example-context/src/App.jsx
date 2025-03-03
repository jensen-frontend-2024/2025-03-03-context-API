import { useState } from 'react';
import { ChildComponent1 } from './components/ChildComponent1';
import { ChildComponent2 } from './components/ChildComponent2';
import { Navbar } from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <ChildComponent1 count={count} />
      <ChildComponent2 count={count} />
    </>
  );
}

export default App;
