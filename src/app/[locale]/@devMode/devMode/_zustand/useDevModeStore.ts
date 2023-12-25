import { create, StateCreator } from "zustand";
import axios from "@/libs/axiosInstance";
import { persist, PersistOptions, createJSONStorage } from "zustand/middleware";
import { createDipChipSlice, DipChipSlice } from "./features/dip-chip";

export type PageShow = "main" | "dip-chip" | "doc-scanner";

type DevModeState = {
  pageShow: PageShow;
};

type DevModeAction = {};

export type DevModeStore = DevModeState & DevModeAction & DipChipSlice;

type DevModePersist = (
  config: StateCreator<DevModeStore>,
  options: PersistOptions<Partial<DevModeStore>>
) => StateCreator<DevModeStore>;

export const useDevModeStore = create<DevModeStore, []>(
  (persist as DevModePersist)(
    (...a) => ({
      pageShow: "main",
      ...createDipChipSlice(...a),
    }),
    {
      name: "devMode",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({}),
    }
  )
);
