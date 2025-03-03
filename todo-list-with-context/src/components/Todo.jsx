  import { useContext } from 'react';
  import { TodoContext } from '../TodoContextProvider';

export function Todo({ todo }) {
  const { updateCompletedStatus, removeTodo } = useContext(TodoContext);

  return (
    <article className={`todo ${todo.completed ? 'completed' : ''}`}>
      <p>{todo.content}</p>
      <button onClick={() => updateCompletedStatus(todo.id)}>Update status</button>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </article>
  );
}
