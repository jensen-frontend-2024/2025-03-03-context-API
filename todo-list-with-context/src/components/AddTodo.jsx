import { useContext, useRef } from 'react';
import { TodoContext } from '../TodoContextProvider';
import { useNavigate, Link } from 'react-router-dom';

export function AddTodo() {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { addTodo } = useContext(TodoContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTodo(inputRef.current.value);
    navigate('/'); // Programatic navigation, it's fine but is not according to 'correct' accessibility. 
  };

  return (
    <form className="add-todo form">
      <input ref={inputRef} placeholder="Todo Content..." type="text" />
      <Link to="/">
        <button onClick={handleOnSubmit} type="submit">
          Add
        </button>
      </Link>
    </form>
  );
}
