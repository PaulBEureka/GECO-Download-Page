import React from "react";

const SystemRequirements = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-xl w-full flex flex-col gap-6">
    <h2 className="text-3xl font-semibold mb-2 flex items-center gap-2 text-start">
      <span className="inline-block text-green-600 dark:text-green-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
      </span>
      User System Requirements
    </h2>
    <div className="flex items-start gap-4">
      <span className="inline-block text-blue-500 mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4a1 1 0 011-1h8a1 1 0 011 1v12m-9 4h10a1 1 0 001-1v-1a1 1 0 00-1-1H6a1 1 0 00-1 1v1a1 1 0 001 1z" /></svg>
      </span>
      <div className="text-start">
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Device</p>
        <p className="text-gray-800 dark:text-gray-200">GECO is currently available only as a mobile application for Android. The application targets Android 6.0 (API 22) up to Android 14. Its core features have been tested and proven to work across different Android versions and are responsive to varying screen sizes.</p>
      </div>
    </div>
    <div className="flex items-start gap-4">
      <span className="inline-block text-yellow-500 mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
      </span>
      <div className="text-start">
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Internet Connection</p>
        <p className="text-gray-800 dark:text-gray-200">An active internet connection is required to gain the full experience offered by GECO, as all core functionalities require the use of Gemini LLM through API. However, the monitoring feature only gathers local mobile data, so its continuous foreground service will not be affected if offline.</p>
      </div>
    </div>
  </div>
);

export default SystemRequirements;
