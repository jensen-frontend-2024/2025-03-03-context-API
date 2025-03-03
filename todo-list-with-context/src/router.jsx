import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { App } from './components/App';
import { TodoList } from './components/TodoList';
import { AddTodo } from './components/AddTodo';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<TodoList />} />
      <Route path="add-new" element={<AddTodo />} />
    </Route>
  )
);
