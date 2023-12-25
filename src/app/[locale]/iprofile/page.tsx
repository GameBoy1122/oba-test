"use client";

import { IFrame } from "@/components/iframe";
import styles from "./page.module.scss";
import Stack from "react-bootstrap/Stack";

export default function IprofilePage() {
  return (
    <Stack className={styles.main}>
      <IFrame
        id="iprofile"
        title="iprofile"
        allowFullScreen
        // src="https://iprofile-uat.se.scb.co.th/"
        src="http://127.0.0.1:8000/index2.html?title=iProfile&feature=iprofile"
      />
    </Stack>
  );
}
