import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import LandingPage from './LandingPage';
import PrivacyPolicy from './PrivacyPolicy.jsx';
import About from './About';
import Impressum from './Impressum';
import Agb from './Agb';


const router = createBrowserRouter([
  {path: '/', element: <App />, 
    children: [
      {index: true, element: <LandingPage />},
      {path: "/about", element: <About />},
      {path: 'privacy_policy', element: <PrivacyPolicy />},
      {path: 'impressum', element: <Impressum />},
      {path: 'agb', element: <Agb />}
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
