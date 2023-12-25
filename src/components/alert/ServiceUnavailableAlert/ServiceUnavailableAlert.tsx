import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./ServiceUnavailableAlert.module.scss";

interface ServiceUnavailableAlertProps {
  show: boolean;
  handleClose: () => void;
}

function ServiceUnavailableAlert(props: ServiceUnavailableAlertProps) {
  const { show, handleClose } = props;
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      backdrop="static"
      keyboard={false}
      dialogClassName={styles["modal"]}
    >
      {/* <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header> */}
      <Modal.Body className={styles["modal_body"]}>
        <i
          className={`bi bi-exclamation-circle text-danger ${styles["modal_body_icon"]}`}
        ></i>
        <p className={styles["modal_body_heading"]}>ไม่สามารถดำเนินการต่อได้</p>
        <p className={styles["modal_body_content"]}>
          ระบบไม่สามารถใช้งานได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง
        </p>

        <Button
          className={`btn-purple ${styles["modal_body_button"]}`}
          onClick={handleClose}
        >
          ตกลง
        </Button>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default ServiceUnavailableAlert;
