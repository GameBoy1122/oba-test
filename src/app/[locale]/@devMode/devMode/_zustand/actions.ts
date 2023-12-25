import { PageShow, useDevModeStore } from "./useDevModeStore";

export const setPageShow = (pageShow: PageShow) => {
  useDevModeStore.setState({ pageShow });
};
