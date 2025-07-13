import { useState, useEffect } from 'react';

export default function LoadingScreen({ onLoadComplete }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    let progressInterval;
    let minLoadingTime = false;

    // Minimum loading time to prevent flash
    setTimeout(() => {
      minLoadingTime = true;
      checkIfReadyToComplete();
    }, 1500);

    // Check font loading
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
        checkIfReadyToComplete();
      });
    } else {
      // Fallback for older browsers
      setTimeout(() => {
        setFontsLoaded(true);
        checkIfReadyToComplete();
      }, 1000);
    }

    // Progress animation
    progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) {
          return 95; // Hold at 95% until everything is ready
        }
        return prev + Math.random() * 10 + 2;
      });
    }, 150);

    function checkIfReadyToComplete() {
      if (minLoadingTime && fontsLoaded) {
        setProgress(100);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(() => {
            onLoadComplete();
          }, 300);
        }, 200);
      }
    }

    return () => {
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [onLoadComplete, fontsLoaded]);

  return (
    <div className={`fixed inset-0 bg-[#F4EFEB] z-50 flex items-center justify-center transition-all duration-500 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-center relative">
        {/* Animated Background Circles */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#715482]/10 to-[#8b6b9c]/10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-[#8b6b9c]/10 to-[#715482]/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Main Loader Container */}
        <div className="relative mb-8">
          {/* Spinning Outer Ring */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-[#715482]/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-[#715482] rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-transparent border-t-[#8b6b9c] rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>

            {/* Logo in Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#715482] to-[#8b6b9c] rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.816L4.93 13.72a.5.5 0 00-.316-.107H2a1 1 0 01-1-1v-5.214a1 1 0 011-1h2.614a.5.5 0 00.316-.107l3.453-3.096z"/>
                  <path d="M11.076 6.05a.5.5 0 01.848-.53c1.33.995 2.076 2.35 2.076 3.98 0 1.63-.746 2.985-2.076 3.98a.5.5 0 11-.848-.53c1.002-.75 1.424-1.73 1.424-2.95 0-1.22-.422-2.2-1.424-2.95z"/>
                  <path d="M12.828 4.025a.5.5 0 01.848-.53c2.33 1.744 3.824 4.413 3.824 7.505 0 3.092-1.494 5.761-3.824 7.505a.5.5 0 11-.848-.53c2.078-1.554 3.172-3.756 3.172-6.475 0-2.719-1.094-4.921-3.172-6.475z"/>
                </svg>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-[#715482] mb-3 animate-fade-in-up">Publisher.AI</h2>
          <p className="text-lg text-[#8b6b9c] animate-fade-in-up animation-delay-200">Preparing your AI-powered experience...</p>
        </div>

        {/* Enhanced Progress Bar */}
        <div className="w-80 mx-auto mb-6 animate-fade-in-up animation-delay-400">
          <div className="bg-white/80 backdrop-blur-sm rounded-full h-3 shadow-inner overflow-hidden border border-[#715482]/10">
            <div
              className="bg-gradient-to-r from-[#715482] via-[#8b6b9c] to-[#715482] h-3 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div className="text-sm text-[#715482] font-semibold">
              {Math.round(progress)}%
            </div>
            <div className="text-xs text-[#8b6b9c]">
              Loading...
            </div>
          </div>
        </div>

        {/* Enhanced Loading Animation */}
        <div className="flex justify-center items-center space-x-2 mb-6 animate-fade-in-up animation-delay-600">
          {/* Bouncing dots */}
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-[#715482] rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-[#715482] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-[#715482] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>

          {/* Separator */}
          <div className="w-px h-4 bg-[#715482]/30 mx-4"></div>

          {/* Pulsing indicators */}
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-[#8b6b9c]/50 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-[#8b6b9c]/50 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-3 h-3 bg-[#8b6b9c]/50 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>

        {/* Dynamic Loading Messages */}
        <div className="mt-4 text-sm text-[#8b6b9c] animate-fade-in-up animation-delay-800 min-h-[20px] transition-all duration-300">
          {progress < 20 && (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-[#715482] rounded-full animate-ping"></div>
              <span>Initializing AI systems...</span>
            </div>
          )}
          {progress >= 20 && progress < 40 && (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-[#8b6b9c] rounded-full animate-ping"></div>
              <span>Loading fonts and assets...</span>
            </div>
          )}
          {progress >= 40 && progress < 60 && (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-[#715482] rounded-full animate-ping"></div>
              <span>Preparing interactive demos...</span>
            </div>
          )}
          {progress >= 60 && progress < 80 && (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-[#8b6b9c] rounded-full animate-ping"></div>
              <span>Optimizing user experience...</span>
            </div>
          )}
          {progress >= 80 && progress < 95 && (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-[#715482] rounded-full animate-ping"></div>
              <span>Finalizing setup...</span>
            </div>
          )}
          {progress >= 95 && (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              <span className="text-green-600 font-semibold">Almost ready!</span>
            </div>
          )}
        </div>

        {/* Subtle Loading Stats */}
        <div className="mt-6 text-xs text-[#8b6b9c]/70 animate-fade-in-up animation-delay-1000">
          <div className="flex justify-center space-x-6">
            <span>AI Models: ✓</span>
            <span>Fonts: {fontsLoaded ? '✓' : '⟳'}</span>
            <span>Assets: {progress > 50 ? '✓' : '⟳'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
