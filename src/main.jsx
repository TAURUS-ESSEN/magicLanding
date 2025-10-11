import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import NotFound from './NotFound';
import LandingPage from './LandingPage';
import PrivacyPolicy from './PrivacyPolicy';
import About from './About';
import Impressum from './Impressum';
import Agb from './Agb';


const router = createBrowserRouter([
  { path: '/', 
    element: <App />, 
    children: [
      {index: true, element: <LandingPage />},
      {path: "about", element: <About />},
      {path: 'privacy_policy', element: <PrivacyPolicy />},
      {path: 'impressum', element: <Impressum />},
      {path: 'agb', element: <Agb />},
      { path: '*', element: <NotFound /> }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
