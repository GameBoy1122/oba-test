declare interface Window {
  Plugin: {
    NationalID: {
      readThaiCard(action: Action<models.ReadCardResult>): void;
      readSCBCardWithType(
        cardType: string,
        action: Action<models.ReadCardResult>
      ): void;
    };
    FacialID: {
      staticFaceOverlay(action: Action<models.ReadFacialResult>): void;
    };
    Utilities: {
      deviceDetails(action: Action<models.DeviceDetailsResult>): void;
      deviceGeoLocation(action: Action<models.DeviceLocationResult>): void;
      openURL(page: string, loadExternal: boolean): void;
      openDeeplinkURL(page: string, loadExternal: boolean): void;
      clearWebViewCache(action: Action<models.ClearWebViewCache>): void;
    };
    CaptivaDocScanner: {
      start(
        captivaCreateBatch: models.CaptivaDocInput,
        action: Action<models.CaptivaDocResult>
      ): void;
      submitBatch(
        captivaCloseBatchArgs: models.CaptivaDocResult,
        action: Action<models.CaptivaDocResult>
      ): void;
      deleteBatch(
        captivaCloseBatchArgs: models.CaptivaDocResult,
        action: Action<models.CaptivaDocResult>
      ): void;
    };
    CoreDataPlugin: {
      clearAll(action: Action<models.CoreDataResult>): void;
      get(
        input: models.CoreDataInput,
        action: Action<models.CoreDataResult>
      ): void;
      set(
        input: models.CoreDataInput,
        action: Action<models.CoreDataResult>
      ): void;
      delete(
        input: models.CoreDataInput,
        action: Action<models.CoreDataResult>
      ): void;
    };
    Deeplink: {
      getDeeplinkUrl(action: Action<models.DeeplinkResult>): void;
    };
  };
}
