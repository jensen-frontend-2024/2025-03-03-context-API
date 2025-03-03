import { useContext } from 'react';
import { TodoContext } from '../TodoContextProvider';
import { Todo } from './Todo';

export function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <section className="todo-list">
      {todos.map((t) => (
        <Todo key={t.id} todo={t} />
      ))}
    </section>
  );
}
