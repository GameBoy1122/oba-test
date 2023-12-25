"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import style from "./TabOpenAccount.module.scss";
import OBAButton from "@/components/buttons/OBAButton";
import MainCard from "../MainCard/MainCard";
import { useLandingStore } from "../../_zustand/useStore";

// const cards = [
//   {
//     id: "ionboard",
//     nameCard: "iOnboard",
//     imgCard: "/images/card-img.svg",
//     isCardDisabled: false,
//   },
//   {
//     id: "startbiz",
//     nameCard: "Startbiz",
//     imgCard: "/images/card-img.svg",
//     isCardDisabled: false,
//   },
//   {
//     id: "iprofile",
//     nameCard: "iProfile",
//     imgCard: "/images/card-img.svg",
//     isCardDisabled: false,
//   },
// ];

export default function TabOpenAccount() {
  const [latestClickedId, setLatestClickedId] = useState<string | null>(null);
  const router = useRouter();
  const readCard = useLandingStore((state) => state.readCard);

  // const handleNavigate = () => {
  //   // Perform the desired navigation logic based on the selected card
  //   if (latestClickedId === "ionboard") {
  //     router.push("/ionboard");
  //   } else if (latestClickedId === "startbiz") {
  //     router.push("/startbiz");
  //   } else if (latestClickedId === "iprofile") {
  //     router.push("/iprofile");
  //   } else if (latestClickedId === "rbfront") {
  //     router.push("/rbfront");
  //   } else {
  //     router.push("/landing");
  //   }
  // };

  return (
    <div className={style["container"]}>
      <div className={style["title"]}>กรุณาเลือกประเภทผลิตภัณฑ์</div>
      <div>
        <img
          src="/images/icon-scan-id.png"
          alt="scan-id"
          style={{ height: "35vh" }}
        />
      </div>
      {/* <div className={style["cardsbox"]}>
        {cards?.map((card) => (
          <MainCard
            {...card}
            key={card.id}
            onClick={setLatestClickedId}
            active={latestClickedId === card.id}
            disabled={card.isCardDisabled}
          />
        ))}
      </div> */}
      <div className={style["title"]}>
        สอดบัตรในเครื่องอ่านบัตรเเละกดปุ่ม 'สเเกน' หรือ{" "}
        <span
          style={{
            textDecoration: "underline",
            fontSize: "inherit",
            color: "#4f2a81",
            cursor: "pointer",
          }}
        >
          ค้นหาข้อมูลลูกค้า
        </span>
      </div>

      <OBAButton id="scan" onClick={readCard}>
        สเเกน
      </OBAButton>
    </div>
  );
}
