"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import style from "./TabOpenAccount.module.scss";
import { Button, ServiceCard } from "@/components";

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
    isCardDisabled: false,
  },
  {
    id: "iprofile",
    nameCard: "iProfile",
    imgCard: "/images/card-img.svg",
    isCardDisabled: false,
  },
];

export default function TabOpenAccount() {
  const [latestClickedId, setLatestClickedId] = useState<string | null>(null);
  const router = useRouter();

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
    } else {
      router.push("/landing");
    }
  };

  return (
    <div className={style["container"]}>
      <div className={style["title"]}>กรุณาเลือกประเภทผลิตภัณฑ์</div>
      <div className={style["cardsbox"]}>
        {cards?.map((card) => (
          <ServiceCard
            key={card.id}
            title={card.nameCard}
            image={card.imgCard}
            id={card.id}
            key={card.id}
            onClick={setLatestClickedId}
            active={latestClickedId === card.id}
            disabled={card.isCardDisabled}
          />
        ))}
      </div>
      <Button onClick={handleNavigate} disabled={!latestClickedId}>
        {"ตกลง"}
      </Button>
    </div>
  );
}
