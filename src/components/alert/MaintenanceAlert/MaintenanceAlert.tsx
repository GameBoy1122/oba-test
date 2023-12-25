import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./MaintenanceAlert.module.scss";

interface MaintenanceAlertProps {
  show: boolean;
  handleClose: () => void;
}

function MaintenanceAlert(props: MaintenanceAlertProps) {
  const { show, handleClose } = props;
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      backdrop="static"
      keyboard={false}
      size="xl"
      dialogClassName={styles["modal"]}
    >
      {/* <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header> */}
      <Modal.Body className={styles["modal_body"]}>
        <i
          className={`bi bi-clock text-warning ${styles["modal_body_icon"]}`}
        ></i>
        <p className={styles["modal_body_heading"]}>Temporarily Unavailable</p>
        <p className={styles["modal_body_heading"]}>ปิดให้บริการชั่วคราว</p>
        <p className={styles["modal_body_content"]}>
          The service istemporarily unavailablesince we are performing
          maintenance.
          <br />
          Please try again later. We apologizefor any inconvenience.
        </p>
        <p className={styles["modal_body_content"]}>
          ไม่สามารถใช้บริการได้ชั่วคราว เนื่องจากอยู่ในระหว่างการปรับปรุงระบบ
          <br />
          กรุณาลองใหม่อีกครั้งภายหลัง ขออภัยในความไม่สะดวก
        </p>
        <Button
          className={`btn-purple ${styles["modal_body_button"]}`}
          onClick={handleClose}
        >
          ปิด
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

export default MaintenanceAlert;
