import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./MessageAlert.module.scss";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/zustand/useAppStore";

interface MessageAlertProps {
  show: boolean;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  id?: string;
  handleClose: () => void;
}

function MessageAlert(props: MessageAlertProps) {
  const { show, message, handleClose, cancelText, confirmText, title, id } =
    props;
  const router = useRouter();
  const iframe = useAppStore((state) => state.iframe);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      backdrop="static"
      keyboard={false}
      // size="xl"
      dialogClassName={styles["modal"]}
    >
      <Modal.Body className={styles["modal_body"]}>
        {/* <i
          className={`bi bi-exclamation-circle text-warning ${styles["modal_body_icon"]}`}
        ></i> */}
        <p className={styles["modal_body_heading"]}>{title}</p>

        <p className={styles["modal_body_content"]}>{message}</p>
        <div className={styles["modal_body_button-container"]}>
          <Button
            className={`btn-outline-purple ${styles["modal_body_button"]}`}
            onClick={() => {
              handleClose();
              if (iframe?.contentWindow) {
                iframe?.contentWindow?.postMessage(
                  JSON.stringify({
                    type: "alert",
                    method: "success",
                    id: id,
                  }),
                  "http://127.0.0.1:8000/index2.html"
                );
              }
            }}
          >
            {confirmText}
          </Button>
          <Button
            className={`btn-purple ${styles["modal_body_button"]}`}
            // onClick={handleClose}
            onClick={() => {
              handleClose();
              if (iframe?.contentWindow) {
                iframe?.contentWindow?.postMessage(
                  JSON.stringify({
                    type: "alert",
                    method: "error",
                    id: id,
                  }),
                  "http://127.0.0.1:8000/index2.html"
                );
              }
            }}
          >
            {cancelText}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MessageAlert;
