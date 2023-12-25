import { StateCreator } from "zustand";
import axios from "@/libs/axiosInstance";
import { readThaiCard } from "@/libs/NativeService";
import { CardInfo } from "@/libs/NativeService/types";

type DipChipState = {
  cardInfo?: CardInfo;
  isLoading: boolean;
};

type DipChipAction = {
  onDipChip: () => Promise<void>;
};

export type DipChipSlice = DipChipState & DipChipAction;

export const createDipChipSlice: StateCreator<DipChipSlice> = (set, get) => ({
  //state...
  isLoading: false,
  // actions...
  onDipChip: async () => {
    set({ isLoading: true });
    if (window.Plugin && window.Plugin.NationalID) {
      try {
        const res = await readThaiCard();
        set({ cardInfo: res, isLoading: false });
      } catch (e) {
        set({ isLoading: false });
      }
    } else {
      try {
        const res = await axios("/api/cardInfo");
        set({ cardInfo: res?.data?.cardInfo, isLoading: false });
      } catch (e) {
        console.log(e);
        set({ isLoading: false });
      }
    }
  },
});
