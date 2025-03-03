import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CountContextProvider } from './CountContextProvider.jsx';

// By wrapping the context provider around the App, makes sure that App component and all its children will have access to the context. We don't have to wrap App with context, we cna wrap smaller parts of the application as well.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountContextProvider>
      <App />
    </CountContextProvider>
  </StrictMode>
);
