import React from "react";
import styles from "./Main.module.scss";
import { useDevModeStore, PageShow } from "../../_zustand/useDevModeStore";
import { setPageShow } from "../../_zustand/actions";

function Main() {
  const handleSelectPage = (pageShow: PageShow) => {
    setPageShow(pageShow);
  };
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => {
          handleSelectPage("dip-chip");
        }}
      >
        Dip Chip
      </button>
      <button
        className={styles.button}
        onClick={() => {
          handleSelectPage("doc-scanner");
        }}
      >
        Doc Scanner
      </button>
    </div>
  );
}

export default Main;
