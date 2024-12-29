import { create } from 'zustand';
import { Tab, EditorStore } from '../types';

export const useEditorStore = create<EditorStore>((set) => ({
  tabs: [],
  activeTabId: null,
  addTab: (tab) => {
    const newTab: Tab = {
      ...tab,
      id: crypto.randomUUID(),
    };
    set((state) => ({
      tabs: [...state.tabs, newTab],
      activeTabId: newTab.id,
    }));
  },
  removeTab: (id) =>
    set((state) => ({
      tabs: state.tabs.filter((tab) => tab.id !== id),
      activeTabId:
        state.activeTabId === id
          ? state.tabs[state.tabs.length - 2]?.id || null
          : state.activeTabId,
    })),
  updateTabContent: (id, content) =>
    set((state) => ({
      tabs: state.tabs.map((tab) =>
        tab.id === id ? { ...tab, content } : tab
      ),
    })),
  setActiveTab: (id) =>
    set({
      activeTabId: id,
    }),
  updateTabLanguage: (id, language) =>
    set((state) => ({
      tabs: state.tabs.map((tab) =>
        tab.id === id ? { ...tab, language } : tab
      ),
    })),
}));