"use client";
import React, { useEffect } from "react";
import styles from "./DipChip.module.scss";
import { useDevModeStore } from "../../_zustand/useDevModeStore";
import { setPageShow } from "../../_zustand/actions";
import moment from "moment";

function DipChip() {
  const onDipChip = useDevModeStore((state) => state.onDipChip);
  const cardInfo = useDevModeStore((state) => state.cardInfo);
  const isLoading = useDevModeStore((state) => state.isLoading);
  console.log("🚀 ~ file: DipChip.tsx:10 ~ DipChip ~ cardInfo:", cardInfo);

  useEffect(() => {
    onDipChip();
  }, []);

  return (
    <div className={styles.container}>
      {/* <div className={styles["container-header"]}>Dip Chip</div> */}
      <div className={styles["container-body"]}>
        {isLoading ? (
          <div className={styles["container-body-loading"]}>Loading...</div>
        ) : (
          cardInfo && (
            <>
              <div className={styles["container-body-card"]}>
                <div className={styles["container-body-card-row"]}>
                  <p className={styles["container-body-card-row-title"]}>
                    ชื่อ - นามสกุล :
                  </p>
                  <p className={styles["container-body-card-row-content"]}>
                    {`${cardInfo.thaiFirstName} ${cardInfo.thaiLastName}`}
                  </p>
                </div>
                <div className={styles["container-body-card-row"]}>
                  <p className={styles["container-body-card-row-title"]}>
                    ชื่อ (ภาษาอังกฤษ) :
                  </p>
                  <p className={styles["container-body-card-row-content"]}>
                    {cardInfo.engFirstName}
                  </p>
                </div>
                <div className={styles["container-body-card-row"]}>
                  <p className={styles["container-body-card-row-title"]}>
                    นามสกุล (ภาษาอังกฤษ) :
                  </p>
                  <p className={styles["container-body-card-row-content"]}>
                    {cardInfo.engLastName}
                  </p>
                </div>
                <div className={styles["container-body-card-row"]}>
                  <p className={styles["container-body-card-row-title"]}>
                    เลขประจำตัวประชาชน :
                  </p>
                  <p className={styles["container-body-card-row-content"]}>
                    {cardInfo.docNo}
                  </p>
                </div>
                <div className={styles["container-body-card-row"]}>
                  <p className={styles["container-body-card-row-title"]}>
                    เพศ :
                  </p>
                  <p className={styles["container-body-card-row-content"]}>
                    {cardInfo.genderCode == "F" ? "ชาย" : "หญิง"}
                  </p>
                </div>
                <div className={styles["container-body-card-row"]}>
                  <p className={styles["container-body-card-row-title"]}>
                    วัน เดือน ปี พ.ศ. เกิด :
                  </p>
                  <p className={styles["container-body-card-row-content"]}>
                    {moment(cardInfo.dob)
                      .locale("th")
                      .add(543, "year")
                      .format("L")}
                  </p>
                </div>
                <div className={styles["container-body-card-row"]}>
                  <p className={styles["container-body-card-row-title"]}>
                    สัญชาติ :
                  </p>
                  <p className={styles["container-body-card-row-content"]}>
                    {/* {cardInfo.} */}
                  </p>
                </div>
              </div>
              <div className={styles["container-body-image"]}>
                <img src={cardInfo.photo} height="200px" alt="card-image" />
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
}

export default DipChip;
