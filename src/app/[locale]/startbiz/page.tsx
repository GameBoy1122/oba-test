import styles from "./page.module.scss";
import { IFrame } from "@/components/iframe";

export default function StartbizPage() {
  return (
    <div className={styles.main}>
      <IFrame
        id="startbiz"
        title="startbiz"
        allowFullScreen
        src="https://iwealth-uat.se.scb.co.th/portalserver/scb-indi/login"
      />
    </div>
  );
}
