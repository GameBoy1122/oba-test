declare type Action<T> = (arg: T) => void;

declare namespace models {
  interface DeeplinkResult {
    url: string;
  }

  interface ReadCardResult {
    status: number;
    cardInfo: string;
  }

  interface ReadFacialResult {
    status: number;
    data: string;
    error: string;
  }
  interface DeviceDetailsResult {
    deviceUUID: string;
    appVersion: string;
    deviceName: string;
    deviceIP: string;
  }
  interface DeviceLocationResult {
    deviceLongitude: number;
    deviceLatitude: number;
  }
  interface CaptivaDocInput {
    sessionid: string;
    type: "color" | "";
    multiple: "yes" | "no";
    format: string;
    count: string;
    token: string;
  }

  interface CaptivaDocResult {
    status: string;
    batchid?: string;
    docSessionID?: string;
  }

  interface CoreDataResult {
    status: number;
    value: string;
    error: string;
  }
  interface CoreDataInput {
    key: string;
    value?: string;
  }
  interface ClearWebViewCache {
    value: string;
  }
}
