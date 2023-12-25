import { StateCreator } from "zustand";
import {} from "@/utils/localStorage";
import axios from "@/utils/axiosInstance";
import { request } from "@/zustand/actions";

type UserLogin = {
  username: string;
  password: string;
};

export type AuthAction = {
  login: (authInfo: UserLogin) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => void;
};

export type AuthState = {
  userInfo: UserData | null;
  isAuthenticated: boolean;
  token: string;
};

export type UserData = {
  username: string;
  userid: string;
  userrole: string;
  branch: string;
  branchid: string;
  occode: string;
  samcode: string;
  team: string;
  license: string;
  permissions: string[];
};

export type AuthSlice = AuthState & AuthAction;

export const createAuthSlice: StateCreator<AuthState & AuthAction> = (
  set,
  get
) => ({
  // initialState...
  isAuthenticated: false,
  userInfo: null,
  token: "",
  // intialAction...
  login: async (values) => {
    const res = await axios.post("/api/login", values);
    if (res.status == 200) {
      set((state) => ({
        userInfo: {
          username: values.username,
          branch: "",
          branchid: "",
          license: "",
          occode: "",
          samcode: "",
          team: "",
          userid: "",
          userrole: "",
          permissions: [],
        },
        isAuthenticated: true,
        token: res?.headers?.["x-token"],
      }));
    }
  },
  logout: async () => {
    set((state) => ({
      userInfo: null,
      isAuthenticated: false,
      token: "",
    }));
  },
  checkAuth: () => {},
});
