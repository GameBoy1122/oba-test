"use client";

import { IFrame } from "@/components/iframe";
import styles from "./page.module.scss";
import Stack from "react-bootstrap/Stack";
import { loadLocalStorage } from "@/utils/localStorage";
import { redirect } from "next/navigation";
import { useAppStore } from "@/zustand/useAppStore";

const getToken = () => {
  const root = loadLocalStorage("persist:root");
  if (!root) return null;
  const { state } = JSON.parse(root);
  return state?.token;
};

export default function IonboardPage() {
  const token = useAppStore((state) => state.token);
  const isAuthenticated = useAppStore((state) => state.isAuthenticated);
  if (typeof window == "undefined") return null;

  if (!token && !isAuthenticated) {
    redirect("/login");
  }

  return (
    <Stack className={styles.main}>
      <IFrame
        id="ionboard"
        title="ionboard"
        allowFullScreen
        // src="https://iwealth-uat.se.scb.co.th/portalserver/scb-indi/login"
        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.1850828944166!2d100.56120567578056!3d13.827922195525101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29cf9d90531ab%3A0x2643b09a2b04cbe8!2sSCB%20Park%20Plaza%20West!5e0!3m2!1sth!2sth!4v1699439320432!5m2!1sth!2sth"
        // loading="lazy"
        // referrerPolicy="no-referrer-when-downgrade"
        // src="http://127.0.0.1:8000/index2.html?title=iOnboard&feature=ionboard"
        src={`/distribution/ionboard/index.html?token=${token}`}
      />
    </Stack>
  );
}
