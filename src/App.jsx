function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-darkBlue2 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold font-sans text-darkBlue dark:text-white">
            Fylo
          </h1>
          <p className="text-2xl font-medium text-darkBlue dark:text-accentCyan">
            Tailwind CSS Configuration Test ✓
          </p>
        </div>

        {/* Custom Colors Test */}
        <div className="bg-white dark:bg-darkBlue3 rounded-lg shadow-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold text-darkBlue dark:text-white">
            Custom Colors
          </h2>
          <div className="grid grid-cols-7 gap-4">
            <div className="text-center">
              <div className="w-full h-20 bg-darkBlue rounded-lg mb-2"></div>
              <p className="text-xs font-opensans text-gray-700 dark:text-gray-300">
                darkBlue
              </p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-darkBlue1 rounded-lg mb-2"></div>
              <p className="text-xs font-opensans text-gray-700 dark:text-gray-300">
                darkBlue1
              </p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-darkBlue2 rounded-lg mb-2"></div>
              <p className="text-xs font-opensans text-gray-700 dark:text-gray-300">
                darkBlue2
              </p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-darkBlue3 rounded-lg mb-2"></div>
              <p className="text-xs font-opensans text-gray-700 dark:text-gray-300">
                darkBlue3
              </p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-accentCyan rounded-lg mb-2"></div>
              <p className="text-xs font-opensans text-gray-700 dark:text-gray-300">
                accentCyan
              </p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-accentBlue rounded-lg mb-2"></div>
              <p className="text-xs font-opensans text-gray-700 dark:text-gray-300">
                accentBlue
              </p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-lightRed rounded-lg mb-2"></div>
              <p className="text-xs font-opensans text-gray-700 dark:text-gray-300">
                lightRed
              </p>
            </div>
          </div>
        </div>

        {/* Font Weights Test - Raleway */}
        <div className="bg-white dark:bg-darkBlue3 rounded-lg shadow-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold text-darkBlue dark:text-white">
            Raleway Font Weights (font-sans)
          </h2>
          <div className="space-y-2">
            <p className="text-lg font-sans font-thin text-gray-800 dark:text-gray-200">
              font-thin (100): The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-lg font-sans font-extralight text-gray-800 dark:text-gray-200">
              font-extralight (200): The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-lg font-sans font-light text-gray-800 dark:text-gray-200">
              font-light (300): The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-lg font-sans font-normal text-gray-800 dark:text-gray-200">
              font-normal (400): The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-lg font-sans font-medium text-gray-800 dark:text-gray-200">
              font-medium (500): The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-lg font-sans font-semibold text-gray-800 dark:text-gray-200">
              font-semibold (600): The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-lg font-sans font-bold text-gray-800 dark:text-gray-200">
              font-bold (700): The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-lg font-sans font-extrabold text-gray-800 dark:text-gray-200">
              font-extrabold (800): The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-lg font-sans font-black text-gray-800 dark:text-gray-200">
              font-black (900): The quick brown fox jumps over the lazy dog
            </p>
          </div>
        </div>

        {/* Font Weights Test - Open Sans */}
        <div className="bg-white dark:bg-darkBlue3 rounded-lg shadow-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold text-darkBlue dark:text-white">
            Open Sans Font Weights (font-opensans)
          </h2>
          <div className="space-y-2">
            <p className="text-lg font-opensans font-light text-gray-800 dark:text-gray-200">
              font-light (300): The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-lg font-opensans font-normal text-gray-800 dark:text-gray-200">
              font-normal (400): The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-lg font-opensans font-medium text-gray-800 dark:text-gray-200">
              font-medium (500): The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-lg font-opensans font-semibold text-gray-800 dark:text-gray-200">
              font-semibold (600): The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-lg font-opensans font-bold text-gray-800 dark:text-gray-200">
              font-bold (700): The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-lg font-opensans font-extrabold text-gray-800 dark:text-gray-200">
              font-extrabold (800): The quick brown fox jumps over the lazy dog
            </p>
          </div>
        </div>

        {/* Background Images Test */}
        <div className="bg-white dark:bg-darkBlue3 rounded-lg shadow-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold text-darkBlue dark:text-white">
            Custom Background Images
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Path in config:{" "}
            <code className="bg-gray-100 dark:bg-darkBlue2 px-2 py-1 rounded">
              ./assets/images/
            </code>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                bg-curvy-dark-mode
              </p>
              <div className="h-40 bg-curvy-dark-mode bg-contain bg-no-repeat bg-center border-2 border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-darkBlue2"></div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                bg-curvy-light-mode
              </p>
              <div className="h-40 bg-curvy-light-mode bg-contain bg-no-repeat bg-center border-2 border-gray-300 dark:border-gray-600 rounded bg-darkBlue dark:bg-darkBlue2"></div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                bg-logo-dark-mode
              </p>
              <div className="h-40 bg-logo-dark-mode bg-contain bg-no-repeat bg-center border-2 border-gray-300 dark:border-gray-600 rounded bg-darkBlue dark:bg-darkBlue2"></div>
              <p className="text-xs text-red-500">
                ⚠️ If empty, check file path
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                bg-logo-light-mode
              </p>
              <div className="h-40 bg-logo-light-mode bg-contain bg-no-repeat bg-center border-2 border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-darkBlue2"></div>
            </div>
          </div>
        </div>

        {/* Dark Mode Toggle Reminder */}
        <div className="bg-accentCyan/20 dark:bg-accentCyan/10 rounded-lg p-6 text-center">
          <p className="text-lg font-semibold text-darkBlue dark:text-accentCyan mb-2">
            💡 Toggle Dark Mode
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Use your system's dark mode setting or the toggle button to test
            dark mode styles
          </p>
        </div>

        {/* Success Message */}
        <div className="text-center">
          <p className="text-lg font-bold text-accentCyan">
            Tailwind Configuration Test Complete! 🎉
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
