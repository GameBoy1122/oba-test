import { StateCreator } from "zustand";

type DocScannerState = {};

type DocScannerAction = {};

export type DocScannerSlice = DocScannerState & DocScannerAction;

export const createDocScannerSlice: StateCreator<DocScannerSlice> = (
  set,
  get
) => ({});
