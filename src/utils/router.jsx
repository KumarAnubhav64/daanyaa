import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Platform from '../pages/Platform';
import Pricing from '../pages/Pricing';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Monetization from '../pages/Monetization';
import WhyUs from '../pages/WhyUs';
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
      {
        path: 'monetization',
        element: <Monetization />,
      },
      {
        path: 'why-us',
        element: <WhyUs />,
      },
      {
        path: 'why-publisher-ai',
        element: <WhyUs />,
      },
    ],
  },
]);

export default router;
