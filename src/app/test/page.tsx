'use client';

import React from 'react';
import Sidebar from '@/components/shared/Sidebar';
import Header from '@/components/shared/Header';
import OCRIntegration from '@/components/dashboard/OCRIntegration';
import SpeechToTextUI from '@/components/dashboard/SpeechToTextUI';
import GPTSummarizationUI from '@/components/dashboard/GPTSummarizationUI';
import TranslationToolsUI from '@/components/dashboard/TranslationToolsUI';
import VideoProcessingUI from '@/components/dashboard/VideoProcessingUI';
import DatabaseSchemaDesignUI from '@/components/dashboard/DatabaseSchemaDesignUI';
import MockAPIEndpointsUI from '@/components/dashboard/MockAPIEndpointsUI';

export default function TestPage() {
  const [activeComponent, setActiveComponent] = React.useState('ocr');
  
  const renderComponent = () => {
    switch (activeComponent) {
      case 'ocr':
        return <OCRIntegration />;
      case 'speech':
        return <SpeechToTextUI />;
      case 'gpt':
        return <GPTSummarizationUI />;
      case 'translation':
        return <TranslationToolsUI />;
      case 'video':
        return <VideoProcessingUI />;
      case 'database':
        return <DatabaseSchemaDesignUI />;
      case 'api':
        return <MockAPIEndpointsUI />;
      default:
        return <OCRIntegration />;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Component Testing</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Test all implemented UI components to verify functionality.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <button 
                onClick={() => setActiveComponent('ocr')}
                className={`px-4 py-2 rounded-lg text-sm ${activeComponent === 'ocr' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}
              >
                OCR Integration
              </button>
              <button 
                onClick={() => setActiveComponent('speech')}
                className={`px-4 py-2 rounded-lg text-sm ${activeComponent === 'speech' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}
              >
                Speech-to-Text
              </button>
              <button 
                onClick={() => setActiveComponent('gpt')}
                className={`px-4 py-2 rounded-lg text-sm ${activeComponent === 'gpt' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}
              >
                GPT Summarization
              </button>
              <button 
                onClick={() => setActiveComponent('translation')}
                className={`px-4 py-2 rounded-lg text-sm ${activeComponent === 'translation' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}
              >
                Translation Tools
              </button>
              <button 
                onClick={() => setActiveComponent('video')}
                className={`px-4 py-2 rounded-lg text-sm ${activeComponent === 'video' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}
              >
                Video Processing
              </button>
              <button 
                onClick={() => setActiveComponent('database')}
                className={`px-4 py-2 rounded-lg text-sm ${activeComponent === 'database' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}
              >
                Database Schema
              </button>
              <button 
                onClick={() => setActiveComponent('api')}
                className={`px-4 py-2 rounded-lg text-sm ${activeComponent === 'api' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}
              >
                API Endpoints
              </button>
            </div>
          </div>
          
          {renderComponent()}
        </main>
      </div>
    </div>
  );
}
