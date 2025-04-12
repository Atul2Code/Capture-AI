import React from 'react';

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User Profile & Activity Analytics</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Export Data
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
            Settings
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold mb-4">
              U
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">User Name</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">user@example.com</p>
            <div className="mt-4 w-full">
              <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-300">Member since</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Jan 2023</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-300">Total captures</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">247</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-600 dark:text-gray-300">AI suggestions used</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">183</span>
              </div>
            </div>
            <button className="mt-6 w-full py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Capture Frequency</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-lg dark:bg-blue-900 dark:text-blue-400">Weekly</button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg dark:text-gray-400 dark:hover:bg-gray-700">Monthly</button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg dark:text-gray-400 dark:hover:bg-gray-700">Yearly</button>
            </div>
          </div>
          <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <div className="w-full h-full flex flex-col">
              <div className="flex-1 flex items-end space-x-2">
                {[40, 65, 30, 85, 50, 75, 25].map((height, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-blue-500 rounded-t-sm" 
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="h-6 flex space-x-2 mt-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                  <div key={index} className="flex-1 text-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">AI Suggestions Used</h2>
            <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Content Summarization', count: 78, percentage: 42 },
              { name: 'Translation Suggestions', count: 45, percentage: 25 },
              { name: 'Action Items', count: 32, percentage: 18 },
              { name: 'Other Suggestions', count: 28, percentage: 15 }
            ].map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600 dark:text-gray-300">{item.name}</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{item.count}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Productivity Heatmap</h2>
            <select className="text-sm bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-2 py-1">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 28 }).map((_, index) => {
              const intensity = Math.floor(Math.random() * 5); // 0-4 for demo
              let bgColor = 'bg-gray-100 dark:bg-gray-700';
              
              if (intensity === 1) bgColor = 'bg-green-100 dark:bg-green-900/30';
              if (intensity === 2) bgColor = 'bg-green-200 dark:bg-green-900/50';
              if (intensity === 3) bgColor = 'bg-green-300 dark:bg-green-900/70';
              if (intensity === 4) bgColor = 'bg-green-400 dark:bg-green-900/90';
              
              return (
                <div 
                  key={index} 
                  className={`w-full aspect-square rounded-sm ${bgColor}`}
                  title={`${intensity} captures`}
                ></div>
              );
            })}
          </div>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">Less</span>
            <div className="w-4 h-4 bg-gray-100 dark:bg-gray-700 rounded-sm"></div>
            <div className="w-4 h-4 bg-green-100 dark:bg-green-900/30 rounded-sm"></div>
            <div className="w-4 h-4 bg-green-200 dark:bg-green-900/50 rounded-sm"></div>
            <div className="w-4 h-4 bg-green-300 dark:bg-green-900/70 rounded-sm"></div>
            <div className="w-4 h-4 bg-green-400 dark:bg-green-900/90 rounded-sm"></div>
            <span className="text-xs text-gray-500 dark:text-gray-400">More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
