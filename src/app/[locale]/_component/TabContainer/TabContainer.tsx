import React from "react";
import styles from "./TabContainer.module.scss";
import { ActiveTab, setActiveTab } from "../../_zustand/useStore";

interface TabContainerProps {
  tabs: {
    id: ActiveTab;
    name: string;
    numNotification: number;
  }[];
  activeTab: ActiveTab;
}

function TabContainer(props: TabContainerProps) {
  const { activeTab, tabs } = props;
  return (
    <div className={styles["container_tabs"]}>
      {tabs?.map((tab) => (
        <button
          key={tab.id}
          className={`${styles["tab"]} ${
            activeTab !== tab.id ? styles["tab--disabled"] : ""
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.name}
          {tab.numNotification > 0 && (
            <div className={styles["numNotification"]}>
              {tab.numNotification}
            </div>
          )}
        </button>
      ))}
    </div>
  );
}

export default TabContainer;
