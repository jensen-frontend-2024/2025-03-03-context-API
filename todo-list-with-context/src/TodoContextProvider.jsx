  import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext();

export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: uuidv4(), content: 'Buy a Ferrari', completed: false },
    { id: uuidv4(), content: 'But steaks', completed: true },
    { id: uuidv4(), content: 'Party', completed: false },
  ]);

  const addTodo = (newTodoContent) => {
    const newTodo = {
      id: uuidv4(),
      content: newTodoContent,
      completed: false,
    };

    const updatedTodos = [newTodo, ...todos];
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((t) => t.id !== id);
    setTodos(updatedTodos);
  };

  const updateCompletedStatus = (id) => {
    const updatedTodos = todos.map((t) => {
      return t.id === id ? { ...t, completed: !t.completed } : t;
    });

    setTodos(updatedTodos);
  };

  const values = { addTodo, removeTodo, todos, updateCompletedStatus };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}
