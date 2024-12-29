import React from 'react';
import { X } from 'lucide-react';
import { useEditorStore } from '../store/editorStore';

export const TabBar: React.FC = () => {
  const { tabs, activeTabId, removeTab, setActiveTab } = useEditorStore();

  return (
    <div className="flex bg-gray-800 text-white overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`flex items-center px-4 py-2 cursor-pointer border-r border-gray-700 min-w-[120px] ${
            activeTabId === tab.id ? 'bg-gray-700' : 'hover:bg-gray-700'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          <span className="truncate flex-1">{tab.name}</span>
          <button
            className="ml-2 hover:bg-gray-600 rounded p-1"
            onClick={(e) => {
              e.stopPropagation();
              removeTab(tab.id);
            }}
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
};