import { StateCreator } from "zustand";
import {} from "@/libs/localStorage";
import { setAlert } from "@/zustand/actions";
import { Alert } from "../alert";

export type FeatureType =
  | "ionboard/alert"
  | "ionboard/alert/maintenance"
  | "ionboard/alert/service_unavailable"
  | "ionboard/alert/timeout"
  | "ionboard/alert/session_expire_warning"
  | "ionboard/alert/session_expire"
  | "ionboard/scan_card/thai_card"
  | "ionboard/scan_card/scb_card"
  | "ionboard/logout"
  | "iprofile/alert"
  | "iprofile/alert/maintenance"
  | "iprofile/alert/service_unavailable"
  | "iprofile/alert/timeout"
  | "iprofile/alert/session_expire_warning"
  | "iprofile/alert/session_expire"
  | "iprofile/scan_card/thai_card"
  | "iprofile/scan_card/scb_card"
  | "iprofile/logout";

// Standard Action [iframe_page]/[feature]/[feature_type]
export type ActionType = {
  type: FeatureType;
  payload: string;
};

// check type of card
export function isOfTypeCard(keyInput: string): keyInput is CardType {
  return ["thai_card", "scb_card"].includes(keyInput);
}

export type CardType = "thai_card" | "scb_card";

export type ThaiCard = {
  citizenId: number;
  nameTH: string;
  nameEN: string;
  requestBy: string;
};

export type SCBCard = {
  scbCardId: number;
  nameTH: string;
  nameEN: string;
  requestBy: string;
};

export declare type PayloadAction<
  P = void,
  T extends string = string,
  M = never,
  E = never
> = {
  payload: P;
  type: T;
} & ([M] extends [never]
  ? {}
  : {
      meta: M;
    }) &
  ([E] extends [never]
    ? {}
    : {
        error: E;
      });

export type IFrame = HTMLIFrameElement | null;

export type IFrameAction = {
  scanCard: (subType: CardType) => void;
  reducer: (action: ActionType) => void;
  initIFrame: (iframe?: IFrame) => void;
};

export type IFrameState = {
  iframe?: IFrame;
};

export type IFrameSlice = IFrameState & IFrameAction;

export const createIFrameSlice: StateCreator<IFrameState & IFrameAction> = (
  set,
  get
) => ({
  // initialState...
  // intialAction...
  scanCard: (subType) => {
    const iframe = get().iframe;

    // get card info from native
    const thai_card: ThaiCard = {
      citizenId: Math.floor(Math.random() * 100000000000000),
      nameTH: "ยูสเซอร์",
      nameEN: "User",
      requestBy: iframe?.id ?? "",
    };

    const scb_card: SCBCard = {
      scbCardId: Math.floor(Math.random() * 100000000000000),
      nameTH: "ยูสเซอร์",
      nameEN: "User",
      requestBy: iframe?.id ?? "",
    };

    // send card info to iframe
    if (iframe?.contentWindow) {
      iframe?.contentWindow?.postMessage(
        subType == "thai_card"
          ? JSON.stringify({
              type: "scan_card",
              card: thai_card,
            })
          : JSON.stringify({
              type: "scan_card",
              card: scb_card,
            }),
        "http://127.0.0.1:8000/index2.html"
      );
    }
  },
  reducer: (action) => {
    const { type, payload } =
      typeof action == "string" ? JSON.parse(action) : action;

    const page = type?.split("/")[0];
    const feature = type?.split("/")[1];
    const subFeature = type?.split("/")[2];

    switch (type) {
      case "ionboard/scan_card/thai_card":
        get().scanCard(isOfTypeCard(subFeature) ? subFeature : "thai_card");
        break;
      case "ionboard/scan_card/scb_card":
        get().scanCard(isOfTypeCard(subFeature) ? subFeature : "thai_card");
        break;
      case "ionboard/alert":
        setAlert({
          ...(payload as Alert),
          show: true,
          type: "alert",
        });
        break;
      case "ionboard/alert/maintenance":
        setAlert({ show: true, type: "maintenance" });
        break;
      case "ionboard/alert/service_unavailable":
        setAlert({ show: true, type: "service_unavailable" });
        break;
      case "ionboard/alert/timeout":
        setAlert({ show: true, type: "timeout" });
        break;
      case "ionboard/alert/session_expire":
        setAlert({ show: true, type: "session_expire" });
        break;
      case "ionboard/alert/session_expire_warning":
        setAlert({ show: true, type: "session_expire_warning" });
        break;
      case "iprofile/scan_card/thai_card":
        get().scanCard(isOfTypeCard(subFeature) ? subFeature : "thai_card");
        break;
      case "iprofile/scan_card/scb_card":
        get().scanCard(isOfTypeCard(subFeature) ? subFeature : "thai_card");
        break;
      case "iprofile/alert/maintenance":
        setAlert({ show: true, type: "maintenance" });
        break;
      case "iprofile/alert/service_unavailable":
        setAlert({ show: true, type: "service_unavailable" });
        break;
      case "iprofile/alert/timeout":
        setAlert({ show: true, type: "timeout" });
        break;
      case "iprofile/alert/session_expire":
        setAlert({ show: true, type: "session_expire" });
        break;
      case "iprofile/alert/session_expire_warning":
        setAlert({ show: true, type: "session_expire_warning" });
        break;
      default:
        break;
    }
  },
  initIFrame: (iframe) => set((state) => ({ iframe })),
});
