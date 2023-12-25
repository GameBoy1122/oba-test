"use client";

import React from "react";
import styles from "./page.module.scss";
import { TabOpenAccount, TabSucceedLists, TabContainer } from "./_components";
import { useRbFrontStore, ActiveTab } from "./_zustand/useStore";
import Stack from "react-bootstrap/Stack";
import { useRouter } from "next/navigation";

const showTabContent = (activeTab?: ActiveTab) => {
  if (activeTab === "tab1" || activeTab == null) {
    return <TabOpenAccount />;
  } else if (activeTab === "tab2") {
    return <TabSucceedLists />;
  } else {
    return <div>test3</div>;
  }
};

const tabs: {
  id: ActiveTab;
  name: string;
  numNotification: number;
}[] = [
  {
    id: "tab1",
    name: "เปิดบัญชีใหม่",
    numNotification: 0,
  },
  {
    id: "tab2",
    name: "รายการที่เสร็จแล้ว",
    numNotification: 5,
  },
  {
    id: "tab3",
    name: "รายงาน",
    numNotification: 0,
  },
];

export default function RbfrontPage() {
  const activeTab = useRbFrontStore((state) => state.state.activeTab);
  const router = useRouter();

  return (
    <Stack className={styles.main}>
      <div className={styles["container"]}>
        <TabContainer tabs={tabs} activeTab={activeTab} />
        <div className={styles["container_tabs_content"]}>
          {showTabContent(activeTab)}
        </div>
      </div>
      {/* <div
        onClick={() => {
          router.push("/devMode");
        }}
        style={{
          cursor: "pointer",
          color: "white",
        }}
      >
        DEV MODE
      </div> */}
    </Stack>
  );
}
