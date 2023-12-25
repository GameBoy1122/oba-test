import { AxiosRequestConfig } from "axios";
import { Alert } from "./features/alert";
import { useAppStore } from "./useAppStore";

export const setAlert = (alert: Alert) => {
  useAppStore.setState({ alert: alert });
};

export const request = (config: AxiosRequestConfig<any>) => {
  useAppStore.getState().request(config);
};
