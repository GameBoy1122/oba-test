import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./SessionExpireWarningAlert.module.scss";
import { useRouter } from "next/navigation";
import Countdown, { CountdownRendererFn } from "react-countdown";

type SessionExpireWarningAlertProps = {
  show: boolean;
  handleClose: () => void;
};

const Completionist = () => <span>You are good to go!</span>;

function SessionExpireWarningAlert(props: SessionExpireWarningAlertProps) {
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
        <p className={styles["modal_body_heading"]}>Session Expire Warning</p>

        <p className={styles["modal_body_content"]}>
          Your session will expire in{" "}
          <Countdown
            date={Date.now() + 10000}
            renderer={({ hours, minutes, seconds, completed }) => {
              if (completed) {
                handleClose();
                router.push("/login");
              }
              return (
                <span className={styles["modal_body_content"]}>{seconds}</span>
              );
            }}
          />{" "}
          seconds.
          <br />
          Do you want to extend the session?
        </p>
        <div className={styles["modal_body_button-container"]}>
          <Button
            className={`btn-outline-purple ${styles["modal_body_button"]}`}
            onClick={handleClose}
          >
            OK
          </Button>
          <Button
            className={`btn-purple ${styles["modal_body_button"]}`}
            // onClick={handleClose}
            onClick={() => {
              handleClose();
              router.push("/login");
            }}
          >
            Logout now
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SessionExpireWarningAlert;
