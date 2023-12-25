import { StateCreator } from "zustand";
import axios from "@/utils/axiosInstance";

export type CardInfo = {
  engTitle: string;
  engFirstName: string;
  engLastName: string;
  thaiTitle: string;
  thaiFirstName: string;
  thaiLastName: string;
  docType: string;
  docNo: string;
  expDate: string;
  issueDate: string;
  genderCode: string;
  dob: string;
  manualKeyIn: boolean;
  photo: string;
  address: Address;
};

export type Address = {
  usageCode: string;
  thaiAddressNumber: string;
  thaiAddressMoo: string;
  thaiAddressTrok: string;
  thaiAddressSoi: string;
  thaiAddressThanon: string;
  thaiAddressDistrict: string;
  thaiAddressAmphur: string;
  thaiAddressProvince: string;
};

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
      const result = new Promise<CardInfo>((ok, ko) => {
        window.Plugin.NationalID.readThaiCard((data: any) => {
          if (data && +data.status === 0) {
            console.log("readThaiCard response : success");
            ok(JSON.parse(data.cardInfo));
          } else {
            console.log("readThaiCard error : " + JSON.stringify(data));
            ko(data);
          }
        });
      })
        .then((data) => {
          set({ cardInfo: data, isLoading: false });
        })
        .catch((e) => {
          console.log(e);
          set({ isLoading: false });
        });
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
