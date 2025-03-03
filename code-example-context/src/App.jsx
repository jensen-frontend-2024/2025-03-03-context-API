import { ChildComponent1 } from './components/ChildComponent1';
import { ChildComponent2 } from './components/ChildComponent2';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <ChildComponent1 />
      <ChildComponent2 />
    </>
  );
}

export default App;
