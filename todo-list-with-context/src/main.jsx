import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';
import { TodoContextProvider } from './TodoContextProvider.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <TodoContextProvider>
    <RouterProvider router={router} />
  </TodoContextProvider>
);
