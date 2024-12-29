import React from 'react';
import MonacoEditor from '@monaco-editor/react';
import { useEditorStore } from '../store/editorStore';

export const Editor: React.FC = () => {
  const { tabs, activeTabId, updateTabContent } = useEditorStore();
  const activeTab = tabs.find((tab) => tab.id === activeTabId);

  if (!activeTab) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500">
        Create a new file to start editing
      </div>
    );
  }

  return (
    <MonacoEditor
      height="100%"
      language={activeTab.language}
      value={activeTab.content}
      theme="vs-dark"
      options={{
        minimap: { enabled: true },
        fontSize: 14,
        wordWrap: 'on',
        lineNumbers: 'on',
        renderWhitespace: 'selection',
        automaticLayout: true,
      }}
      onChange={(value) => {
        if (value) updateTabContent(activeTab.id, value);
      }}
    />
  );
};