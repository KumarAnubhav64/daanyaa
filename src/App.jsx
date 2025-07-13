import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/router';
import LoadingScreen from './components/common/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
    // Add a small delay before triggering content animations
    setTimeout(() => {
      document.body.classList.add('content-loaded');
    }, 200);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      <div className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <RouterProvider router={router} />
      </div>
    </>
  );
}