"use client";
import styles from "./LoadingPopup.module.scss";
import { useTranslations } from "next-intl";

interface LoadingPopupProps {
  isLongLoading?: boolean;
}

export default function LoadingPopup(props: LoadingPopupProps) {
  const { isLongLoading } = props;
  const t = useTranslations("common");
  return (
    <div className={styles.container}>
      <div className={styles["loadingContainer"]}>
        <div className={styles["loadingContainer_spinner"]}>
          <div className={styles["lds-spinner"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles["loadingContainer_title"]}>{t("loading")}</div>
        {isLongLoading && (
          <div className={styles["loadingContainer_detail"]}>
            ขั้นตอนนี้อาจใช้เวลานาน กรุณาอย่าออกจากหน้านี้
          </div>
        )}
      </div>
    </div>
  );
}
