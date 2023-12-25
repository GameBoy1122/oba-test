"use client";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./Navbar.module.scss";
interface BackNavigationProps {
  title: string;
}
export default function BackNavigation(props: BackNavigationProps) {
  const { title } = props;
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <div className={styles["navbar-items"]}>
      <button className={styles["backbutton"]} onClick={handleClick}>
        <span className={styles["backbutton-image"]}>
          <FontAwesomeIcon icon={faAngleLeft} size={"lg"} />
        </span>
        <p className={styles["backbutton-title"]}>{title}</p>
      </button>
    </div>
  );
}
