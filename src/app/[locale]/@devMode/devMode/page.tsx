"use client";

import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";
import { Main, DipChip, DocScanner } from "./_component";
import { useDevModeStore } from "./_zustand/useDevModeStore";
import { setPageShow } from "./_zustand/actions";

function page() {
  const router = useRouter();
  const pageShow = useDevModeStore((state) => state.pageShow);

  const handleClose = () => {
    setPageShow("main");
    router.back();
  };

  const showContent = () => {
    switch (pageShow) {
      case "dip-chip":
        return <DipChip />;
      case "doc-scanner":
        return <DocScanner />;
      default:
        return <Main />;
    }
  };

  return (
    <div key="dev-mode">
      <Modal
        show
        onHide={handleClose}
        size="lg"
        key="modal-dev-mode"
        dialogClassName={styles["modal"]}
      >
        <Modal.Header className={styles["modal-header"]}>DEV MODE</Modal.Header>
        <Modal.Body className={styles["modal-body"]}>
          {showContent()}
        </Modal.Body>

        {pageShow != "main" && (
          <Modal.Footer className={styles["modal-footer"]}>
            <button
              onClick={() => {
                setPageShow("main");
              }}
              className={styles["modal-footer-button"]}
            >
              กลับ
            </button>
          </Modal.Footer>
        )}
      </Modal>
    </div>
  );
}

export default page;
