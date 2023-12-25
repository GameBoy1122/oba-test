import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./SessionExpireAlert.module.scss";
import { useRouter } from "next/navigation";

interface SessionExpireAlertProps {
  show: boolean;
  handleClose: () => void;
}

function SessionExpireAlert(props: SessionExpireAlertProps) {
  const { show, handleClose } = props;
  const router = useRouter();
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
        <i
          className={`bi bi-exclamation-circle text-warning ${styles["modal_body_icon"]}`}
        ></i>
        <p className={styles["modal_body_heading"]}>Session Expire</p>

        <p className={styles["modal_body_content"]}>Your session is expired</p>

        <Button
          className={`btn-purple ${styles["modal_body_button"]}`}
          onClick={() => {
            handleClose();
            router.push("/login");
          }}
        >
          Close
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default SessionExpireAlert;
