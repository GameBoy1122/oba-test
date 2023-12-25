"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import TabContainer from "./_component/TabContainer/TabContainer";
import TabOpenAccount from "./_component/TabOpenAccount/TabOpenAccount";
import { useLandingStore, ActiveTab } from "./_zustand/useStore";
import styles from "./page.module.scss";
import Stack from "react-bootstrap/Stack";
import { Button, ServiceCard, Toast } from "@/components";

const cards = [
  {
    id: "ionboard",
    nameCard: "iOnboard",
    imgCard: "/images/card-img.svg",
    isCardDisabled: false,
  },
  {
    id: "startbiz",
    nameCard: "Startbiz",
    imgCard: "/images/card-img.svg",
    isCardDisabled: true,
  },
  {
    id: "iprofile",
    nameCard: "iProfile",
    imgCard: "/images/card-img.svg",
    isCardDisabled: false,
  },
  {
    id: "rbfront",
    nameCard: "RB front",
    imgCard: "/images/card-img.svg",
    isCardDisabled: false,
  },
];

const tabs: {
  id: ActiveTab;
  name: string;
  numNotification: number;
}[] = [
  { id: "tab1", name: "เปิดบัญชีบุคคลธรรมดา", numNotification: 0 },
  {
    id: "tab2",
    name: "เปิดบัญชีนิติบุคคล",
    numNotification: 0,
  },
  {
    id: "tab3",
    name: "รายการที่เสร็จเเล้ว",
    numNotification: 1,
  },
  {
    id: "tab4",
    name: "รายการรออนุมัติ",
    numNotification: 1,
  },
  {
    id: "tab5",
    name: "รายงาน",
    numNotification: 0,
  },
];

export default function LandingPage() {
  const t = useTranslations("landing");
  const [latestClickedId, setLatestClickedId] = useState<string | null>(null);
  const router = useRouter();
  const activeTab = useLandingStore((state) => state.activeTab);

  const handleNavigate = () => {
    // Perform the desired navigation logic based on the selected card
    if (latestClickedId === "ionboard") {
      router.push("/ionboard");
    } else if (latestClickedId === "startbiz") {
      router.push("/startbiz");
    } else if (latestClickedId === "iprofile") {
      router.push("/iprofile");
    } else if (latestClickedId === "rbfront") {
      router.push("/rbfront");
    }
  };

  const showTabContent = (activeTab?: ActiveTab) => {
    if (activeTab === "tab1" || activeTab == null) {
      return <TabOpenAccount />;
    } else return null;
  };

  return (
    <Stack className={styles.main}>
      <div className={styles["container"]}>
        <TabContainer tabs={tabs} activeTab={activeTab} />
        <div className={styles["container_tabs_content"]}>
          {showTabContent(activeTab)}
        </div>
      </div>
      {/* <section className={styles["container"]}> */}
      {/* header */}
      {/* <div className={styles["title"]}>{t("title")}</div> */}
      {/* content */}
      {/* <div className={styles["cardsbox"]}>
          {cards?.map((card) => (
            <ServiceCard
              key={card.id}
              id={card.id}
              title={card.nameCard}
              image={card.imgCard}
              disabled={card.isCardDisabled}
              disabledMessage={t("not_available")}
              active={latestClickedId === card.id}
              onClick={setLatestClickedId}
            />
          ))}
        </div>
        <Button onClick={handleNavigate} disabled={!latestClickedId}>
          {t("confirm")}
        </OBAButton>
        <OBAButton
          onClick={handleNavigate}
          disabled={!latestClickedId}
          variant="secondary"
          size="lg"
        >
          {t("confirm")}
        </OBAButton>
        <OBAButton
          onClick={handleNavigate}
          disabled={!latestClickedId}
          variant="previous"
        >
          {t("confirm")}
        </OBAButton>
        <OBAButton
          onClick={handleNavigate}
          disabled={!latestClickedId}
          variant="outline"
        >
          {t("confirm")}
        </OBAButton>
        <OBAButton
          onClick={handleNavigate}
          disabled={!latestClickedId}
          variant="next"
        >
          {t("confirm")}
        </OBAButton> */}
      {/* <div
        onClick={() => {
          router.push("/devMode");
        }}
        style={{
          cursor: "pointer",
          position: "absolute",
          right: "20px",
          bottom: "10px",
          color: "#4f2a81",
          zIndex: 10,
        }}
      >
        DEV MODE
      </div> */}
      {/* </section> */}
    </Stack>
  );
}
