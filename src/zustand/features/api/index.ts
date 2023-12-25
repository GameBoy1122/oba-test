import { StateCreator } from "zustand";
import {} from "@/utils/localStorage";
import axios from "@/utils/axiosInstance";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export type APIAction = {
  request: <T = any>(config: AxiosRequestConfig<T>) => Promise<void>;
};

export type APIState = {
  apiState: {
    isLoading: boolean;
    error?: any;
    data?: any;
  };
};

export type APISlice = APIState & APIAction;

export const createAPISlice: StateCreator<APIState & APIAction> = (
  set,
  get
) => ({
  // initialState...
  apiState: {
    isLoading: false,
    error: null,
    data: null,
  },
  // intialAction...
  request: async <T = any>(config: AxiosRequestConfig<T>) => {
    let error = null;
    let data = null;
    set({ apiState: { isLoading: true } });
    try {
      const res: AxiosResponse<T> = await axios(config);
      data = res.data;
    } catch (e) {
      error = e;
    }
    set({ apiState: { isLoading: false, error: error, data: data } });
  },
});
