export interface Tab {
  id: string;
  name: string;
  content: string;
  language: string;
}

export interface EditorStore {
  tabs: Tab[];
  activeTabId: string | null;
  addTab: (tab: Omit<Tab, 'id'>) => void;
  removeTab: (id: string) => void;
  updateTabContent: (id: string, content: string) => void;
  setActiveTab: (id: string) => void;
  updateTabLanguage: (id: string, language: string) => void;
}