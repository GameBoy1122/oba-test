"use client";

import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import style from "./SelectedAppNavbar.module.scss";

export default function SelectedAppNavbar() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <div className={style["navcontainer"]}>
      <div className={style["left-container"]} onClick={handleClick}>
        <span className={style["left-container__image"]}>
          <FontAwesomeIcon icon={faAngleLeft} size={"xl"} />
        </span>
        <div className={style["left-container__title"]}>กลับสู่หน้าหลัก</div>
      </div>
      <div></div>
    </div>
  );
}
