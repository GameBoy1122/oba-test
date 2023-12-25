import { create, StateCreator } from "zustand";

export type ActiveTab = "tab1" | "tab2" | "tab3";

type RbFrontState = {
  activeTab: ActiveTab;
};

type RbFrontStore = {
  state: RbFrontState;
};

export const useRbFrontStore = create<RbFrontStore>(() => ({
  state: {
    activeTab: "tab1",
  },
}));

// use zustand store instead of react useState
export const setActiveTab = (activeTab: ActiveTab) => {
  useRbFrontStore.setState({ state: { activeTab } });
};
