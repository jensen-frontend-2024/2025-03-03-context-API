export function Navbar({ increment, decrement }) {
  return (
    <nav className="navbar">
      <button onClick={increment}>Increment Count</button>
      <button onClick={decrement}>Decrement Count</button>
    </nav>
  );
}
