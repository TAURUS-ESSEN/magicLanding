import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import PrivacyPolicy from './PrivacyPolicy.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
  {path: '/', element: <App /> },
  {path: 'privacy_policy', element: <PrivacyPolicy />}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
