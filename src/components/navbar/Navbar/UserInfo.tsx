"use client";
import React from "react";
import { LanguageChanger } from "@/components/language";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocale } from "next-intl";
import LogoutPopover from "./LogoutPopover";
import styles from "./Navbar.module.scss";

const MOCK_USER = {
  userid: "s01234",
  username: "ณิชนันท์ ศักดิ์สินธุ์ชัย",
  branch: "สาขารัชโยธิน",
};

export default function UserInfo() {
  const locale = useLocale();
  return (
    <div className={styles["navbar-items"]}>
      <div className={styles["userinfo"]}>
        <p className={styles["userinfo-name"]}>{MOCK_USER.username}</p>
        <p className={styles["userinfo-details"]}>
          รหัสพนักงาน : {MOCK_USER.userid} | {MOCK_USER.branch}
        </p>
      </div>
      <LanguageChanger locale={locale ?? ""} />
      <LogoutPopover>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          size="xl"
          color="white"
        />
      </LogoutPopover>
    </div>
  );
}
