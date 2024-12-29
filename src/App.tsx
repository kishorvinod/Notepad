import React from 'react';
import { Toolbar } from './components/Toolbar';
import { TabBar } from './components/TabBar';
import { Editor } from './components/Editor';

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <Toolbar />
      <TabBar />
      <div className="flex-1">
        <Editor />
      </div>
    </div>
  );
}

export default App;