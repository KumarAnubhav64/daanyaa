import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/router';

export default function App() {
  useEffect(() => {
    // Trigger content animations immediately after component mounts
    const timer = setTimeout(() => {
      document.body.classList.add('content-loaded');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="opacity-100 transition-opacity duration-500">
      <RouterProvider router={router} />
    </div>
  );
}