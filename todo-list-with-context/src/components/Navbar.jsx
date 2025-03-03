import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Todo List</NavLink>
      <NavLink to="/add-new">Add New</NavLink>
    </nav>
  );
}
