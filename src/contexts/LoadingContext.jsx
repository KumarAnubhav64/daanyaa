import { createContext, useState } from 'react';

export const LoadingContext = createContext();

export default function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const handleLoadComplete = () => {
    setIsLoading(false);
    // Delay the animation trigger slightly to ensure smooth transition
    setTimeout(() => {
      setIsLoadingComplete(true);
    }, 300);
  };

  return (
    <LoadingContext.Provider value={{
      isLoading,
      isLoadingComplete,
      handleLoadComplete
    }}>
      {children}
    </LoadingContext.Provider>
  );
}
