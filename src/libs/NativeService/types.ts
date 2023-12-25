declare global {
  interface Window {
    Plugin: {
      NationalID: {
        readThaiCard(action: Action<ReadCardResult>): void;
        readSCBVisaCard(action: Action<ReadCardResult>): void;
        readSCBDebitCard(action: Action<ReadCardResult>): void;
        readSCBCardWithType(
          cardType: string,
          action: Action<ReadCardResult>
        ): void;
      };
      FacialID: {
        staticFaceOverlay(action: Action<ReadFacialResult>): void;
        autoFaceDetection(action: Action<ReadFacialResult>): void;
      };
      Utilities: {
        deviceDetails(action: Action<DeviceDetailsResult>): void;
        deviceGeoLocation(action: Action<DeviceLocationResult>): void;
        openURL(page: string, loadExternal: boolean): void;
        openDeeplinkURL(page: string, loadExternal: boolean): void;
        clearWebViewCache(action: Action<ClearWebViewCacheResult>): void;
      };
      CaptivaDocScanner: {
        start(
          captivaCreateBatch: CaptivaDocInput,
          action: Action<CaptivaDocResult>
        ): void;
        submitBatch(
          captivaCloseBatchArgs: CaptivaDocResult,
          action: Action<CaptivaDocResult>
        ): void;
        deleteBatch(
          captivaCloseBatchArgs: CaptivaDocResult,
          action: Action<CaptivaDocResult>
        ): void;
        updateMetaDataExistingBatch(): void;
        returnCallBackResults(): void;
      };
      CoreDataPlugin: {
        clearAll(action: Action<CoreDataResult>): void;
        get(input: CoreDataInput, action: Action<CoreDataResult>): void;
        set(input: CoreDataInput, action: Action<CoreDataResult>): void;
        delete(input: CoreDataInput, action: Action<CoreDataResult>): void;
      };
      Deeplink: {
        getDeeplinkUrl(action: Action<DeeplinkResult>): void;
        deleteDeeplinkUrl(): void;
      };
      DocCapture: {
        launchDocCapture: () => void;
      };
      Session: {
        login: () => void;
      };
      OneDrive: {
        show: () => void;
        fileDownloadCompleted: () => void;
      };
      HandSignature: {
        capture: () => void;
      };
    };
  }
}

type Action<T> = (arg: T) => void;

export type CardInfo = {
  address?: {
    thaiAddressAmphur?: string;
    thaiAddressDistrict?: string;
    thaiAddressMoo?: string;
    thaiAddressNumber?: string;
    thaiAddressProvince?: string;
    thaiAddressSoi?: string;
    thaiAddressThanon?: string;
    thaiAddressTrok?: string;
    zipCode?: string;
  };
  countryOfIssue?: string;
  dob?: string;
  docNo?: string;
  docType?: string;
  engFirstName?: string;
  engLastName?: string;
  engMiddleName?: string;
  engTitle?: string;
  expDate?: string;
  genderCode?: string;
  issueDate?: string;
  issueRequestNo?: string;
  laserCode?: string;
  manualKeyIn?: boolean;
  nationalityCode?: string;
  oldDocNo?: string;
  photo?: string;
  smartcardImage?: string;
  thaiFirstName?: string;
  thaiLastName?: string;
  thaiMiddleName?: string;
  thaiTitle?: string;
};

export type DeeplinkResult = {
  url: string;
};

export type ReadCardResult = {
  status: number;
  cardInfo: string;
  error: string;
};

export type ReadFacialResult = {
  status: number;
  data: string;
  error: string;
};

export type DeviceDetailsResult = {
  deviceUUID: string;
  appVersion: string;
  deviceName: string;
  deviceIP: string;
};
export type DeviceLocationResult = {
  deviceLongitude: number;
  deviceLatitude: number;
};

export type CaptivaDocInput = {
  sessionid: string;
  type: "color" | "";
  multiple: "yes" | "no";
  format: string;
  count: string;
  token: string;
};

/**
 * @property status
 * - '0' -> user cancel UI to save , batch not yet generated in Captiva
 * - '1' -> success generated the batch
 * - '-1' -> failed to generate and save the batch
 */
export type CaptivaDocResult = {
  status: "0" | "1" | "-1";
  batchid?: string;
  docSessionID?: string;
};

export type CoreDataResult = {
  status: number;
  value: string;
  error: string;
};

export type CoreDataInput = {
  key: string;
  value?: string;
};

export type ClearWebViewCacheResult = {
  value: string;
};
