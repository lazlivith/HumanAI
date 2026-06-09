import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { AuthProvider } from './app/context/AuthContext';
import App from './app/App.tsx';
import { initSentry } from './app/monitoring/sentry';
import './styles/index.css';

// Initialiser le monitoring avant le rendu React
initSentry();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);