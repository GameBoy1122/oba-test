import { StateCreator } from "zustand";

export type AlertAction = {
  setAlert: (alert: Alert) => void;
};

// Redux Standard Action
export type Message = {
  type:
    | "alert"
    | "logout"
    | "ionboard/popup/alert"
    | "ionboard/popup/success"
    | "ionboard/logout";
  payload: string;
};

export type AlertState = {
  alert: Alert;
};

export type Alert = {
  show: boolean;
  type?: AlertType;
  message?: string;
  title?: string;
  confirmText?: string;
  cancelText?: string;
  id?: string;
};

export type AlertType =
  | "alert"
  | "maintenance"
  | "service_unavailable"
  | "timeout"
  | "session_expire_warning"
  | "session_expire";

export type AlertSlice = AlertState & AlertAction;

export const createAlertSlice: StateCreator<AlertState & AlertAction> = (
  set,
  get
) => ({
  // initialState...
  alert: { show: false },
  // intialAction...
  setAlert: (alert) => {
    set((state) => ({ alert }));
  },
});
