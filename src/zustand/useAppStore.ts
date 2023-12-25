import { create, StateCreator } from "zustand";
import { createAuthSlice, AuthSlice, AuthAction } from "./features/auth";
import {
  createIFrameSlice,
  IFrameSlice,
  IFrameAction,
} from "./features/iframe";
import { createAlertSlice, AlertSlice, AlertAction } from "./features/alert";
import { APISlice, createAPISlice, APIAction } from "./features/api";
import { persist, PersistOptions, createJSONStorage } from "zustand/middleware";

export type AppStore = AuthSlice & IFrameSlice & AlertSlice & APISlice;

export type AppDispatch = {
  dispatch: (args: AuthAction & IFrameAction & AlertAction & APIAction) => void;
};

type AppPersist = (
  config: StateCreator<AppStore>,
  options: PersistOptions<Partial<AppStore>>
) => StateCreator<AppStore>;

export const useAppStore = create<AppStore, []>(
  (persist as AppPersist)(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createIFrameSlice(...a),
      ...createAlertSlice(...a),
      ...createAPISlice(...a),
      // dispatch: (args) => a[0].set((state) => reducer(state, args)),
      // dispatch: (args) => {
      //   const set = a[0];
      //   set((state) => args);
      // },
    }),
    {
      name: "persist:root",
      storage: createJSONStorage(() => localStorage),
      // partialize: (state) =>
      //   Object.fromEntries(
      //     Object.entries(state).filter(([key]) => !["userInfo"].includes(key))
      //   ),
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        userInfo: state.userInfo,
        token: state.token,
      }),
    }
  )
);

// export const dispatch = useAppStore((state) => state.dispatch);

///////////////////////////////////////////////////////////////////

// context provider

// export const useCreateAppStore = createStore<AppStore, []>(
//   (persist as AppPersist)(
//     (...a) => ({
//       ...createAuthSlice(...a),
//       ...createIFrameSlice(...a),
//       ...createAlertSlice(...a),
//     }),
//     {
//       name: "persist:root",
//       storage: createJSONStorage(() => localStorage),
//       // partialize: (state) =>
//       //   Object.fromEntries(
//       //     Object.entries(state).filter(([key]) => !["userInfo"].includes(key))
//       //   ),
//       partialize: (state) => ({
//         isAuthenticated: state.isAuthenticated,
//         userInfo: state.userInfo,
//       }),
//     }
//   )
// );

///////////////////////////////////////////////////////////////////////
