import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <header className="p-6 bg-gray-800 border-b border-gray-700">
        <h1 className="text-2xl font-semibold text-white">Task Manager</h1>
      </header>

      <main className="container mx-auto p-6">
        {/* dashboard */}
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
