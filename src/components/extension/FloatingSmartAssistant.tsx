import React from 'react';

export default function FloatingSmartAssistant() {
  return (
    <div className="fixed bottom-20 right-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg p-3 flex items-center justify-center cursor-move">
        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      <div className="absolute bottom-16 right-0 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 mb-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">Smart Assistant</h3>
          <div className="flex space-x-1">
            <button className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-2 mb-2">
          <p className="text-xs text-blue-800 dark:text-blue-200">I noticed you&apos;re reading about AI technology. Would you like me to summarize the key points?</p>
        </div>
        
        <div className="flex space-x-2">
          <button className="flex-1 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors">
            Yes, please
          </button>
          <button className="flex-1 py-1 bg-gray-200 text-gray-800 text-xs rounded hover:bg-gray-300 transition-colors dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500">
            No, thanks
          </button>
        </div>
      </div>
    </div>
  );
}
