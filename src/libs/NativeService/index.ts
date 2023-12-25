"use client";

import type {
  CardInfo,
  CaptivaDocInput,
  DeviceDetailsResult,
  CaptivaDocResult,
  DeeplinkResult,
  ClearWebViewCacheResult,
} from "./types";

if (process.env.NEXT_PUBLIC_MOCK) {
  require("./mock");
}

function pluginExisted<T extends keyof Window["Plugin"]>(name: T): Promise<Window['Plugin'][T]> {
  if (typeof window === "undefined") {
    return Promise.reject();
  }
  const plugin = window.Plugin[name];
  return plugin != null ? Promise.resolve(plugin) : Promise.reject();
}

export function readThaiCard(): Promise<CardInfo> {
  return pluginExisted("NationalID")
    .then(plugin =>
      new Promise((resolve, reject) => {
        plugin.readThaiCard(res => {
          if (res && res.status < 0) {
            resolve(JSON.parse(res.cardInfo));
          } else {
            reject();
          }
        })
      })
    )
}

export function readCardNumber(type: string): Promise<CardInfo> {
  return pluginExisted("NationalID")
    .then(plugin =>
      new Promise<CardInfo>((resolve, reject) => {
        plugin.readSCBCardWithType(type, res => {
          if (res && res.status < 0) {
            resolve(JSON.parse(res.cardInfo));
          } else {
            reject();
          }
        });
      })
    )
}

export function readFacial(): Promise<string> {
  return pluginExisted("FacialID")
    .then(plugin =>
      new Promise((resolve, reject) => {
        plugin.staticFaceOverlay(res => {
          if (res && res.status < 0) {
            resolve(res.data);
          } else {
            reject();
          }
        });
      })
    )
}

export function getDeviceDetails(): Promise<DeviceDetailsResult> {
  return pluginExisted("Utilities")
    .then(plugin =>
      new Promise<DeviceDetailsResult>((resolve, reject) => {
        plugin.deviceDetails(res => {
          res ? resolve(res) : reject();
        })
      })
    )
}

export function clearCacheNative(): Promise<ClearWebViewCacheResult> {
  return pluginExisted("Utilities")
    .then(plugin =>
      new Promise((resolve, reject) => {
        plugin.clearWebViewCache(res => {
          res ? resolve(res) : reject();
        });
      })
    )
}

export function getDeeplinkUrl(): Promise<DeeplinkResult> {
  return pluginExisted("Deeplink")
    .then(plugin =>
      new Promise((resolve, reject) => {
        plugin.getDeeplinkUrl(res => {
          if (res) {
            resolve(JSON.parse(res.url));
          } else {
            reject(res);
          }
        });
      })
    )
}

export function openCaptiva(captivaCreateBatch: CaptivaDocInput): Promise<CaptivaDocResult> {
  return pluginExisted("CaptivaDocScanner")
    .then(plugin =>
      new Promise((resolve) => {
        plugin.start(captivaCreateBatch, (res: CaptivaDocResult) => {
          resolve(res)
        });
      })
    )
}

export function submitCaptivaBatch(startResult: CaptivaDocResult): Promise<boolean> {
  return pluginExisted("CaptivaDocScanner")
    .then(plugin =>
      new Promise((resolve, reject) => {
        plugin.submitBatch(startResult, (res: CaptivaDocResult) => {
          if (res.status === '1') {  // Success callback
            resolve(true);
          } else {
            reject(false);
          }
        });
      })
    )
}

export function deleteCaptivaBatch(startResult: CaptivaDocResult): Promise<boolean> {
  return pluginExisted("CaptivaDocScanner")
    .then(plugin =>
      new Promise((resolve, reject) => {
        plugin.deleteBatch(startResult, (res: CaptivaDocResult) => {
          if (res.status === '1') {  // Success callback
            resolve(true);
          } else {
            reject(false);
          }
        });
      })
    )
}

export function openDeeplinkURL(page: string, loadExternal = false) {
  return pluginExisted("Utilities")
    .then(plugin =>
      plugin.openDeeplinkURL(page, loadExternal)
    )

}

export function openURL(page: string, loadExternal = false) {
  return pluginExisted("Utilities")
    .then(plugin =>
      plugin.openURL(page, loadExternal)
    )
}


