import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Platform from '../pages/Platform';
import Pricing from '../pages/Pricing';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ComponentExamples from '../pages/ComponentExamples';
import InteractiveDemo from '../pages/InteractiveDemo';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'platform',
        element: <Platform />,
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'examples',
        element: <ComponentExamples />,
      },
      {
        path: 'interactive-demo',
        element: <InteractiveDemo />,
      },
      // Add more routes as needed
      {
        path: 'monetization',
        element: <div className="py-32 text-center"><h1 className="text-4xl">Monetization Page - Coming Soon</h1></div>,
      },
      {
        path: 'why-publisher-ai',
        element: <div className="py-32 text-center"><h1 className="text-4xl">Why DAaranya.AI - Coming Soon</h1></div>,
      },
    ],
  },
]);

export default router;
