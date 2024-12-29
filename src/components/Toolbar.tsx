import React from 'react';
import { FilePlus, Save, FileCode } from 'lucide-react';
import { useEditorStore } from '../store/editorStore';

export const Toolbar: React.FC = () => {
  const { addTab } = useEditorStore();

  const handleNewFile = () => {
    addTab({
      name: 'untitled.txt',
      content: '',
      language: 'plaintext',
    });
  };

  return (
    <div className="flex items-center gap-2 bg-gray-900 text-white p-2">
      <button
        onClick={handleNewFile}
        className="flex items-center gap-1 px-3 py-1 rounded hover:bg-gray-700"
      >
        <FilePlus size={16} />
        <span>New</span>
      </button>
      <button className="flex items-center gap-1 px-3 py-1 rounded hover:bg-gray-700">
        <Save size={16} />
        <span>Save</span>
      </button>
      <button className="flex items-center gap-1 px-3 py-1 rounded hover:bg-gray-700">
        <FileCode size={16} />
        <span>Language</span>
      </button>
    </div>
  );
};